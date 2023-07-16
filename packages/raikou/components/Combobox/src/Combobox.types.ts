export interface ComboboxItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxItemGroup {
  group: string;
  items: (ComboboxItem | string)[];
}

export interface ComboboxParsedItemGroup {
  group: string;
  items: ComboboxItem[];
}

export type ComboboxData = (string | ComboboxItem | ComboboxItemGroup)[];
export type ComboboxParsedItem = ComboboxItem | ComboboxParsedItemGroup;
