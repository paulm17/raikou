use regex::Regex;
use std::collections::HashSet;
use std::fs::File;
use std::io::Write;
use std::{ fs, env };
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

fn main() {
  let args: Vec<String> = env::args().collect();
  let (config, file) = parse_args(args);
  let toml_str = fs::read_to_string(config.unwrap()).unwrap();

  let config: Config = toml::from_str(&toml_str).unwrap();

  let mut all_components = Vec::new();

  for x in get_imported_modules(config.components.core_dir) {
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

fn get_imported_modules(lib_path: Vec<String>) -> Vec<String> {
  let mut imports: HashSet<String> = HashSet::new();

  for path in lib_path {
    let file_contents = fs::read_to_string(path).expect("Unable to read file");
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

// fn parse_args(args: Vec<String>) -> Option<String> {
//   let mut config: Option<String> = None;

//   for arg in &args {
//     if arg == "-o" || arg == "--out-file" {
//           let file_path = &args[args.iter().position(|r| r == arg).unwrap() + 1];
//           return File::create(file_path).ok();
//       }

//     if arg == "-config" {
//       if
//         let Some(next_arg) = args.get(
//           args
//             .iter()
//             .position(|x| x == arg)
//             .unwrap() + 1
//         )
//       {
//         let args = next_arg.clone();

//         config = Some(args);
//       }
//     }
//   }

//   if config.is_none() {
//     eprintln!("param -config was not provided.  Exiting...");
//     std::process::exit(1);
//   }

//   config
// }

fn parse_args(args: Vec<String>) -> (Option<String>, Option<File>) {
  let mut config: Option<String> = None;
  let mut file: Option<File> = None;

  for arg in &args {
    if arg == "-o" {
      let file_path =
        &args
          [

              args
                .iter()
                .position(|r| r == arg)
                .unwrap() + 1

          ];
      file = File::create(file_path).ok();
    }

    if arg == "-config" {
      if
        let Some(next_arg) = args.get(
          args
            .iter()
            .position(|x| x == arg)
            .unwrap() + 1
        )
      {
        let args = next_arg.clone();
        config = Some(args);
      }
    }
  }

  if config.is_none() {
    eprintln!("param -config was not provided. Exiting...");
    std::process::exit(1);
  }

  if file.is_none() {
    eprintln!("param -config was not provided. Exiting...");
    std::process::exit(1);
  }

  (config, file)
}
