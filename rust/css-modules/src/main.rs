use regex::Regex;
use std::collections::HashMap;
use std::fs::File;
use std::io::Write;
use std::{ fs, env };
use toml;
use serde::{ Serialize, Deserialize };
use walkdir::WalkDir;

#[derive(Debug, Serialize, Deserialize)]
struct Config {
  files: Files,
}

#[derive(Debug, Serialize, Deserialize)]
struct Files {
  components_dir: String,
  other_dir: Vec<String>,
}

fn main() {
  let args: Vec<String> = env::args().collect();
  let (config, file, dir) = parse_args(args);
  let toml_str = fs::read_to_string(config.unwrap()).unwrap();

  let config: Config = toml::from_str(&toml_str).unwrap();

  let mut all_modules: HashMap<String, Vec<String>> = HashMap::new();

  for (key, value) in get_component_cssmodules(
    dir.clone().unwrap(),
    config.files.components_dir
  ) {
    if !all_modules.contains_key(&key) {
      all_modules.insert(key, value);
    }
  }

  for (key, value) in get_other_component_cssmodules(
    dir.clone().unwrap(),
    config.files.other_dir
  ) {
    if !all_modules.contains_key(&key) {
      all_modules.insert(key, value);
    }
  }

  let csv_str = print_csv(&all_modules);
  writeln!(file.unwrap(), "{}", csv_str).expect("Could not write to file");
}

fn get_component_cssmodules(
  dir: String,
  path: String
) -> HashMap<String, Vec<String>> {
  let mut modules: HashMap<String, Vec<String>> = HashMap::new();

  let component_path = format!("{}/{}", dir, path);

  let paths: Vec<String> = WalkDir::new(component_path)
    .into_iter()
    .filter_map(Result::ok)
    .filter(
      |e|
        e.file_type().is_file() &&
        e.file_name().to_string_lossy().ends_with("index.mjs")
    )
    .map(|e| e.path().to_string_lossy().to_string())
    .collect();

  for path in paths {
    let file_contents = fs
      ::read_to_string(path.clone())
      .expect("Unable to read file");
    let re = Regex::new(r#"\w+_module_default\s*=\s*\{[^}]*\}"#).unwrap();

    let mut data: Vec<String> = vec![];

    for cap in re.captures_iter(&file_contents) {
      let new_match = cap[0].to_string();
      let re = Regex::new(r"_module_default\s*=\s*").unwrap();
      let match_split: Vec<&str> = re.split(&new_match).collect();
      let value = match_split[1].to_string();

      // fix effects of minification
      let re = Regex::new(r"(\w+:)").unwrap();
      let new_value = re
        .replace_all(value.as_str(), |cap: &regex::Captures| {
          format!("\"{}\":", cap[1].to_string().replace(":", ""))
        })
        .to_string();

      let v: serde_json::Value = serde_json
        ::from_str(new_value.as_str())
        .ok()
        .unwrap();

      if let Some(values) = v.as_object() {
        for (_, value) in values {
          data.push(value.to_string());
        }
      }
    }

    let component_name = get_component_name(path.clone());
    modules.insert(component_name.to_lowercase(), data);
  }

  modules
}

fn get_other_component_cssmodules(
  dir: String,
  paths: Vec<String>
) -> HashMap<String, Vec<String>> {
  let mut modules: HashMap<String, Vec<String>> = HashMap::new();

  for path in paths {
    let component_file = format!("{}/{}/dist/index.mjs", dir, path);

    let file_contents = fs
      ::read_to_string(component_file.clone())
      .expect("Unable to read file");
    let re = Regex::new(r#"\w+_module_default\s*=\s*\{[^}]*\}"#).unwrap();

    let mut data: Vec<String> = vec![];

    let component_name = get_component_name(component_file);

    for cap in re.captures_iter(&file_contents) {
      let new_match = cap[0].to_string();
      let match_split: Vec<&str> = new_match.split(" = ").collect();
      let value = match_split[1].to_string();
      let v: serde_json::Value = serde_json
        ::from_str(value.as_str())
        .ok()
        .unwrap();

      if let Some(values) = v.as_object() {
        for (_, value) in values {
          data.push(value.to_string());
        }
      }
    }

    modules.insert(component_name.to_lowercase(), data);
  }

  modules
}

fn get_component_name(dir: String) -> String {
  let s_dir = dir.split('/');
  let components: Vec<&str> = s_dir.collect();
  let index = components
    .iter()
    .position(|&x| x == "dist")
    .unwrap();

  components[index - 1].to_string()
}

fn print_csv(data: &HashMap<String, Vec<String>>) -> String {
  let mut csv_string = String::new();

  for (key, value) in data {
    let values = value.join(",").replace('"', "");
    csv_string.push_str(format!("{}|{}\n", key, values).as_str());
  }

  csv_string
}

fn parse_args(
  args: Vec<String>
) -> (Option<String>, Option<File>, Option<String>) {
  let mut config: Option<String> = None;
  let mut file: Option<File> = None;
  let mut dir: Option<String> = None;

  for arg in &args {
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

    if arg == "-d" {
      if
        let Some(next_arg) = args.get(
          args
            .iter()
            .position(|x| x == arg)
            .unwrap() + 1
        )
      {
        let args = next_arg.clone();
        dir = Some(args);
      }
    }
  }

  if config.is_none() {
    eprintln!("param -config was not provided. Exiting...");
    std::process::exit(1);
  }

  if file.is_none() {
    eprintln!("param -o was not provided. Exiting...");
    std::process::exit(1);
  }

  if dir.is_none() {
    eprintln!("param -d was not provided. Exiting...");
    std::process::exit(1);
  }

  (config, file, dir)
}
