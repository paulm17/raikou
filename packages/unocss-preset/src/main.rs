use std::env;
use std::fs::File;
use std::io::{ self, BufRead, Write, SeekFrom, Seek };
use std::sync::mpsc;
use std::thread;

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
  // println!("{:?}", line);

  StyleSheet::parse(line, ParserOptions::default()).unwrap()
}

fn convert_to_css(stylesheet: &StyleSheet) -> String {
  stylesheet.to_css(PrinterOptions::default()).unwrap().code.to_string()
}

fn process_stylesheet(line: &str, file: &Option<File>) -> std::io::Result<()> {
  let mut stylesheet = parse_stylesheet(&line);

  match stylesheet.visit(&mut MyVisitor) {
    Ok(_) => (),
    Err(e) => {
      println!("Error occurred: {:?}", e);
      return Ok(());
    }
  }

  let css = convert_to_css(&stylesheet);

  if let Some(mut file) = file.as_ref() {
    file.seek(SeekFrom::Start(0))?;
    file.set_len(0).expect("Failed to truncate file");

    writeln!(file, "{}", css.trim()).expect("Could not write to file");
  }

  Ok(())
}

fn main() -> Result<(), io::Error> {
  let args: Vec<String> = env::args().collect();

  if args.len() < 1 {
    eprintln!("No command line options provided. Exiting.");
    std::process::exit(1);
  }

  let out_file = create_out_file(&args);

  let (tx, rx) = mpsc::channel::<String>();

  thread::spawn(move || {
    let stdin = io::stdin();
    let mut lines = stdin.lock().lines();
    while let Some(Ok(line)) = lines.next() {
      tx.send(line).unwrap();
    }
  });

  let mut input = String::new();
  for received in rx {
    if
      !received.is_empty() &&
      !received.starts_with("change ") &&
      !received.to_lowercase().contains("unocss") &&
      !received.ends_with("EOF")
    {
      let mut css = received.clone();

      if let Some(start) = css.find("ℹ Watching for changes") {
        css.replace_range(start.., "");

        input.push_str(&css);
      } else {
        input.push_str(&received);
      }
    }

    if received.contains("<<EOF") {
      process_stylesheet(&input, &out_file)?;
      input.clear();
    }
  }

  Ok(())
}

fn create_out_file(args: &[String]) -> Option<File> {
  for arg in args {
    if arg == "-o" || arg == "--out-file" {
      let file_path =
        &args
          [

              args
                .iter()
                .position(|r| r == arg)
                .unwrap() + 1

          ];
      return File::create(file_path).ok();
    }
  }

  None
}
