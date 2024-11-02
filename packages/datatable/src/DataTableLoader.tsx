import {
  Center,
  Loader,
  type RaikouColor,
  type RaikouLoader,
  type RaikouSize,
} from "@raikou/core";
import clsx from "clsx";
import {
  dataTableLoaderFetchingStyle,
  dataTableLoaderStyle,
} from "./DataTableLoader.css";

type DataTableLoaderProps = {
  pt: number;
  pb: number;
  fetching: boolean | undefined;
  customContent: React.ReactNode | undefined;
  backgroundBlur: number | undefined;
  size: RaikouSize | (string & NonNullable<unknown>) | number | undefined;
  type: RaikouLoader | undefined;
  color: RaikouColor | undefined;
};

export function DataTableLoader({
  pt,
  pb,
  fetching,
  customContent,
  backgroundBlur,
  size,
  type,
  color,
}: DataTableLoaderProps) {
  return (
    <Center
      pt={pt}
      pb={pb}
      className={clsx(dataTableLoaderStyle, {
        [dataTableLoaderFetchingStyle]: fetching,
      })}
      style={[
        {
          backdropFilter: backgroundBlur
            ? `blur(${backgroundBlur}px)`
            : undefined,
        },
      ]}
    >
      {fetching &&
        (customContent || <Loader size={size} type={type} color={color} />)}
    </Center>
  );
}
