import type { CheckboxProps } from "../../../components/Checkbox/src";
import type { DataTableSelectionTrigger } from "./DataTableSelectionTrigger";

export type DataTableSelectionProps<T = Record<string, unknown>> =
  | {
      selectionTrigger?: never;
      selectedRecords?: never;
      onSelectedRecordsChange?: never;
      isRecordSelectable?: never;
      getRecordSelectionCheckboxProps?: never;
      allRecordsSelectionCheckboxProps?: never;
    }
  | {
      /**
       * Defines how selection is triggered.
       * @default 'checkbox'
       */
      selectionTrigger?: DataTableSelectionTrigger;

      /**
       * Currently-selected records.
       */
      selectedRecords?: T[];

      /**
       * Callback fired when selected records change.
       * Receives and array of selected records as argument.
       */
      onSelectedRecordsChange?: (selectedRecords: T[]) => void;

      /**
       * A function used to determine whether a certain record is selectable.
       * if the function returns false, the row selection checkbox is disabled.
       * Accepts the current recors and index as arguments and returns a boolean.
       */
      isRecordSelectable?: (record: T, index: number) => boolean;

      /**
       * A function used to determine additional props of the row selection checkbox.
       * Accepts the current record and its index as arguments and returns an object.
       */
      getRecordSelectionCheckboxProps?: (
        record: T,
        index: number,
      ) => CheckboxProps;

      /**
       * Additional props for the header checkbox that toggles selection of all records.
       */
      allRecordsSelectionCheckboxProps?: CheckboxProps;
    };
