pub mod stylesheet {
  use std::vec;
  use lightningcss::{
    declaration::DeclarationBlock,
    properties::Property,
    properties::custom::{ Function, TokenList, TokenOrValue, Token, Variable },
    rules::{ CssRuleList, CssRule, Location },
    rules::style::StyleRule,
    rules::unknown::UnknownAtRule,
    selector::{ SelectorList, Selector },
    stylesheet::{ StyleSheet, ParserOptions, PrinterOptions },
    traits::{ ParseWithOptions, ToCss, IntoOwned },
    values::ident::DashedIdentReference,
    values::length::LengthValue,
    vendor_prefix::VendorPrefix,
  };

  pub fn gen_declaration_from_stylesheet<'i>(
    css: &'i str
  ) -> (Option<DeclarationBlock<'i>>, Option<CssRuleList<'i>>) {
    let mut new_css = css.to_string();

    if css.contains("+ . ") {
      new_css = css.replace("+ . ", "+ .");
    }

    let stylesheet = StyleSheet::parse(
      &new_css,
      ParserOptions::default()
    ).unwrap();

    if let CssRule::Style(style_rule) = stylesheet.rules.0.first().unwrap() {
      let declaration_block = style_rule.declarations.to_owned();
      let rules = style_rule.rules.to_owned();

      return (Some(declaration_block.into_owned()), Some(rules.into_owned()));
    }

    (None, None)
  }

  pub fn convert_rem(fallback_value: TokenOrValue) -> Option<Function> {
    if let TokenOrValue::Function(mut function) = fallback_value {
      let function_name = function.name.to_string();

      if function_name == "rem" {
        for argument in function.arguments.0.iter_mut() {
          if let TokenOrValue::Length(size) = argument {
            let (value, _) = size.to_unit_value();

            let new_function = Function {
              name: "calc".into(),
              arguments: TokenList(
                vec![
                  TokenOrValue::Length(LengthValue::Rem(value / 16.0)),
                  TokenOrValue::Token(Token::Delim('*')),
                  TokenOrValue::Var(Variable {
                    name: DashedIdentReference {
                      ident: "--raikou-scale".into(),
                      from: None,
                    },
                    fallback: None,
                  })
                ]
              ),
            };

            return Some(new_function);
          }
        }
      } else {
        for argument in function.arguments.0.iter_mut() {
          let new_function = convert_rem(argument.to_owned());

          if new_function.is_some() {
            *argument = TokenOrValue::Function(new_function.unwrap());
          }
        }

        return Some(function);
      }
    }

    None
  }

  pub fn iterate_property_token_list(property_value: &mut TokenList) {
    for token in property_value.0.iter_mut() {
      if let TokenOrValue::Var(varr) = token {
        if varr.fallback != None {
          iterate_property_token_list(&mut varr.fallback.as_mut().unwrap());
        }
      } else if let TokenOrValue::Function(function) = token {
        let new_function = convert_rem(
          TokenOrValue::Function(function.clone())
        );

        *function = new_function.unwrap();
      }
    }
  }

  pub fn gen_declaration_from_style_rule(
    declarations: DeclarationBlock<'_>
  ) -> DeclarationBlock {
    let mut new_declarations = declarations.clone();

    for declaration in new_declarations.iter_mut() {
      if let Property::Unparsed(property) = declaration {
        iterate_property_token_list(&mut property.value);
      } else if let Property::Custom(custom) = declaration {
        for custom_value in custom.value.0.iter_mut() {
          if let TokenOrValue::Function(function) = custom_value {
            let new_function = convert_rem(
              TokenOrValue::Function(function.clone())
            );

            if new_function != None {
              *custom_value = TokenOrValue::Function(new_function.unwrap());
            }
          } else {
            if let TokenOrValue::Var(varr) = custom_value {
              if varr.fallback != None {
                iterate_property_token_list(
                  &mut varr.fallback.as_mut().unwrap()
                );
              }
            }
          }
        }
      }
    }

    return new_declarations;
  }

  pub fn change_colorscheme_selector<'i>(
    ident: String,
    not: bool
  ) -> Selector<'i> {
    let selector_string = match not {
      true => format!("&[data-raikou-color-scheme=\"{}\"]", &ident),
      false => format!("[data-raikou-color-scheme=\"{}\"] &", &ident),
    };

    let selector = Selector::parse_string_with_options(
      &selector_string,
      ParserOptions::default()
    ).unwrap();

    return selector.into_owned();
  }

  pub fn change_direction_selector<'i>(
    ident: String,
    not: bool
  ) -> Selector<'i> {
    let selector_string = match not {
      true => format!(":root:not([dir=\"{}\"]) &", &ident),
      false => format!("[dir=\"{}\"] &", &ident),
    };

    let selector = Selector::parse_string_with_options(
      &selector_string,
      ParserOptions::default()
    ).unwrap();

    return selector.into_owned();
  }

  pub fn create_mixin_declaration(
    unknown: UnknownAtRule<'_>,
    ident: String
  ) -> (DeclarationBlock<'_>, CssRuleList<'_>) {
    // Retrieve the styles of the selector
    let css = unknown.to_css_string(PrinterOptions::default()).unwrap();

    let find_selector = format!("@mixin {}", ident);
    let css = &css.replace(&find_selector, ".foo").to_owned();

    // Create the declarations and rules
    let (new_declaration, rules) = gen_declaration_from_stylesheet(&css);

    return (new_declaration.unwrap().into_owned(), rules.unwrap().into_owned());
  }

  pub fn create_hover_mixin_declaration(
    unknown: UnknownAtRule<'_>
  ) -> Option<CssRuleList<'_>> {
    let mut rule_list_css = Vec::new();

    // Retrieve the styles of the selector
    let css = unknown.to_css_string(PrinterOptions::default()).unwrap();
    let css = &css.replace("@mixin hover", ".foo").to_owned();

    // Create the declarations and rules
    let (declaration, rules) = gen_declaration_from_stylesheet(&css);

    if declaration != None {
      rule_list_css.push(
        declaration
          .unwrap()
          .to_css_string(PrinterOptions::default())
          .ok()
          .unwrap()
      );
    }

    if rules != None {
      for rule_item in rules.unwrap().0.iter_mut() {
        if let CssRule::Style(style) = rule_item {
          process_styles(style);

          let css_rule = CssRule::Style(StyleRule {
            selectors: SelectorList {
              0: style.selectors.0.to_owned(),
            },
            vendor_prefix: VendorPrefix::default().to_owned(),
            declarations: style.declarations.to_owned(),
            rules: style.rules.to_owned(),
            loc: style.loc.to_owned(),
          });

          rule_list_css.push(
            css_rule.to_css_string(PrinterOptions::default()).ok().unwrap()
          );
        } else if let CssRule::Unknown(unknown) = rule_item {
          let (_, selector, new_declaration, rules) = process_mixins(unknown);

          let css_rule = CssRule::Style(StyleRule {
            selectors: SelectorList {
              0: smallvec::smallvec![selector.unwrap()],
            },
            vendor_prefix: VendorPrefix::default().to_owned(),
            declarations: new_declaration.unwrap(),
            rules: rules.unwrap(),
            loc: Location { source_index: 0, line: 0, column: 0 },
          });

          rule_list_css.push(
            css_rule.to_css_string(PrinterOptions::default()).ok().unwrap()
          );
        }
      }
    }

    if rule_list_css.len() > 0 {
      let css = format!(
        "
        @media (hover: hover) {{
          &:hover {{
            {}
          }}
        }}
        @media (hover: none) {{
          &:active {{
            {}
          }}
        }}
      ",
        rule_list_css.join(""),
        rule_list_css.join("")
      );

      let stylesheet = StyleSheet::parse(
        &css,
        ParserOptions::default()
      ).unwrap();

      return Some(stylesheet.rules.into_owned());
    }

    None
  }

  pub fn process_mixins<'i>(
    unknown: &mut UnknownAtRule<'i>
  ) -> (
    String,
    Option<Selector<'i>>,
    Option<DeclarationBlock<'i>>,
    Option<CssRuleList<'i>>,
  ) {
    // Change @mixin
    if unknown.name == "mixin" {
      for prelude_item in unknown.prelude.0.iter() {
        if let TokenOrValue::Token(token) = prelude_item {
          // light, dark, light-root, dark-root, ltr, not-ltr, rtl, not-rtl, hover
          if let Token::Ident(ident) = token {
            if ident.to_string() == "light" || ident.to_string() == "dark" {
              let selector = change_colorscheme_selector(
                ident.to_string(),
                false
              );

              let (new_declaration, rules) = create_mixin_declaration(
                unknown.clone(),
                ident.to_string()
              );

              return (
                "colorScheme".into(),
                Some(selector),
                Some(new_declaration),
                Some(rules),
              );
            } else if
              ident.to_string() == "light-root" ||
              ident.to_string() == "dark-root"
            {
              let selector = change_colorscheme_selector(
                ident.to_string(),
                true
              );

              let (new_declaration, rules) = create_mixin_declaration(
                unknown.clone(),
                ident.to_string()
              );

              return (
                "colorScheme".into(),
                Some(selector),
                Some(new_declaration),
                Some(rules),
              );
            } else if ident.to_string() == "ltr" || ident.to_string() == "rtl" {
              let selector = change_direction_selector(
                ident.to_string(),
                false
              );

              let (new_declaration, rules) = create_mixin_declaration(
                unknown.clone(),
                ident.to_string()
              );

              return (
                "direction".into(),
                Some(selector),
                Some(new_declaration),
                Some(rules),
              );
            } else if
              ident.to_string() == "not-ltr" ||
              ident.to_string() == "not-rtl"
            {
              let selector = change_direction_selector(ident.to_string(), true);

              let (new_declaration, rules) = create_mixin_declaration(
                unknown.clone(),
                ident.to_string()
              );

              return (
                "direction".into(),
                Some(selector),
                Some(new_declaration),
                Some(rules),
              );
            } else if ident.to_string() == "hover" {
              let rules = create_hover_mixin_declaration(unknown.clone());

              return ("hover".into(), None, None, rules);
            }
          }
        }
      }
    }

    return ("None".into(), None, None, None);
  }

  pub fn process_styles(style_rule: &mut StyleRule) {
    // process declaration block
    let new_declaration = gen_declaration_from_style_rule(
      style_rule.declarations.clone()
    );

    style_rule.declarations = new_declaration;

    let mut mixin_rules = Vec::new();

    for rule_item in style_rule.rules.0.iter_mut() {
      // process unknowns atrules
      if let CssRule::Unknown(unknown) = rule_item {
        let (mixin_type, selector, new_declaration, rules) =
          process_mixins(unknown);

        if mixin_type != "hover" {
          let css_rule = CssRule::Style(StyleRule {
            selectors: SelectorList {
              0: smallvec::smallvec![selector.unwrap()],
            },
            vendor_prefix: style_rule.vendor_prefix.to_owned(),
            declarations: new_declaration.unwrap(),
            rules: rules.unwrap(),
            loc: style_rule.loc.to_owned(),
          });

          *rule_item = css_rule;
        } else {
          for rule in rules.unwrap().0.iter() {
            mixin_rules.push(rule.clone());
          }

          // Remove rule
          *rule_item = CssRule::Ignored;
        }
      }

      // process nested styles
      if let CssRule::Style(style_rule) = rule_item {
        process_styles(style_rule);
      }
    }

    // Push new hover rules
    if mixin_rules.len() > 0 {
      style_rule.rules.0.extend(mixin_rules);
    }
  }
}
