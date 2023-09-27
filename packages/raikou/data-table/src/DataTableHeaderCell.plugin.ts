module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTable-sortableColumnHeader": {
      cursor: "pointer",
      transition: "background .15s ease",
      "&:hover:not(:has(button:hover))": {
        '[data-raikou-color-scheme="light"] &': {
          background: "--raikou-color-gray-0",
        },
        '[data-raikou-color-scheme="dark"] &': {
          background: "--raikou-color-dark-6",
        },
      },
    },
    ".dataTable-sortableColumnHeaderGroup": {
      gap: "0.25em",
    },
    ".dataTable-columnHeaderText": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    ".dataTable-sortableColumnHeaderText": {
      minWidth: "0",
      flexGrow: "1",
    },
    ".dataTable-sortableColumnHeaderIcon": {
      transition: "transform .15s ease",
    },
    ".dataTable-sortableColumnHeaderIconRotated": {
      transform: "rotate3d(0, 0, 1, 180deg)",
    },
    ".dataTable-sortableColumnHeaderUnsortedIcon": {
      '[data-raikou-color-scheme="light"] &': {
        color: "--raikou-color-dark-5",
      },
      '[data-raikou-color-scheme="dark"] &': {
        color: "--raikou-color-gray-3",
      },
      transition: "color .15s ease",
      "th:hover &": {
        '[data-raikou-color-scheme="light"] &': {
          color: "--raikou-color-dark-6",
        },
        '[data-raikou-color-scheme="dark"] &': {
          color: "--raikou-color-gray-2",
        },
      },
    },
  });
};
