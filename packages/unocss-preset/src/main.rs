use std::env;
use std::io::{ self, Read };

use lightningcss::{
  rules::CssRule,
  stylesheet::{ StyleSheet, ParserOptions, PrinterOptions },
  visitor::{ Visitor, Visit, VisitTypes },
  visit_types,
};

pub mod helpers;

#[derive(Debug)]
pub enum MyError {
  InvalidLengthValue,
}

struct MyVisitor;

impl<'i> Visitor<'i> for MyVisitor {
  type Error = MyError;

  fn visit_types(&self) -> VisitTypes {
    visit_types!(RULES)
  }

  fn visit_rule(&mut self, rule: &mut CssRule) -> Result<(), Self::Error> {
    if let CssRule::Style(style_rule) = rule {
      helpers::stylesheet::process_styles(style_rule);
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

fn process_stylesheet(line: &str) -> String {
  let mut stylesheet = parse_stylesheet(&line);

  match stylesheet.visit(&mut MyVisitor) {
    Ok(_) => (),
    Err(e) => {
      println!("Error occurred: {:?}", e);
      return "".into();
    }
  }

  return convert_to_css(&stylesheet);
}

fn is_quoted(s: &str) -> bool {
  match (s.chars().next(), s.chars().last()) {
    (Some('"'), Some('"')) | (Some('\''), Some('\'')) => true,
    _ => false,
  }
}

fn remove_quotes(s: &str) -> String {
  match (s.chars().next(), s.chars().last()) {
    (Some('"'), Some('"')) | (Some('\''), Some('\'')) => {
      s.chars()
        .skip(1)
        .take(s.len() - 2)
        .collect()
    }
    _ => s.to_string(),
  }
}

fn main() -> Result<(), io::Error> {
  let args: Vec<String> = env::args().collect();

  let directory = parse_args(args);

  let mut input = String::new();
  io::stdin().read_to_string(&mut input)?;

  let mut style_sheet = String::new();

  for line in input.to_string().lines().into_iter() {
    if
      !line.is_empty() &&
      !line.starts_with("change ") &&
      !line.to_lowercase().contains("unocss")
    {
      if is_quoted(&input) {
        let no_quotes = remove_quotes(&line);

        style_sheet.push_str(&no_quotes);
      } else {
        style_sheet.push_str(line);
      }
    }
  }

  let css = process_stylesheet(&style_sheet);
  style_sheet.clear();

  // output to postcss
  println!("{}", css);

  Ok(())
}

fn parse_args(args: Vec<String>) -> Option<String> {
  let mut file_extension: Option<String> = None;

  for arg in &args {
    if arg == "-d" {
      if
        let Some(next_arg) = args.get(
          args
            .iter()
            .position(|x| x == arg)
            .unwrap() + 1
        )
      {
        file_extension = Some(next_arg.clone());
      } else {
        eprintln!("Please provide a value for -d argument");
        std::process::exit(1);
      }
    }
  }

  if file_extension.is_none() {
    eprintln!("param -d was not provided.  Exiting...");
    std::process::exit(1);
  }

  file_extension
}
