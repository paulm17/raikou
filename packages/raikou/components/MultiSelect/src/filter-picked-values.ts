import { ComboboxParsedItem, isOptionsGroup } from "../../Combobox/src";

interface FilterPickedTagsInput {
  data: ComboboxParsedItem[];
  value: string[];
}

export function filterPickedValues({ data, value }: FilterPickedTagsInput) {
  const normalizedValue = value.map((item) => item.trim().toLowerCase());

  const filtered = data.reduce<ComboboxParsedItem[]>((acc, item) => {
    if (isOptionsGroup(item)) {
      acc.push({
        group: item.group,
        items: item.items.filter(
          (option) =>
            normalizedValue.indexOf(option.label.toLowerCase().trim()) === -1
        ),
      });
    } else if (
      normalizedValue.indexOf(item.label.toLowerCase().trim()) === -1
    ) {
      acc.push(item);
    }

    return acc;
  }, []);

  return filtered;
}
