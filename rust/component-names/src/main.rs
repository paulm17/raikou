use regex::Regex;
use std::collections::HashSet;
use std::fs::File;
use std::io::Write;
use std::path::PathBuf;
use std::{ fs, env };
use clap::Parser;
use toml;
use serde::{ Serialize, Deserialize };

#[derive(Debug, Serialize, Deserialize)]
struct Config {
  components: Components,
}

#[derive(Debug, Serialize, Deserialize)]
struct Components {
  core_dir: Vec<String>,
  other_dir: Vec<String>,
}

#[derive(Parser)]
struct Args {
  #[arg(long)]
  config: Option<String>,

  #[arg(long)]
  output: Option<PathBuf>,
}

fn main() {
  let (dir, config, file) = parse_args();
  let toml_str = fs
    ::read_to_string(format!("{}{}", dir.clone().unwrap(), config.unwrap()))
    .unwrap();

  let config: Config = toml::from_str(&toml_str).unwrap();

  let mut all_components = Vec::new();

  for x in get_imported_modules(dir.unwrap(), config.components.core_dir) {
    all_components.push(x.to_string());
  }

  for x in &config.components.other_dir {
    let capitalized_words = get_component_name(x.to_string());

    all_components.push(capitalized_words.join(""));
  }

  all_components.sort();

  let csv_str = print_csv(&all_components);
  writeln!(file.unwrap(), "{}", csv_str).expect("Could not write to file");
}

fn print_csv(data: &Vec<String>) -> String {
  let mut csv_string = String::new();
  for (i, row) in data.iter().enumerate() {
    if i != 0 {
      csv_string.push_str(",");
    }
    csv_string.push_str(&row);
  }

  csv_string
}

fn get_component_name(new_match: String) -> Vec<String> {
  let capitalized_words: Vec<String> = new_match
    .replace("@raikou/", "")
    .split('-')
    .enumerate()
    .map(|(index, word)| {
      if index > 0 {
        let mut chars = word.chars();
        match chars.next() {
          None => String::new(),
          Some(f) => {
            let mut result = String::new();
            result.push_str(&f.to_uppercase().to_string());
            result.push_str(&chars.as_str().to_lowercase());
            result
          }
        }
      } else {
        word.to_string()
      }
    })
    .collect();

  capitalized_words
}

fn get_imported_modules(dir: String, lib_path: Vec<String>) -> Vec<String> {
  let mut imports: HashSet<String> = HashSet::new();

  for path in lib_path {
    let full_path = format!("{}{}", dir, path);
    let file_contents = fs
      ::read_to_string(full_path)
      .expect("Unable to read file");
    let re = Regex::new(r#"export \* from "([^"]+)";"#).unwrap();

    for cap in re.captures_iter(&file_contents) {
      let mut new_match = cap[1].to_string();
      new_match = new_match.replace("./", "");

      let capitalized_words = get_component_name(new_match);

      imports.insert(capitalized_words.join(""));
    }
  }

  imports.into_iter().collect()
}

fn parse_args() -> (Option<String>, Option<String>, Option<File>) {
  let args: Args = Args::parse();

  let current_dir = get_current_dir();

  if current_dir.is_none() {
    eprintln!("raikou directory was not found in path. Exiting...");
    std::process::exit(1);
  }

  if args.config.is_none() {
    eprintln!("param -config was not provided. Exiting...");
    std::process::exit(1);
  }

  if args.output.is_none() {
    eprintln!("param -o was not provided. Exiting...");
    std::process::exit(1);
  }

  let file = match
    File::create(
      format!(
        "{}{}",
        current_dir.clone().unwrap(),
        &args.output.unwrap().display()
      )
    )
  {
    Ok(file) => Some(file),
    Err(_) => {
      eprintln!("Failed to create file. Exiting...");
      std::process::exit(1);
    }
  };

  (current_dir, args.config, file)
}

fn get_current_dir() -> Option<String> {
  let current_dir = env::current_dir().unwrap();
  let path = current_dir.display().to_string();
  let components: Vec<&str> = path.split('/').collect();

  match components.iter().position(|&r| r == "raikou") {
    Some(raikou_index) => {
      let path_up_to_raikou: Vec<&str> = components
        .into_iter()
        .take(raikou_index + 1)
        .collect();
      let path_up_to_raikou = path_up_to_raikou.join("/");
      Some(path_up_to_raikou)
    }
    None => None,
  }
}
