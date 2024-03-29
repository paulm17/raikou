interface GetStaticClassNamesInput {
  themeName: string[];
  selector: string;
  classNamesPrefix: string;
}

/** Returns static component classes, for example, `.raikou-Input-wrapper` */
export function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
}: GetStaticClassNamesInput) {
  // return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
  return themeName.map((n) => `${n.toLowerCase()}-${selector}`);
}
