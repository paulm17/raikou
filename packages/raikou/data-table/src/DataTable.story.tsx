import React, { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { RaikouSize } from "@raikou/core";
import { useDebouncedValue, useInterval } from "@raikou/hooks";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ActionIcon } from "../../components/ActionIcon/src";
import { Box } from "../../components/Box/src";
import { Button } from "../../components/Button/src";
import { Code } from "../../components/Code/src";
import { Center } from "../../components/Center/src";
import { Grid } from "../../components/Grid/src";
import { Group } from "../../components/Group/src";
import { LoadingOverlay } from "../../components/LoadingOverlay/src";
import { MultiSelect } from "../../components/MultiSelect/src";
import { Image } from "../../components/Image/src";
import { Paper } from "../../components/Paper/src";
import { Stack } from "../../components/Stack/src";
import { Text } from "../../components/Text/src";
import { TextInput } from "../../components/TextInput/src";
import { DatePicker, DatesRangeValue } from "../../dates/src";
import {
  closeAllModals,
  openModal,
  closeModal,
  modals,
} from "../../modals/src";
import { showNotification } from "../../notifications/src";
import {
  IconArrowUp,
  IconArrowDown,
  IconArrowBackUp,
  IconArrowsUpDown,
  IconAppWindow,
  IconBuilding,
  IconCheck,
  IconChevronRight,
  IconChevronUp,
  IconEdit,
  IconEye,
  IconMoodSad,
  IconSearch,
  IconSelector,
  IconSend,
  IconSum,
  IconTrash,
  IconTrashX,
  IconUser,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { DataTable } from "./DataTable";
import companies, { default as companyData } from "./data/companies.json";
import {
  Company,
  countCompanyDepartmentsAsync,
  countCompanyEmployeesAsync,
  departments,
  employees,
  getCompaniesAsync,
} from "./data";
import { DataTableSortStatus, DataTableVerticalAlignment } from "./types";
import sortBy from "lodash.sortby";
import relativeTime from "dayjs/plugin/relativeTime";
import { uniqBy, useIsMounted } from "./utils";
import {
  useCompaniesAsync,
  useDepartmentsAsync,
  useEmployeesAsync,
} from "./data/nested";

export default { title: "DataTable" };

const records = companies.slice(0, 5);
const PAGE_SIZE = 4;

export function AdditionalStylingExampleWithClassName() {
  return (
    <div style={{ padding: 40, background: "#141518" }}>
      <DataTable
        columns={[
          { accessor: "name" },
          { accessor: "missionStatement", width: 150 },
          { accessor: "streetAddress" },
          { accessor: "city" },
          { accessor: "state" },
        ]}
        records={records}
        classNames={{
          table: "border border-red-400 rounded-md",
        }}
      />
    </div>
  );
}

export function AdditionalStylingExampleWithClassNames() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(companies.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(companies.slice(from, to));
  }, [page]);

  return (
    <div style={{ padding: 40, background: "#141518" }}>
      <DataTable
        columns={[
          { accessor: "name", footer: `${companies.length} companies` },
          {
            accessor: "missionStatement",
            width: 150,
            footer: `Avg. chars: ${
              companies
                .map((c) => c.missionStatement.length)
                .reduce((acc, len) => acc + len) / companies.length
            }`,
          },
          { accessor: "streetAddress" },
          { accessor: "city" },
          {
            accessor: "state",
            footer: `${uniqBy(companies, (c) => c.state).length} states`,
          },
        ]}
        records={records}
        totalRecords={companies.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}

export function AdditionalStylingExampleWithRowStyling() {
  return (
    <div style={{ padding: 40, background: "#141518" }}>
      <DataTable
        withBorder
        rowClassName={({ name }) =>
          name === "Runolfsdottir - Cummerata" ? undefined : undefined
        }
        rowStyle={({ name }) =>
          name === "Johnston LLC" ? { color: "#FA5639" } : undefined
        }
        // example-skip
        columns={[
          { accessor: "name" },
          { accessor: "missionStatement", width: 150 },
          { accessor: "streetAddress" },
          { accessor: "city" },
          { accessor: "state" },
        ]}
        records={records}
      />
    </div>
  );
}

export function AdditionalStylingExampleWithStyleObject() {
  return (
    <div style={{ padding: 40, background: "#141518" }}>
      <DataTable
        style={{
          border: "1px solid yellowgreen",
          borderRadius: 5,
        }}
        // example-skip
        columns={[
          { accessor: "name" },
          { accessor: "missionStatement", width: 150 },
          { accessor: "streetAddress" },
          { accessor: "city" },
          { accessor: "state" },
        ]}
        records={records}
        // example-resume
      />
    </div>
  );
}

export function AdditionalStylingExampleWithStylesFunction() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(companies.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(companies.slice(from, to));
  }, [page]);

  // example-start
  return (
    <DataTable
      styles={(theme) => ({
        root: {
          border: `1px solid ${theme.colors.orange[6]}`,
          borderRadius: theme.radius.md,
        },
        header: { fontStyle: "italic" },
        footer: { fontStyle: "italic" },
      })}
      // example-skip
      columns={[
        { accessor: "name", footer: `${companies.length} companies` },
        {
          accessor: "missionStatement",
          width: 150,
          footer: `Avg. chars: ${
            companies
              .map((c) => c.missionStatement.length)
              .reduce((acc, len) => acc + len) / companies.length
          }`,
        },
        { accessor: "streetAddress" },
        { accessor: "city" },
        {
          accessor: "state",
          footer: `${uniqBy(companies, (c) => c.state).length} states`,
        },
      ]}
      records={records}
      totalRecords={companies.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}

export function AdditionalStylingExampleWithStylesObject() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(companies.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(companies.slice(from, to));
  }, [page]);

  return (
    <DataTable
      styles={{
        root: {
          border: "1px solid yellowgreen",
          borderRadius: 5,
        },
        // header: { fontStyle: "italic" },
        // footer: { fontStyle: "italic" },
      }}
      columns={[
        { accessor: "name", footer: `${companies.length} companies` },
        {
          accessor: "missionStatement",
          width: 150,
          footer: `Avg. chars: ${
            companies
              .map((c) => c.missionStatement.length)
              .reduce((acc, len) => acc + len) / companies.length
          }`,
        },
        { accessor: "streetAddress" },
        { accessor: "city" },
        {
          accessor: "state",
          footer: `${uniqBy(companies, (c) => c.state).length} states`,
        },
      ]}
      records={records}
      totalRecords={companies.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}

type LoaderVariant = "oval" | "bars" | "dots";

export function AsynchronousDataLoadingExample({
  customizeLoaderVariant,
  loaderVariant,
  customizeLoaderSize,
  loaderSize,
  customizeLoaderColor,
  loaderColor,
  customizeLoaderBackgroundBlur,
  loaderBackgroundBlur,
}: {
  customizeLoaderVariant: boolean;
  loaderVariant: LoaderVariant;
  customizeLoaderSize: boolean;
  loaderSize: RaikouSize;
  customizeLoaderColor: boolean;
  loaderColor: any;
  customizeLoaderBackgroundBlur: boolean;
  loaderBackgroundBlur: number;
}) {
  const [records, setRecords] = useState<Company[]>([]);
  const [fetching, setFetching] = useState(false);
  const isMounted = useIsMounted();

  const load = async () => {
    setFetching(true);
    const companies = await getCompaniesAsync({
      count: 4,
      delay: { min: 800, max: 1000 },
    });

    if (isMounted()) {
      setRecords(companies);
      setFetching(false);
    }
  };

  const interval = useInterval(load, 2000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [interval]);

  // example-start standard
  // prettier-ignore
  return (
    <DataTable
      withBorder
      // minHeight={180}
      columns={[{ accessor: 'name' }, { accessor: 'streetAddress' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      fetching={fetching}
      loaderVariant={customizeLoaderVariant ? loaderVariant : undefined}
      loaderSize={customizeLoaderSize ? loaderSize : undefined}
      loaderColor={customizeLoaderColor ? loaderColor : undefined}
      loaderBackgroundBlur={customizeLoaderBackgroundBlur ? loaderBackgroundBlur : undefined}
    />
  );
  // example-end
}

export function BasicTablePropertiesExample({
  withBorder,
  noHeader,
  customizeBorderRadius,
  borderRadius,
  customizeShadow,
  shadow,
  withColumnBorders,
  striped,
  highlightOnHover,
  customizeHorizontalSpacing,
  horizontalSpacing,
  customizeVerticalSpacing,
  verticalSpacing,
  customizeVerticalAlignment,
  verticalAlignment,
}: {
  withBorder: boolean;
  noHeader: boolean;
  customizeBorderRadius: boolean;
  borderRadius: RaikouSize;
  customizeShadow: boolean;
  shadow: RaikouSize;
  withColumnBorders: boolean;
  striped: boolean;
  highlightOnHover: boolean;
  customizeHorizontalSpacing: boolean;
  horizontalSpacing: RaikouSize;
  customizeVerticalSpacing: boolean;
  verticalSpacing: RaikouSize;
  customizeVerticalAlignment: boolean;
  verticalAlignment: DataTableVerticalAlignment;
}) {
  return (
    <DataTable
      withBorder={withBorder}
      noHeader={noHeader}
      borderRadius={customizeBorderRadius ? borderRadius : undefined}
      shadow={customizeShadow ? shadow : undefined}
      withColumnBorders={withColumnBorders}
      striped={striped}
      highlightOnHover={highlightOnHover}
      horizontalSpacing={
        customizeHorizontalSpacing ? horizontalSpacing : undefined
      }
      verticalSpacing={customizeVerticalSpacing ? verticalSpacing : undefined}
      verticalAlignment={
        customizeVerticalAlignment ? verticalAlignment : undefined
      }
      columns={[
        { accessor: "name" },
        { accessor: "missionStatement", width: 150 },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
    />
  );
}

export function BasicUsageExample() {
  return (
    <div style={{ padding: 40, background: "#141518" }}>
      <DataTable
        columns={[
          { accessor: "name" },
          { accessor: "streetAddress" },
          { accessor: "city" },
          { accessor: "state" },
        ]}
        records={companies}
      />
    </div>
  );
}

export function ColumnGroupingExample() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      records={companies}
      groups={[
        {
          id: "company",
          columns: [
            { accessor: "name" },
            {
              accessor: "missionStatement",
              visibleMediaQuery: (theme) =>
                `(min-width: ${theme.breakpoints.md})`,
            },
          ],
        },
        {
          id: "contact-info",
          title: <i>Contact info</i>,
          columns: [
            { accessor: "streetAddress" },
            { accessor: "city" },
            { accessor: "state" },
          ],
        },
        {
          id: "other",
          columns: [{ accessor: "id", hidden: true }],
        },
        {
          id: "empty-group",
          title: "Empty group",
          columns: [],
        },
      ]}
    />
  );
}

export function ColumnPropertiesExample() {
  const records = employees.slice(0, 10);

  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        {
          accessor: "index",
          title: "#",
          textAlignment: "right",
          width: 40,
          render: (record) => records.indexOf(record) + 1,
        },
        {
          accessor: "name",
          title: "Full name",
          render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
          width: 160,
        },
        { accessor: "email" },
        { accessor: "department.name", width: 150 },
        {
          // using dot-notation to access nested object property
          accessor: "department.company.name",
          title: "Company",
          width: 150,
          // truncate with ellipsis if text overflows the available width
          ellipsis: true,
        },
        {
          accessor: "birthDate",
          title: "Birthday",
          width: 100,
          render: ({ birthDate }) => dayjs(birthDate).format("MMM D"),
          // column is only visible when screen width is over `theme.breakpoints.xs`
          visibleMediaQuery: (theme) => `(min-width: ${theme.breakpoints.xs})`,
        },
        {
          // "virtual column"
          accessor: "age",
          width: 60,
          textAlignment: "right",
          // column is only visible when screen width is over `theme.breakpoints.xs`
          visibleMediaQuery: (theme) => `(min-width: ${theme.breakpoints.xs})`,
          render: ({ birthDate }) => dayjs().diff(birthDate, "years"),
        },
      ]}
    />
  );
}

export function ColumnPropertiesExampleStyling() {
  const records = employees.slice(0, 10);

  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        {
          accessor: "index",
          title: "#",
          textAlignment: "right",
          width: 40,
          // style cells with a class name
          // cellsClassName: classes.idColumnCells,
          render: (record) => records.indexOf(record) + 1,
        },
        {
          accessor: "name",
          title: "Full name",
          width: 160,
          // style cells with a CSS properties object
          cellsStyle: { fontStyle: "italic" },
          render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
          footer: `${records.length} employees`,
          // style footer with a CSS properties object
          footerStyle: { fontStyle: "italic" },
        },
        { accessor: "email" },
        {
          accessor: "department.name",
          width: 150,
          // style title with an Sx object
          // titleSx: (theme) => ({ '&&': { color: theme.colors.green[6] } }),
          // style cells with an Sx object
          // cellsSx: (theme) => ({
          //   color: theme.colors.green[8],
          //   background: theme.fn.rgba(theme.colors.orange[6], 0.25),
          // }),
        },
        {
          accessor: "department.company.name",
          title: "Company",
          width: 150,
          ellipsis: true,
          footer: `${
            uniqBy(records, (record) => record.department.company.name).length
          } companies`,
          // style footer with an Sx object
          // footerSx: (theme) => ({ '&&': { color: theme.colors.blue[6] } }),
        },
        {
          accessor: "birthDate",
          title: "Birthday",
          width: 100,
          // style title with a custom class name
          // titleClassName: classes.birthdayColumnTitle,
          // style cells with a class name depending on current record
          // cellsClassName: ({ birthDate }) => cx({ [classes.birthdayInApril]: dayjs(birthDate).format('MM') === '04' }),
          render: ({ birthDate }) => dayjs(birthDate).format("MMM D"),
        },
        {
          accessor: "age",
          width: 80,
          textAlignment: "right",
          // style title with a CSS properties object
          titleStyle: { fontStyle: "italic" },
          // style cells with a CSS properties object depending on current record
          cellsStyle: ({ birthDate }) =>
            dayjs().diff(birthDate, "years") <= 40
              ? {
                  fontWeight: "bold",
                  color: "green",
                  background: "#FF332222",
                }
              : undefined,
          render: ({ birthDate }) => dayjs().diff(birthDate, "years"),
          footer: `Avg: ${Math.round(
            records
              .map((record) => dayjs().diff(record.birthDate, "years"))
              .reduce((a, b) => a + b, 0) / records.length,
          )}`,
          // footerClassName: classes.ageFooter,
        },
      ]}
    />
  );
}

export function ColumnPropertiesExampleWithFooter() {
  const records = employees.slice(0, 10);

  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        {
          accessor: "name",
          title: "Full name",
          render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
          width: 160,
          footer: (
            <Group gap="xs">
              <IconSum size="1.25em" />
              <Text mb={-2}>{records.length} employees</Text>
            </Group>
          ),
        },
        { accessor: "department.name", width: 150 },
        {
          accessor: "department.company.name",
          title: "Company",
          width: 150,
          ellipsis: true,
          footer: (
            <Group gap="xs">
              <IconSum size="1.25em" />
              <Text mb={-2}>
                {
                  uniqBy(records, (record) => record.department.company.name)
                    .length
                }{" "}
                companies
              </Text>
            </Group>
          ),
        },
        {
          accessor: "age",
          width: 60,
          textAlignment: "right",
          visibleMediaQuery: (theme) => `(min-width: ${theme.breakpoints.xs})`,
          render: ({ birthDate }) => dayjs().diff(birthDate, "years"),
          footer: `Avg: ${Math.round(
            records
              .map((record) => dayjs().diff(record.birthDate, "years"))
              .reduce((a, b) => a + b, 0) / records.length,
          )}`,
        },
      ]}
    />
  );
}

export function CustomRowOrCellAttributesExample() {
  const records = companies.slice(0, 5);

  return (
    <DataTable
      withBorder
      shadow="xs"
      columns={[
        { accessor: "name" },
        {
          accessor: "city",
          customCellAttributes: ({ city }) => ({ "data-cy-city": city }),
        },
        {
          accessor: "state",
          customCellAttributes: ({ state }) => ({ "data-cy-state": state }),
        },
      ]}
      records={records}
      customRowAttributes={({ id, name }, recordIndex) => ({
        "data-cy-id": id,
        "data-cy-name": name,
        "data-cy-index": recordIndex,
      })}
    />
  );
}

export function CustomRowOrCellAttributesMiddleClickExample() {
  const records = companies.slice(0, 5);

  return (
    <DataTable
      withBorder
      shadow="xs"
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      customRowAttributes={({ name }) => ({
        onMouseDown: (e: MouseEvent) => {
          if (e.button === 1) {
            alert(`Middle-click on row ${name}`);
          }
        },
      })}
    />
  );
}

export function CustomizingBorderColorsWithStringsExample() {
  const PAGE_SIZE = 4;
  const allCompanies = sortBy(companies, "name");

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(allCompanies.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(allCompanies.slice(from, to));
  }, [page]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      borderColor="#40C057"
      rowBorderColor="#FAB005"
      records={records}
      columns={[
        {
          accessor: "name",
          width: "40%",
          footer: `${allCompanies.length} companies`,
        },
        { accessor: "streetAddress", width: "60%" },
        {
          accessor: "city",
          width: 160,
          footer: `${uniqBy(allCompanies, (c) => c.city).length} cities`,
        },
        {
          accessor: "state",
          width: 80,
          footer: `${uniqBy(allCompanies, (c) => c.state).length} states`,
        },
      ]}
      totalRecords={allCompanies.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}

export function CustomizingBorderColorsWithFunctionsExample() {
  const PAGE_SIZE = 4;
  const allCompanies = sortBy(companies, "name");

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(allCompanies.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(allCompanies.slice(from, to));
  }, [page]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      // borderColor={(theme) =>
      //   theme.colorScheme === 'dark' ? theme.fn.darken(theme.colors.orange[8], 0.2) : theme.colors.red[8]
      // }
      // rowBorderColor={(theme) =>
      //   theme.colorScheme === 'dark' ? theme.fn.darken(theme.colors.orange[8], 0.4) : theme.colors.red[2]
      // }
      records={records}
      columns={[
        {
          accessor: "name",
          width: "40%",
          footer: `${allCompanies.length} companies`,
        },
        { accessor: "streetAddress", width: "60%" },
        {
          accessor: "city",
          width: 160,
          footer: `${uniqBy(allCompanies, (c) => c.city).length} cities`,
        },
        {
          accessor: "state",
          width: 80,
          footer: `${uniqBy(allCompanies, (c) => c.state).length} states`,
        },
      ]}
      totalRecords={allCompanies.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
    />
  );
}

export function DefaultColumnPropertiesExample() {
  dayjs.extend(relativeTime);

  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={[
        {
          id: 1,
          bookTitle: "The Lord of the Rings",
          published: new Date(1954, 6, 29),
          pages: 1178,
          chapters: 37,
        },
        {
          id: 2,
          bookTitle: "The Hobbit",
          published: new Date(1937, 9, 21),
          pages: 310,
          chapters: 19,
        },
        {
          id: 3,
          bookTitle: "The Silmarillion",
          published: new Date(1977, 9, 15),
          pages: 365,
          chapters: 24,
        },
        {
          id: 4,
          bookTitle: "The Children of Húrin",
          published: new Date(2007, 9, 25),
          pages: 313,
          chapters: 14,
        },
        {
          id: 5,
          bookTitle: "The Fall of Gondolin",
          published: new Date(2018, 9, 25),
          pages: 304,
          chapters: 3,
        },
        {
          id: 6,
          bookTitle: "The Lay of Aotrou and Itroun",
          published: new Date(2019, 9, 25),
          pages: 128,
          chapters: 1,
        },
        {
          id: 7,
          bookTitle: "The Lays of Beleriand",
          published: new Date(2019, 9, 25),
          pages: 400,
          chapters: 2,
        },
        {
          id: 8,
          bookTitle: "The Book of Lost Tales, Part One",
          published: new Date(1984, 9, 25),
          pages: 297,
          chapters: 2,
        },
        {
          id: 9,
          bookTitle: "The Book of Lost Tales, Part Two",
          published: new Date(1984, 9, 25),
          pages: 297,
          chapters: 2,
        },
      ]}
      columns={[
        { accessor: "bookTitle", width: "100%", textAlignment: "left" },
        {
          accessor: "published",
          render: ({ published }) => dayjs(published).fromNow(),
        },
        { accessor: "pages" },
        { accessor: "chapters" },
      ]}
      defaultColumnProps={{
        textAlignment: "right",
        noWrap: true,
        ellipsis: true,
      }}
    />
  );
}

export function DefaultColumnRenderExample() {
  dayjs.extend(relativeTime);

  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={[
        {
          bookTitle: "The Lord of the Rings",
          published: new Date(1954, 6, 29),
        },
        { bookTitle: "The Hobbit", published: new Date(1937, 9, 21) },
        { bookTitle: "The Silmarillion", published: new Date(1977, 9, 15) },
        {
          bookTitle: "The Children of Húrin",
          published: new Date(2007, 9, 25),
        },
        { bookTitle: "The Fall of Gondolin", published: new Date(2018, 9, 25) },
        {
          bookTitle: "The Lay of Aotrou and Itroun",
          published: new Date(2019, 9, 25),
        },
        {
          bookTitle: "The Lays of Beleriand",
          published: new Date(2019, 9, 25),
        },
        {
          bookTitle: "The Book of Lost Tales, Part One",
          published: new Date(1984, 9, 25),
        },
        {
          bookTitle: "The Book of Lost Tales, Part Two",
          published: new Date(1984, 9, 25),
        },
      ]}
      idAccessor="bookTitle"
      columns={[
        { accessor: "bookTitle", width: "100%" },
        { accessor: "published", textAlignment: "right", ellipsis: true },
      ]}
      defaultColumnRender={(row, _, accessor) => {
        const data = row[accessor as keyof typeof row];
        return typeof data === "string" ? data : dayjs(data).fromNow();
      }}
    />
  );
}

export function DisablingTextSelectionExample({
  textSelectionDisabled,
}: {
  textSelectionDisabled: boolean;
}) {
  const records = companies.slice(0, 5);

  return (
    <DataTable
      textSelectionDisabled={textSelectionDisabled}
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
    />
  );
}

export function EmptyStateExampleStandard() {
  return (
    <DataTable
      // minHeight={150}
      records={[]}
      withBorder
      withColumnBorders
      columns={[{ accessor: "name" }, { accessor: "email" }]}
    />
  );
}

export function EmptyStateExampleCustomText() {
  return (
    <DataTable
      // minHeight={150}
      records={[]}
      noRecordsText="No records to show"
      withBorder
      withColumnBorders
      columns={[{ accessor: "name" }, { accessor: "email" }]}
    />
  );
}

export function EmptyStateExampleCustomIconAndText() {
  return (
    <DataTable
      // minHeight={150}
      records={[]}
      noRecordsIcon={
        <Box
          p={4}
          mb={4}
          // sx={(theme) => ({
          //   fontSize: 0,
          //   color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
          //   border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]}`,
          //   borderRadius: theme.radius.md,
          //   background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          // })}
        >
          <IconMoodSad size={36} strokeWidth={1.5} />
        </Box>
      }
      noRecordsText="No records found"
      withBorder
      withColumnBorders
      columns={[{ accessor: "name" }, { accessor: "email" }]}
    />
  );
}

export function EmptyStateExampleCustomContent() {
  return (
    <DataTable
      records={[]}
      emptyState={
        <Stack align="center" gap="xs">
          <Text color="dimmed" size="sm">
            No data found...
          </Text>
          <Image
            width={200}
            radius="md"
            src="https://images.unsplash.com/photo-1577460551100-907ba84418ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            alt="No data found"
            // sx={{ filter: 'grayscale(1)' }}
          />
        </Stack>
      }
      withBorder
      withColumnBorders
      columns={[{ accessor: "name" }, { accessor: "email" }]}
    />
  );
}

export function GettingStartedExample() {
  return (
    <DataTable
      withBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={[
        { id: 1, name: "Joe Biden", bornIn: 1942, party: "Democratic" },
        { id: 2, name: "Donald Trump", bornIn: 1946, party: "Republican" },
        { id: 3, name: "Barack Obama", bornIn: 1961, party: "Democratic" },
        { id: 4, name: "George W. Bush", bornIn: 1946, party: "Republican" },
        { id: 5, name: "Bill Clinton", bornIn: 1946, party: "Democratic" },
        { id: 6, name: "George H. W. Bush", bornIn: 1924, party: "Republican" },
        { id: 7, name: "Ronald Reagan", bornIn: 1911, party: "Republican" },
        { id: 8, name: "Jimmy Carter", bornIn: 1924, party: "Democratic" },
        { id: 9, name: "Gerald Ford", bornIn: 1913, party: "Republican" },
        { id: 10, name: "Richard Nixon", bornIn: 1913, party: "Republican" },
      ]}
      columns={[
        {
          accessor: "id",
          title: "#",
          textAlignment: "right",
        },
        { accessor: "name" },
        {
          accessor: "party",
          render: ({ party }) => (
            <Text color={party === "Democratic" ? "blue" : "red"}>
              {party.slice(0, 3).toUpperCase()}
            </Text>
          ),
        },
        { accessor: "bornIn" },
      ]}
      onRowClick={({ name, party, bornIn }) =>
        alert(
          `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
        )
      }
    />
  );
}

export function HandlingCellClicksExample() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      onCellClick={({ event, record, recordIndex, column, columnIndex }) => {
        openModal({
          title: "Cell click information",
          children: (
            <Stack>
              <Text size="sm">
                You clicked on row[{recordIndex}], column[{columnIndex}] with
                accessor <Code>{column.accessor}</Code>.
                <br />
                The clicked row refers to company <em>{record.name}</em>.
                <br />
                {event.shiftKey && (
                  <>
                    You pressed the <Code>Shift</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.ctrlKey && (
                  <>
                    You pressed the <Code>Ctrl</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.altKey && (
                  <>
                    You pressed the <Code>Alt</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.metaKey && (
                  <>
                    You pressed the <Code>Meta</Code> key when clicking.
                    <br />
                  </>
                )}
              </Text>
              <Center>
                <Button
                  className="w-full min-w-full"
                  onClick={() => closeAllModals()}
                >
                  OK
                </Button>
              </Center>
            </Stack>
          ),
        });
      }}
    />
  );
}

export function HandlingRowClicksExample() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      onRowClick={(company, rowIndex, event) => {
        openModal({
          title: "Company information",
          children: (
            <Stack>
              <Text size="sm">
                You clicked on row[{rowIndex}], referring to company{" "}
                <em>{company.name}</em>.
                <br />
                {event.shiftKey && (
                  <>
                    You pressed the <Code>Shift</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.ctrlKey && (
                  <>
                    You pressed the <Code>Ctrl</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.altKey && (
                  <>
                    You pressed the <Code>Alt</Code> key when clicking.
                    <br />
                  </>
                )}
                {event.metaKey && (
                  <>
                    You pressed the <Code>Meta</Code> key when clicking.
                    <br />
                  </>
                )}
              </Text>
              <Center>
                <Button
                  className="w-full min-w-full"
                  onClick={() => closeAllModals()}
                >
                  OK
                </Button>
              </Center>
            </Stack>
          ),
        });
      }}
    />
  );
}

export function InfiniteScrollingExample() {
  const batchSize = 100;
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState(employees.slice(0, batchSize));
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  let timeout: ReturnType<typeof setTimeout> | undefined;

  const loadMoreRecords = () => {
    if (records.length < employees.length) {
      setLoading(true);
      timeout = setTimeout(() => {
        setRecords(employees.slice(0, records.length + batchSize));
        setLoading(false);
      }, 1000);
    }
  };

  const reset = () => {
    setRecords(employees.slice(0, batchSize));
    // Make sure to scroll to top after resetting records
    scrollViewportRef.current?.scrollTo(0, 0);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [timeout]);

  return (
    <>
      <DataTable
        withBorder
        borderRadius="sm"
        // height={300}
        columns={[
          { accessor: "firstName" },
          { accessor: "lastName" },
          { accessor: "email" },
        ]}
        records={records}
        fetching={loading}
        onScrollToBottom={loadMoreRecords}
        scrollViewportRef={scrollViewportRef}
      />
      <Group mt="sm" mx="xs" justify="space-between">
        <Text size="sm">
          Showing {records.length} records of {employees.length}
          {records.length < employees.length &&
            ", scroll to bottom to load more"}
        </Text>
        <Button variant="light" onClick={reset}>
          Reset records
        </Button>
      </Group>
    </>
  );
}

export function LinksOrButtonsInsideClickableRowsExample() {
  const editInfo = (company: Company) => {
    openModal({
      modalId: "edit",
      title: "Editing company information",
      children: (
        <Stack>
          <Text>Here’s where you could put an edit form...</Text>
          <Grid gutter="xs">
            <Grid.Col span={2}>ID</Grid.Col>
            <Grid.Col span={10}>{company.id}</Grid.Col>
            <Grid.Col span={2}>Name</Grid.Col>
            <Grid.Col span={10}>{company.name}</Grid.Col>
          </Grid>
          <Button onClick={() => closeModal("edit")}>Close</Button>
        </Stack>
      ),
    });
  };

  const deleteCompany = (company: Company) => {
    openModal({
      modalId: "delete",
      title: "Delete company",
      children: (
        <Stack>
          <Text>
            Here’s where you could ask for confirmation before deleting...
          </Text>
          <Grid gutter="xs">
            <Grid.Col span={2}>ID</Grid.Col>
            <Grid.Col span={10}>{company.id}</Grid.Col>
            <Grid.Col span={2}>Name</Grid.Col>
            <Grid.Col span={10}>{company.name}</Grid.Col>
          </Grid>
          <Button onClick={() => closeModal("delete")}>Close</Button>
        </Stack>
      ),
    });
  };

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={records}
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
        {
          accessor: "actions",
          title: <Text mr="xs">Row actions</Text>,
          textAlignment: "right",
          render: (company) => (
            <Group gap={4} justify="end" wrap="nowrap">
              <ActionIcon
                color="blue"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  editInfo(company);
                }}
              >
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon
                color="red"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  deleteCompany(company);
                }}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          ),
        },
      ]}
      rowExpansion={{
        content: ({ record }) => (
          <Stack p="xs" gap={6}>
            <Group gap={6}>
              <Text>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text>Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function NestedTablesExample() {
  const [expandedCompanyIds, setExpandedCompanyIds] = useState<string[]>([]);
  const [expandedDepartmentIds, setExpandedDepartmentIds] = useState<string[]>(
    [],
  );
  return (
    <DataTable
      withBorder
      withColumnBorders
      highlightOnHover
      columns={[
        {
          accessor: "name",
          title: "Company › Department › Employee",
          render: ({ id, name }) => (
            <Group gap="xs">
              <IconChevronRight
                size="0.9em"
                // className={cx(classes.expandIcon, {
                //   [classes.expandIconRotated]: expandedCompanyIds.includes(id),
                // })}
              />
              <IconBuilding size="0.9em" />
              <Text>{name}</Text>
            </Group>
          ),
        },
        {
          accessor: "employees",
          title: "Employees › Birth date",
          textAlignment: "right",
          width: 200,
        },
      ]}
      records={companies}
      rowExpansion={{
        allowMultiple: true,
        expanded: {
          recordIds: expandedCompanyIds,
          onRecordIdsChange: setExpandedCompanyIds,
        },
        content: (company) => (
          <DataTable
            noHeader
            columns={[
              {
                accessor: "name",
                render: ({ id, name }) => (
                  <Group ml="lg" gap="xs" wrap="nowrap">
                    <IconChevronRight
                      size="0.9em"
                      // className={cx(classes.expandIcon, {
                      //   [classes.expandIconRotated]: expandedDepartmentIds.includes(id),
                      // })}
                    />
                    <IconUsers size="0.9em" />
                    <Text>{name}</Text>
                  </Group>
                ),
              },
              { accessor: "employees", textAlignment: "right", width: 200 },
            ]}
            records={departments.filter(
              (department) => department.company.id === company.record.id,
            )}
            rowExpansion={{
              allowMultiple: true,
              expanded: {
                recordIds: expandedDepartmentIds,
                onRecordIdsChange: setExpandedDepartmentIds,
              },
              content: (department) => (
                <DataTable
                  noHeader
                  columns={[
                    {
                      accessor: "name",
                      render: ({ firstName, lastName }) => (
                        <Group gap="xs" wrap="nowrap">
                          <IconUser size="0.9em" />
                          <Text>
                            {firstName} {lastName}
                          </Text>
                        </Group>
                      ),
                    },
                    {
                      accessor: "birthDate",
                      render: ({ birthDate }) =>
                        dayjs(birthDate).format("DD MMM YYYY"),
                      textAlignment: "right",
                      width: 200,
                    },
                  ]}
                  records={employees.filter(
                    (employee) =>
                      employee.department.id === department.record.id,
                  )}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
}

function DepartmentsTable({ companyId }: { companyId: string }) {
  const { records, loading } = useDepartmentsAsync({ companyId });
  const [expandedRecordIds, setExpandedRecordIds] = useState<string[]>([]);

  return (
    <DataTable
      noHeader
      // minHeight={100}
      columns={[
        {
          accessor: "name",
          render: ({ id, name }) => (
            <Group ml="lg" gap="xs" wrap="nowrap">
              <IconChevronRight
                size="0.9em"
                // className={cx(classes.expandIcon, {
                //   [classes.expandIconRotated]: expandedRecordIds.includes(id),
                // })}
              />
              <IconUsers size="0.9em" />
              <Text>{name}</Text>
            </Group>
          ),
        },
        { accessor: "employees", textAlignment: "right", width: 200 },
      ]}
      records={records}
      fetching={loading}
      rowExpansion={{
        allowMultiple: true,
        expanded: {
          recordIds: expandedRecordIds,
          onRecordIdsChange: setExpandedRecordIds,
        },
        content: ({ record }) => <EmployeesTable departmentId={record.id} />,
      }}
    />
  );
}

function EmployeesTable({ departmentId }: { departmentId: string }) {
  const { records, loading } = useEmployeesAsync({ departmentId });

  return (
    <DataTable
      noHeader
      // minHeight={100}
      columns={[
        {
          accessor: "name",
          render: ({ firstName, lastName }) => (
            <Group gap="xs" wrap="nowrap">
              <IconUser size="0.9em" />
              <Text>
                {firstName} {lastName}
              </Text>
            </Group>
          ),
        },
        {
          accessor: "birthDate",
          render: ({ birthDate }) => dayjs(birthDate).format("DD MMM YYYY"),
          textAlignment: "right",
          width: 200,
        },
      ]}
      records={records}
      fetching={loading}
    />
  );
}

export function NestedTablesExampleAsync() {
  const [expandedRecordIds, setExpandedRecordIds] = useState<string[]>([]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      highlightOnHover
      columns={[
        {
          accessor: "name",
          title: "Company › Department › Employee",
          render: ({ id, name }) => (
            <Group gap="xs">
              <IconChevronRight
                size="0.9em"
                // className={cx(classes.expandIcon, {
                //   [classes.expandIconRotated]: expandedRecordIds.includes(id),
                // })}
              />
              <IconBuilding size="0.9em" />
              <Text>{name}</Text>
            </Group>
          ),
        },
        {
          accessor: "employees",
          title: "Employees › Birth date",
          textAlignment: "right",
          width: 200,
        },
      ]}
      records={companies}
      rowExpansion={{
        allowMultiple: true,
        expanded: {
          recordIds: expandedRecordIds,
          onRecordIdsChange: setExpandedRecordIds,
        },
        content: ({ record }) => <DepartmentsTable companyId={record.id} />,
      }}
    />
  );
}

export function NestedTablesExampleAsyncWithSorting() {
  const [expandedRecordIds, setExpandedRecordIds] = useState<string[]>([]);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const { records, loading } = useCompaniesAsync({ sortStatus });

  return (
    <DataTable
      // minHeight={160}
      withBorder
      withColumnBorders
      highlightOnHover
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
      columns={[
        {
          accessor: "name",
          sortable: true,
          title: "Company › Department › Employee",
          render: ({ id, name }) => (
            <Group gap="xs">
              <IconChevronRight
                size="0.9em"
                // className={cx(classes.expandIcon, {
                //   [classes.expandIconRotated]: expandedRecordIds.includes(id),
                // })}
              />
              <IconBuilding size="0.9em" />
              <Text>{name}</Text>
            </Group>
          ),
        },
        {
          accessor: "details",
          sortable: true,
          title: "Employees › Birth date",
          render: ({ employees }) => employees,
          textAlignment: "right",
          width: 200,
        },
      ]}
      records={records}
      fetching={loading}
      rowExpansion={{
        allowMultiple: true,
        expanded: {
          recordIds: expandedRecordIds,
          onRecordIdsChange: setExpandedRecordIds,
        },
        content: ({ record }) => (
          <DepartmentsTable companyId={record.id} sortStatus={sortStatus} />
        ),
      }}
    />
  );
}

export function NonStandardRecordIdsFunctionExample() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={[
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Frodo Baggins",
          bornIn: 2968,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Samwise Gamgee",
          bornIn: 2980,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Meriadoc Brandybuck",
          bornIn: 2982,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Peregrin Took",
          bornIn: 2990,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Gandalf",
          bornIn: 1000,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Aragorn son of Arathorn",
          bornIn: 2931,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Legolas",
          bornIn: 2931,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Gimli son of Gloin",
          bornIn: 2879,
        },
        {
          bookTitle: "The Fellowship of the Ring",
          character: "Boromir son of Denethor",
          bornIn: 2978,
        },
        {
          bookTitle: "The Two Towers",
          character: "Frodo Baggins",
          bornIn: 2968,
        },
        {
          bookTitle: "The Two Towers",
          character: "Samwise Gamgee",
          bornIn: 2980,
        },
        {
          bookTitle: "The Two Towers",
          character: "Meriadoc Brandybuck",
          bornIn: 2982,
        },
        {
          bookTitle: "The Two Towers",
          character: "Peregrin Took",
          bornIn: 2990,
        },
        { bookTitle: "The Two Towers", character: "Gandalf", bornIn: 1000 },
        {
          bookTitle: "The Two Towers",
          character: "Aragorn son of Arathorn",
          bornIn: 2931,
        },
        { bookTitle: "The Two Towers", character: "Legolas", bornIn: 2931 },
        {
          bookTitle: "The Two Towers",
          character: "Gimli son of Gloin",
          bornIn: 2879,
        },
        {
          bookTitle: "The Two Towers",
          character: "Boromir son of Denethor",
          bornIn: 2978,
        },
        {
          bookTitle: "The Return of the King",
          character: "Frodo Baggins",
          bornIn: 2968,
        },
        {
          bookTitle: "The Return of the King",
          character: "Samwise Gamgee",
          bornIn: 2980,
        },
        {
          bookTitle: "The Return of the King",
          character: "Meriadoc Brandybuck",
          bornIn: 2982,
        },
        {
          bookTitle: "The Return of the King",
          character: "Peregrin Took",
          bornIn: 2990,
        },
        {
          bookTitle: "The Return of the King",
          character: "Gandalf",
          bornIn: 1000,
        },
      ]}
      columns={[
        { accessor: "character", width: "100%" },
        { accessor: "bornIn", textAlignment: "right" },
        { accessor: "bookTitle", noWrap: true },
      ]}
      idAccessor={({ bookTitle, character }) => `${bookTitle}:${character}`}
    />
  );
}

export function NonStandardRecordIdsExample() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={[
        { name: "Joe Biden", bornIn: 1942 },
        { name: "Donald Trump", bornIn: 1946 },
        { name: "Barack Obama", bornIn: 1961 },
        { name: "George W. Bush", bornIn: 1946 },
        { name: "Bill Clinton", bornIn: 1946 },
        { name: "George H. W. Bush", bornIn: 1924 },
        { name: "Ronald Reagan", bornIn: 1911 },
        { name: "Jimmy Carter", bornIn: 1924 },
        { name: "Gerald Ford", bornIn: 1913 },
        { name: "Richard Nixon", bornIn: 1913 },
      ]}
      columns={[
        { accessor: "name", width: "100%" },
        { accessor: "bornIn", textAlignment: "right" },
      ]}
      idAccessor="name"
    />
  );
}

export function PaginationExample() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(employees.slice(from, to));
  }, [page]);

  return (
    <Box className="h-[30px]">
      <DataTable
        withBorder
        records={records}
        columns={[
          { accessor: "firstName", width: 100 },
          { accessor: "lastName", width: 100 },
          { accessor: "email", width: "100%" },
          {
            accessor: "birthDate",
            textAlignment: "right",
            width: 120,
            render: ({ birthDate }) => dayjs(birthDate).format("MMM D YYYY"),
          },
        ]}
        totalRecords={employees.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
        // uncomment the next line to use a custom loading text
        // loadingText="Loading..."
        // uncomment the next line to display a custom text when no records were found
        // noRecordsText="No records found"
        // uncomment the next line to use a custom pagination text
        // paginationText={({ from, to, totalRecords }) => `Records ${from} - ${to} of ${totalRecords}`}
        // uncomment the next line to use a custom pagination color (see https://mantine.dev/theming/colors/)
        // paginationColor="grape"
        // uncomment the next line to use a custom pagination size
        // paginationSize="md"
      />
    </Box>
  );
}

export function PaginationExampleWithControlProps() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(employees.slice(from, to));
  }, [page]);

  return (
    <Box className="h-[300px]">
      <DataTable
        withBorder
        records={records}
        columns={[
          { accessor: "firstName", width: 100 },
          { accessor: "lastName", width: 100 },
          { accessor: "email", width: "100%" },
          {
            accessor: "birthDate",
            textAlignment: "right",
            width: 120,
            render: ({ birthDate }) => dayjs(birthDate).format("MMM D YYYY"),
          },
        ]}
        totalRecords={employees.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
        getPaginationControlProps={(control) => {
          if (control === "previous") {
            const title = "Go to previous page";
            return { title, "aria-label": title };
          } else if (control === "next") {
            const title = "Go to next page";
            return { title, "aria-label": title };
          }
          return {};
        }}
      />
    </Box>
  );
}

export function PaginationExampleWithPageSizeSelector() {
  const PAGE_SIZES = [10, 15, 20];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(employees.slice(from, to));
  }, [page, pageSize]);

  return (
    <Box className="h-[300px]">
      <DataTable
        withBorder
        records={records}
        columns={[
          { accessor: "firstName", width: 100 },
          { accessor: "lastName", width: 100 },
          { accessor: "email", width: "100%" },
          {
            accessor: "birthDate",
            textAlignment: "right",
            width: 120,
            render: ({ birthDate }) => dayjs(birthDate).format("MMM D YYYY"),
          },
        ]}
        totalRecords={employees.length}
        paginationColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </Box>
  );
}

export function RecordsSelectionExample() {
  const [selectedRecords, setSelectedRecords] = useState<Company[]>([]);

  return (
    <>
      <DataTable
        withBorder
        withColumnBorders
        records={companies}
        columns={[
          { accessor: "name", width: "40%" },
          { accessor: "streetAddress", width: "60%" },
          { accessor: "city", width: 160 },
          { accessor: "state", width: 80 },
        ]}
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
      />
      <Paper my="xl" py="xl" withBorder radius={0}>
        <Center>
          <Button
            leftSection={<IconTrash size={16} />}
            color="red"
            disabled={!selectedRecords.length}
            onClick={() =>
              showNotification({
                color: "red",
                message: "Deleting data is dangerous!",
              })
            }
            className="uppercase"
          >
            {selectedRecords.length
              ? `Delete ${
                  selectedRecords.length === 1
                    ? "one selected record"
                    : `${selectedRecords.length} selected records`
                }`
              : "Select records to delete"}
          </Button>
        </Center>
      </Paper>
    </>
  );
}

export function RecordsSelectionWithDisabledItemsExample() {
  const [selectedRecords, setSelectedRecords] = useState<Company[]>([]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={companies}
      columns={[
        { accessor: "name", width: "40%" },
        { accessor: "streetAddress", width: "60%" },
        { accessor: "city", width: 160 },
        { accessor: "state", width: 80 },
      ]}
      selectedRecords={selectedRecords}
      onSelectedRecordsChange={setSelectedRecords}
      isRecordSelectable={(record) => record.name.length < 14}
    />
  );
}

export function RecordsSelectionWithAdditionalCheckboxProps() {
  const [selectedRecords, setSelectedRecords] = useState<Company[]>([]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={companies}
      columns={[
        { accessor: "name", width: "40%" },
        { accessor: "streetAddress", width: "60%" },
        { accessor: "city", width: 160 },
        { accessor: "state", width: 80 },
      ]}
      selectedRecords={selectedRecords}
      onSelectedRecordsChange={setSelectedRecords}
      allRecordsSelectionCheckboxProps={{ "aria-label": "Select all records" }}
      getRecordSelectionCheckboxProps={(record) => ({
        "aria-label": `Select ${record.name}`,
      })}
    />
  );
}

export function RowActionsCellExample() {
  const showInfo = (company: Company) => {
    openModal({
      modalId: "view",
      title: "Showing company information",
      children: (
        <Stack>
          <Text>Here’s where you could show more information...</Text>
          <Grid gutter="xs">
            <Grid.Col span={2}>ID</Grid.Col>
            <Grid.Col span={10}>{company.id}</Grid.Col>
            <Grid.Col span={2}>Name</Grid.Col>
            <Grid.Col span={10}>{company.name}</Grid.Col>
          </Grid>
          <Button onClick={() => closeModal("view")}>Close</Button>
        </Stack>
      ),
    });
  };

  const editInfo = (company: Company) => {
    openModal({
      modalId: "edit",
      title: "Editing company information",
      children: (
        <Stack>
          <Text>Here’s where you could put an edit form...</Text>
          <Grid gutter="xs">
            <Grid.Col span={2}>ID</Grid.Col>
            <Grid.Col span={10}>{company.id}</Grid.Col>
            <Grid.Col span={2}>Name</Grid.Col>
            <Grid.Col span={10}>{company.name}</Grid.Col>
          </Grid>
          <Button onClick={() => closeModal("edit")}>Close</Button>
        </Stack>
      ),
    });
  };

  const deleteCompany = (company: Company) => {
    openModal({
      modalId: "delete",
      title: "Delete company",
      children: (
        <Stack>
          <Text>
            Here’s where you could ask for confirmation before deleting...
          </Text>
          <Grid gutter="xs">
            <Grid.Col span={2}>ID</Grid.Col>
            <Grid.Col span={10}>{company.id}</Grid.Col>
            <Grid.Col span={2}>Name</Grid.Col>
            <Grid.Col span={10}>{company.name}</Grid.Col>
          </Grid>
          <Button onClick={() => closeModal("delete")}>Close</Button>
        </Stack>
      ),
    });
  };

  return (
    <DataTable
      withBorder
      shadow="xs"
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
        {
          accessor: "actions",
          title: <Text mr="xs">Row actions</Text>,
          textAlignment: "right",
          render: (company) => (
            <Group gap={4} justify="end" wrap="nowrap">
              <ActionIcon color="green" onClick={() => showInfo(company)}>
                <IconEye size={16} />
              </ActionIcon>
              <ActionIcon color="blue" onClick={() => editInfo(company)}>
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon color="red" onClick={() => deleteCompany(company)}>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          ),
        },
      ]}
      records={records}
    />
  );
}

export function RowContextMenuExample1() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample2() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        trigger: "click",
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample3() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        hidden: true,
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample4() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        // 👇 hide the context menu for the 1st row
        hidden: (record) => companies.indexOf(record) === 0,
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample5() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            // disable this item for the 1st row
            disabled: companies.indexOf(record) === 0,
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample6() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            // 👇 hide this item for the 1st row
            hidden: companies.indexOf(record) === 0,
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample7() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            icon: <IconEdit size={16} />,
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            icon: <IconTrash size={16} />,
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            icon: <IconSend size={16} />,
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample8() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            icon: <IconEdit size={16} />,
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            // 👇 set a specific icon for the 1st row
            icon:
              companies.indexOf(record) === 0 ? (
                <IconX size={16} />
              ) : (
                <IconTrash size={16} />
              ),
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            icon: <IconSend size={16} />,
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample9() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        items: (record) => [
          {
            key: "edit",
            icon: <IconEdit size={16} />,
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            // 👇 set a specific color for the 1st row
            color: companies.indexOf(record) === 0 ? "orange" : "red",
            icon: <IconTrash size={16} />,
            title: `Delete company ${record.name}`,
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          {
            key: "sendMessage",
            title: "Send message to company HQ",
            icon: <IconSend size={16} />,
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExample10() {
  return (
    <DataTable
      withBorder
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowContextMenu={{
        shadow: "xl", // 👈 custom shadow
        borderRadius: "md", // 👈 custom border radius
        items: (record) => [
          {
            key: "edit",
            onClick: () =>
              showNotification({
                message: `Should edit company ${record.name}`,
              }),
          },
          {
            key: "delete",
            color: "red",
            onClick: () =>
              showNotification({
                color: "red",
                message: `Should delete company ${record.name}`,
              }),
          },
          // 👇 add a divider between `delete` and `sendMessage` items
          { key: "divider1", divider: true },
          {
            key: "sendMessage",
            onClick: () => {
              showNotification({
                message: "Should send a message to this company",
              });
            },
          },
        ],
      }}
    />
  );
}

export function RowContextMenuExampleInsideModal() {
  return (
    <Button
      leftSection={<IconAppWindow size={16} />}
      onClick={() =>
        modals.open({
          title: "Right-click on a row",
          children: (
            <DataTable
              // height={300}
              withBorder
              borderRadius="sm"
              columns={[
                { accessor: "name", title: "Company name" },
                { accessor: "city", textAlignment: "right" },
              ]}
              records={companies}
              rowContextMenu={{
                zIndex: 202, // 👈 make sure the context menu is above the modal
                // example-skip items
                items: (record) => [
                  {
                    key: "edit",
                    icon: <IconEdit size={16} />,
                    onClick: () =>
                      showNotification({
                        message: `Should edit company ${record.name}`,
                      }),
                  },
                  {
                    key: "delete",
                    icon: <IconTrash size={16} />,
                    color: "red",
                    onClick: () =>
                      showNotification({
                        color: "red",
                        message: `Should delete company ${record.name}`,
                      }),
                  },
                  { key: "divider", divider: true },
                  {
                    key: "sendMessage",
                    icon: <IconSend size={16} />,
                    onClick: () => {
                      showNotification({
                        message: "Should send a message to this company",
                      });
                    },
                  },
                ],
              }}
            />
          ),
        })
      }
    >
      Open modal
    </Button>
  );
}

type CompanyEditorProps = {
  initialData: Company;
  onDone: (data: Company) => void;
  onCancel: () => void;
};

function CompanyEditor({ initialData, onDone, onCancel }: CompanyEditorProps) {
  const [name, setName] = useState(initialData.name);
  const [city, setCity] = useState(initialData.city);
  const [state, setState] = useState(initialData.state);
  const [streetAddress, setStreetAddress] = useState(initialData.streetAddress);
  const [missionStatement, setMissionStatement] = useState(
    initialData.missionStatement,
  );

  return (
    <Box className="" p="md">
      <Grid>
        <Grid.Col span={12} w={{ xs: 6 }}>
          <TextInput
            label="Name"
            size="xs"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12} w={{ xs: 4 }}>
          <TextInput
            label="City"
            size="xs"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12} w={{ xs: 2 }}>
          <TextInput
            label="State"
            size="xs"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Street address"
            size="xs"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Mission statement"
            size="xs"
            value={missionStatement}
            onChange={(e) => setMissionStatement(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Group justify="center">
            <Button
              variant="default"
              size="xs"
              leftSection={<IconArrowBackUp size={16} />}
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
            <Button
              size="xs"
              leftSection={<IconCheck size={16} />}
              onClick={() =>
                onDone({
                  ...initialData,
                  name: name.trim(),
                  city: city.trim(),
                  state: state.trim(),
                  streetAddress: streetAddress.trim(),
                  missionStatement: missionStatement.trim(),
                })
              }
            >
              Save
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export function RowExpansionExampleWithInlineEditor() {
  const initialRecords = companyData.slice(0, 5);
  const [companies, setCompanies] = useState(initialRecords);
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
      rowExpansion={{
        content: ({ record, collapse }) => (
          <CompanyEditor
            initialData={record}
            onDone={(data) => {
              const index = companies.findIndex((c) => c.id === data.id);
              setCompanies([
                ...companies.slice(0, index),
                data,
                ...companies.slice(index + 1),
              ]);
              collapse();
            }}
            onCancel={collapse}
          />
        ),
      }}
    />
  );
}

function CompanyDetails({ companyId }: { companyId: string }) {
  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(true);
  const [numberOfDepartments, setNumberOfDepartments] = useState<number | null>(
    null,
  );
  const [numberOfEmployees, setNumberOfEmployees] = useState<number | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      const delay = { min: 800, max: 1200 };
      const [departments, employees] = await Promise.all([
        countCompanyDepartmentsAsync({ companyId, delay }),
        countCompanyEmployeesAsync({ companyId, delay }),
      ]);
      if (isMounted()) {
        setNumberOfDepartments(departments);
        setNumberOfEmployees(employees);
        setLoading(false);
      }
    })();
  }, [companyId, isMounted]);

  return (
    <Center className="" p="sm">
      <Stack gap={6}>
        <LoadingOverlay visible={loading} />
        <Group gap={6}>
          <Text className="">Number of departments:</Text>
          <Text className="text-right">
            {numberOfDepartments ?? "loading..."}
          </Text>
        </Group>
        <Group gap={6}>
          <Text className="">Number of employees:</Text>
          <Text className="text-right">
            {numberOfEmployees ?? "loading..."}
          </Text>
        </Group>
      </Stack>
    </Center>
  );
}

export function RowExpansionExampleWithLazyLoading() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        content: ({ record }) => <CompanyDetails companyId={record.id} />,
      }}
    />
  );
}

export function RowExpansionExampleSimple() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        content: ({ record }) => (
          <Stack className="" p="xs" gap={6}>
            <Group gap={6}>
              <Text className="">Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text className="">Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function RowExpansionExampleCollapseProps() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        collapseProps: {
          transitionDuration: 500,
          animateOpacity: false,
          transitionTimingFunction: "ease-out",
        },
        content: ({ record }) => (
          <Stack className="" p="xs" gap={6}>
            <Group gap={6}>
              <Text className="">Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text className="">Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function RowExpansionExampleInitiallyExpandedRows() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        initiallyExpanded: (record) => record.name === "Johnston LLC",
        content: ({ record }) => (
          <Stack className="" p="xs" gap={6}>
            <Group gap={6}>
              <Text className="">Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text className="">Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function RowExpansionExampleMultipleExpandedRows() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        allowMultiple: true,
        content: ({ record }) => (
          <Stack className="" p="xs" gap={6}>
            <Group gap={6}>
              <Text className="">Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text className="">Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function RowExpansionExampleTriggerAlways() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[
        { accessor: "name" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={records}
      rowExpansion={{
        trigger: "always",
        content: ({ record }) => (
          <Stack className="" p="xs" gap={6}>
            <Group gap={6}>
              <Text className="">Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group gap={6}>
              <Text className="">Mission statement:</Text>
              <Text className="italic">“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
}

export function RowExpansionExampleControlledMode() {
  // const horizontalButtons = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const [firstRowId, secondRowId, thirdRowId, fourthRowId] = records
    .slice(0, 4)
    .map((r) => r.id);

  const [expandedRecordIds, setExpandedRecordIds] = useState<string[]>([]);

  const expandFirstAndThirdRow = () => {
    setExpandedRecordIds([firstRowId, thirdRowId]);
  };

  const expandSecondAndFourthRow = () => {
    setExpandedRecordIds([secondRowId, fourthRowId]);
  };

  const collapseAllRows = () => {
    setExpandedRecordIds([]);
  };

  return (
    <>
      {/* <Button.Group orientation={horizontalButtons ? 'horizontal' : 'vertical'}> */}
      <Button.Group orientation="horizontal">
        <Button
          // className={cx({ [classes.horizontalButton]: horizontalButtons })}
          variant="default"
          onClick={expandFirstAndThirdRow}
          disabled={
            expandedRecordIds.includes(firstRowId) &&
            expandedRecordIds.includes(thirdRowId)
          }
        >
          Expand first and third row
        </Button>
        <Button
          // className={cx({ [classes.horizontalButton]: horizontalButtons })}
          variant="default"
          onClick={expandSecondAndFourthRow}
          disabled={
            expandedRecordIds.includes(secondRowId) &&
            expandedRecordIds.includes(fourthRowId)
          }
        >
          Expand second and fourth row
        </Button>
        <Button
          // className={cx({ [classes.horizontalButton]: horizontalButtons })}
          variant="default"
          onClick={collapseAllRows}
          disabled={expandedRecordIds.length === 0}
        >
          Collapse all rows
        </Button>
      </Button.Group>
      <DataTable
        mt="md"
        withBorder
        withColumnBorders
        columns={[
          { accessor: "number", title: "#", render: (_, index) => index + 1 },
          { accessor: "name", width: "100%" },
          { accessor: "city", ellipsis: true },
          { accessor: "state" },
        ]}
        records={records}
        rowExpansion={{
          // trigger: 'never', // 👈 uncomment this if you want to disable expanding/collapsing on click
          allowMultiple: true,
          expanded: {
            recordIds: expandedRecordIds,
            onRecordIdsChange: setExpandedRecordIds,
          },
          content: ({ record }) => (
            <Stack className="" p="xs" gap={6}>
              <Group gap={6}>
                <Text className="">Postal address:</Text>
                <Text>
                  {record.streetAddress}, {record.city}, {record.state}
                </Text>
              </Group>
              <Group gap={6}>
                <Text className="">Mission statement:</Text>
                <Text className="italic">“{record.missionStatement}”</Text>
              </Group>
            </Stack>
          ),
        }}
      />
    </>
  );
}

export function ScrollableExample() {
  return (
    <DataTable
      // height={300}
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        { accessor: "firstName" },
        { accessor: "lastName" },
        { accessor: "email" },
      ]}
    />
  );
}

export function AutoHeightExample() {
  return (
    <DataTable
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        { accessor: "firstName" },
        { accessor: "lastName" },
        { accessor: "email" },
      ]}
    />
  );
}

export function ScrollAreaPropsExample() {
  return (
    <DataTable
      // height={300}
      withBorder
      withColumnBorders
      striped
      records={records}
      columns={[
        { accessor: "firstName" },
        { accessor: "lastName" },
        { accessor: "email" },
      ]}
      scrollAreaProps={{ type: "never" }}
    />
  );
}

export function SearchingAndFilteringExample() {
  const initialRecords = employees.slice(0, 100);
  const [records, setRecords] = useState(initialRecords);

  const departments = useMemo(() => {
    const departments = new Set(employees.map((e) => e.department.name));
    return [...departments];
  }, []);

  const [query, setQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [birthdaySearchRange, setBirthdaySearchRange] =
    useState<DatesRangeValue>();
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setRecords(
      initialRecords.filter(
        ({ firstName, lastName, department, birthDate }) => {
          if (
            debouncedQuery !== "" &&
            !`${firstName} ${lastName}`
              .toLowerCase()
              .includes(debouncedQuery.trim().toLowerCase())
          ) {
            return false;
          }

          if (
            birthdaySearchRange &&
            birthdaySearchRange[0] &&
            birthdaySearchRange[1] &&
            (dayjs(birthdaySearchRange[0]).isAfter(birthDate, "day") ||
              dayjs(birthdaySearchRange[1]).isBefore(birthDate, "day"))
          ) {
            return false;
          }

          if (
            selectedDepartments.length &&
            !selectedDepartments.some((d) => d === department.name)
          ) {
            return false;
          }
          return true;
        },
      ),
    );
  }, [debouncedQuery, birthdaySearchRange, selectedDepartments]);

  return (
    <Box className="h-[300px]">
      <DataTable
        withBorder
        records={records}
        columns={[
          {
            accessor: "name",
            render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
            filter: (
              <TextInput
                label="Employees"
                description="Show employees whose names include the specified text"
                placeholder="Search employees..."
                leftSection={<IconSearch size={16} />}
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
              />
            ),
            filtering: query !== "",
          },
          {
            accessor: "department.name",
            filter: (
              <MultiSelect
                label="Departments "
                description="Show all employees working at the selected departments"
                data={departments}
                value={selectedDepartments}
                placeholder="Search departments…"
                onChange={setSelectedDepartments}
                leftSection={<IconSearch size={16} />}
                clearable
                searchable
              />
            ),
            filtering: selectedDepartments.length > 0,
          },
          { accessor: "department.company.name" },
          {
            accessor: "birthDate",
            render: ({ birthDate }) => dayjs(birthDate).format("MMM DD YYYY"),
            filter: ({ close }) => (
              <Stack>
                <DatePicker
                  maxDate={new Date()}
                  type="range"
                  value={birthdaySearchRange}
                  onChange={setBirthdaySearchRange}
                />
                <Button
                  disabled={!birthdaySearchRange}
                  color="red"
                  onClick={() => {
                    setBirthdaySearchRange(undefined);
                    close();
                  }}
                >
                  Reset
                </Button>
              </Stack>
            ),
            filtering: Boolean(birthdaySearchRange),
          },
          {
            accessor: "age",
            render: ({ birthDate }) => dayjs().diff(birthDate, "y"),
          },
        ]}
      />
    </Box>
  );
}

export function SortingExample() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(companies, "name"));

  useEffect(() => {
    const data = sortBy(companies, sortStatus.columnAccessor) as Company[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={records}
      columns={[
        { accessor: "name", width: "40%", sortable: true },
        { accessor: "streetAddress", width: "60%" },
        { accessor: "city", width: 160, sortable: true },
        { accessor: "state", sortable: true },
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
}

export function SortingExampleCustomIcons() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(companies, "name"));

  useEffect(() => {
    const data = sortBy(companies, sortStatus.columnAccessor) as Company[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={records}
      columns={[
        { accessor: "name", width: "40%", sortable: true },
        { accessor: "streetAddress", width: "60%" },
        { accessor: "city", width: 160, sortable: true },
        { accessor: "state", sortable: true },
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
      sortIcons={{
        sorted: <IconChevronUp size={14} />,
        unsorted: <IconSelector size={14} />,
      }}
    />
  );
}

type User = {
  id: string;
  name: string;
  age: number;
};

const createUser = (): User => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  age: faker.datatype.number({ min: 18, max: 65 }),
});

export function UsingWithAutoAnimateExample() {
  const [records, setRecords] = useState<User[]>([]);

  useEffect(() => {
    setRecords(Array.from({ length: 3 }, createUser));
  }, []);

  const handleAdd = () => {
    setRecords((current) => [...current, createUser()]);
  };

  const moveUserUp = (index: number) => {
    setRecords((current) => {
      const copy = [...current];
      const user = copy[index];
      copy[index] = copy[index - 1];
      copy[index - 1] = user;
      return copy;
    });
  };

  const moveUserDown = (index: number) => {
    setRecords((current) => {
      const copy = [...current];
      const user = copy[index];
      copy[index] = copy[index + 1];
      copy[index + 1] = user;
      return copy;
    });
  };

  const deleteUser = (id: string) => {
    setRecords((current) => current.filter((user) => user.id !== id));
  };

  const handleSortByAge = () => {
    setRecords((current) => [...current].sort((a, b) => a.age - b.age));
  };

  const handleSortByName = () => {
    setRecords((current) =>
      [...current].sort((a, b) => a.name.localeCompare(b.name)),
    );
  };

  const handleDeleteAll = () => {
    setRecords([]);
  };

  // example-start
  // ...

  const [bodyRef] = useAutoAnimate<HTMLTableSectionElement>();

  return (
    <>
      <DataTable
        mb="xl"
        withBorder
        // minHeight={160}
        columns={[
          {
            accessor: "move",
            title: (
              <Center>
                <IconArrowsUpDown size={14} />
              </Center>
            ),
            render: (_, index) => (
              <Box display="flex">
                <ActionIcon
                  variant="transparent"
                  color="green"
                  disabled={index === 0}
                  onClick={() => moveUserUp(index)}
                >
                  <IconArrowUp size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  color="green"
                  disabled={index === records.length - 1}
                  onClick={() => moveUserDown(index)}
                >
                  <IconArrowDown size={18} />
                </ActionIcon>
              </Box>
            ),
          },
          { accessor: "name", width: "100%" },
          { accessor: "age", textAlignment: "right" },
          {
            accessor: "delete",
            title: (
              <ActionIcon
                variant="transparent"
                color="red"
                disabled={records.length === 0}
                onClick={handleDeleteAll}
              >
                <IconTrashX size={18} />
              </ActionIcon>
            ),
            render: ({ id }) => (
              <ActionIcon
                variant="transparent"
                color="red"
                onClick={() => deleteUser(id)}
              >
                <IconTrash size={18} />
              </ActionIcon>
            ),
          },
        ]}
        records={records}
        bodyRef={bodyRef}
      />
      <Group>
        <Button onClick={handleAdd}>Add new user</Button>
        <Button color="green" onClick={handleSortByName}>
          Sort by name
        </Button>
        <Button color="green" onClick={handleSortByAge}>
          Sort by age
        </Button>
        <Button color="red" onClick={handleDeleteAll}>
          Delete all
        </Button>
      </Group>
    </>
  );
}
