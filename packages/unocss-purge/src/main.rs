use std::collections::HashSet;
use std::env;
use std::fs;
use std::io::{ self, Read };
use regex::Regex;
use lightningcss::{
  rules::CssRule,
  stylesheet::{ StyleSheet, ParserOptions, PrinterOptions },
  visitor::{ Visitor, Visit, VisitTypes },
  visit_types,
};

#[derive(Debug)]
pub enum MyError {
  InvalidLengthValue,
}

struct MyVisitor {
  rules_array: Vec<String>,
  component_names_array: Vec<String>,
}

impl MyVisitor {
  fn new() -> Self {
    MyVisitor {
      rules_array: Vec::new(),
      component_names_array: Vec::new(),
    }
  }

  fn set_rules(&mut self, array: Vec<String>) {
    self.rules_array = array;
  }

  fn set_component_names(&mut self, array: Vec<String>) {
    self.component_names_array = array;
  }
}

impl<'i> Visitor<'i> for MyVisitor {
  type Error = MyError;

  fn visit_types(&self) -> VisitTypes {
    visit_types!(RULES)
  }

  fn visit_rule(&mut self, rule: &mut CssRule) -> Result<(), Self::Error> {
    if let CssRule::Style(style_rule) = rule {
      let selectors = style_rule.selectors.to_string();
      let style_name = extract_class_name(&selectors);

      if let Some(valid_style_name) = style_name {
        let lc_style_name = &valid_style_name.to_lowercase().to_string();

        if self.component_names_array.contains(lc_style_name) {
          if !self.rules_array.contains(lc_style_name) {
            *rule = CssRule::Ignored;
          }
        }
      }
    }

    Ok(())
  }
}

fn parse_stylesheet(line: &str) -> StyleSheet {
  StyleSheet::parse(line, ParserOptions::default()).unwrap()
}

fn convert_to_css(stylesheet: &StyleSheet) -> String {
  stylesheet.to_css(PrinterOptions::default()).unwrap().code.to_string()
}

fn process_stylesheet(
  line: &str,
  valid_rules: Vec<String>,
  component_names: Vec<String>
) -> String {
  let mut stylesheet = parse_stylesheet(&line);

  let mut visitor = MyVisitor::new();
  visitor.set_rules(valid_rules);
  visitor.set_component_names(component_names);

  match stylesheet.visit(&mut visitor) {
    Ok(_) => (),
    Err(e) => {
      println!("Error occurred: {:?}", e);
      return "".into();
    }
  }

  return convert_to_css(&stylesheet);
}

fn main() -> Result<(), io::Error> {
  let args: Vec<String> = env::args().collect();

  let (app_path, names_path) = parse_args(args);
  let names_csv = fs::read_to_string(&names_path.unwrap()).unwrap();

  let component_names: Vec<String> = names_csv
    .split(',')
    .map(|s| s.replace("\n", "").to_lowercase().to_string())
    .collect();

  let valid_rules = gen_valid_rules(app_path.unwrap(), component_names.clone());

  let mut input = String::new();
  io::stdin().read_to_string(&mut input)?;

  let css = process_stylesheet(&input, valid_rules, component_names.clone());

  // output to postcss
  println!("{}", css);

  Ok(())
}

fn extract_class_name(selector: &str) -> Option<&str> {
  let re = Regex::new(r"(?:\.|\s)([a-zA-Z0-9]+)(?:-|\.|\[|$)").unwrap();
  let caps = re.captures(selector)?;

  Some(caps.get(1)?.as_str())
}

fn find_matches(regex: &Regex, str: &str) -> Vec<String> {
  regex
    .captures_iter(str)
    .map(|cap| cap[1].to_string())
    .collect()
}

fn filter_unique_values(arr: Vec<String>) -> Vec<String> {
  let mut set = HashSet::new();
  for item in arr {
    set.insert(item);
  }
  set.into_iter().collect()
}

fn gen_valid_rules(
  content_path: String,
  imported_modules: Vec<String>
) -> Vec<String> {
  let content = fs::read_to_string(&content_path).unwrap();
  let re = Regex::new(r#"<([a-zA-Z]+)[^>]*>"#).unwrap();
  let matches = filter_unique_values(find_matches(&re, &content));

  let component_names = matches
    .iter()
    .map(|match_| match_.replace("<", "").replace(">", "").replace("/>", ""))
    .map(|item| {
      let match_ = Regex::new(r"^\w+").unwrap().captures(&item).unwrap();
      match_[0].to_lowercase().to_string()
    })
    .filter(|item| imported_modules.contains(item))
    .collect::<Vec<String>>();

  return component_names;
}

fn parse_args(args: Vec<String>) -> (Option<String>, Option<String>) {
  let mut content: Option<String> = None;
  let mut names: Option<String> = None;

  for arg in &args {
    if arg == "-content" {
      if
        let Some(next_arg) = args.get(
          args
            .iter()
            .position(|x| x == arg)
            .unwrap() + 1
        )
      {
        content = Some(next_arg.clone());
      }
    } else if arg == "-names" {
      if
        let Some(next_arg) = args.get(
          args
            .iter()
            .position(|x| x == arg)
            .unwrap() + 1
        )
      {
        let args = next_arg.clone();

        names = Some(args);
      }
    }
  }

  if content.is_none() {
    eprintln!("param -content was not provided.  Exiting...");
    std::process::exit(1);
  }

  if names.is_none() {
    eprintln!("param -names was not provided. Exiting...");
    std::process::exit(1);
  }

  (content, names)
}
