module.exports = function ({ addComponents }: any) {
  addComponents({
    ".accordion-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-accordion-control-color": "#000",
        "--raikou-accordion-control-background-color": "#f8f9fa",
        "--raikou-accordion-item-border-color": "#dee2e6",
        "--raikou-accordion-item-filled-color": "#f8f9fa",
        "--raikou-accordion-item-item-bg": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-accordion-control-color": "#c1c2c5",
        "--raikou-accordion-control-background-color": "#25262b",
        "--raikou-accordion-item-border-color": "#373a40",
        "--raikou-accordion-item-filled-color": "#25262b",
        "--raikou-accordion-item-item-bg": "#1a1b1e",
      },
    },
    ".actionIcon-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-actionicon-loading-overlay-bg": "rgba(255, 255, 255, 0.35)",
        "--raikou-actionicon-disabled-bg": "#f1f3f5",
        "--raikou-actionicon-disabled-color": "#adb5bd",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-actionicon-loading-overlay-bg": "rgba(0, 0, 0, 0.35)",
        "--raikou-actionicon-disabled-bg": "#868e96",
        "--raikou-actionicon-disabled-color": "#dee2e6",
      },
    },
    ".alert-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-alert-message-color": "#000",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-alert-message-color": "#fff",
      },
    },
    ".appshell-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-app-shell-border-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-app-shell-border-color": "#373a40",
      },
    },
    ".badge-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-badge-bg": "#fff",
        "--raikou-badge-border-color": "#ced4da",
        "--raikou-badge-color": "#000",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-badge-bg": "#2c2e33",
        "--raikou-badge-border-color": "#2c2e33",
        "--raikou-badge-color": "#fff",
      },
    },
    ".breadcrumbs-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-breadcrumbs-separator-color": "#495057",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-breadcrumbs-separator-color": "#909296",
      },
    },
    ".button-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-button-disabled-color": "#adb5bd",
        "--raikou-button-disabled-bg": "#f1f3f5",
        "--raikou-button-loading-overlay-bg": "rgba(255, 255, 255, 0.35)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-button-disabled-color": "#5c5f66",
        "--raikou-button-disabled-bg": "#25262b",
        "--raikou-button-loading-overlay-bg": "rgba(0, 0, 0, 0.35)",
      },
    },
    ".burger-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-burger-color": "#000",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-burger-color": "#fff",
      },
    },
    ".card-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-card-bg": "#fff",
        "--raikou-card-section-border-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-card-bg": "#25262b",
        "--raikou-card-section-border-color": "#373a40",
      },
    },
    ".checkbox-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-checkbox-bg": "#fff",
        "--raikou-checkbox-bd-color": "#ced4da",
        "--raikou-checkbox-disabled-bg": "#e9ecef",
        "--raikou-checkbox-disabled-bd-color": "#dee2e6",
        "--raikou-checkbox-disabled-icon-color": "#adb5bd",
        "--raikou-checkbox-icon-color": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-checkbox-bg": "#25262b",
        "--raikou-checkbox-bd-color": "#373a40",
        "--raikou-checkbox-disabled-bg": "#25262b",
        "--raikou-checkbox-disabled-bd-color": "#1a1b1e",
        "--raikou-checkbox-disabled-icon-color": "#5c5f66",
        "--raikou-checkbox-icon-color": "#fff",
      },
    },
    ".closeButton-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-closebutton-cb-color": "#495057",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-closebutton-cb-color": "#f1f3f5",
      },
    },
    '.closeButton-root[data-variant="subtle"]': {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-closebutton-bg-hover": "#f8f9fa",
        "--raikou-closebutton-bg-active": "#868e96",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-closebutton-bg-hover": "#f8f9fa",
        "--raikou-closebutton-bg-active": "#868e96",
      },
    },
    ".chip-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-chip-bg-disabled": "#e9ecef",
        "--raikou-chip-color-disabled": "#adb5bd",
        "--raikou-chip-outline-hover-bg": "#f8f9fa",
        "--raikou-chip-outline-active-bg": "#f8f9fa",
        "--raikou-chip-outline-bg": "#fff",
        "--raikou-chip-outline-bd": "#dee2e6",
        "--raikou-chip-filled-hover-bg": "#f1f3f5",
        "--raikou-chip-filled-active-bg": "#e9ecef",
        "--raikou-chip-filled-bg": "#f8f9fa",
        "--raikou-chip-light-hover-bg": "#f1f3f5",
        "--raikou-chip-light-active-bg": "#e9ecef",
        "--raikou-chip-light-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-chip-bg-disabled": "#e9ecef",
        "--raikou-chip-color-disabled": "#adb5bd",
        "--raikou-chip-outline-hover-bg": "#2c2e33",
        "--raikou-chip-outline-active-bg": "#2c2e33",
        "--raikou-chip-outline-bg": "#25262b",
        "--raikou-chip-outline-bd": "#373a40",
        "--raikou-chip-filled-hover-bg": "#2c2e33",
        "--raikou-chip-filled-active-bg": "#25262b",
        "--raikou-chip-filled-bg": "#25262b",
        "--raikou-chip-light-hover-bg": "#2c2e33",
        "--raikou-chip-light-active-bg": "#25262b",
        "--raikou-chip-light-bg": "#25262b",
      },
    },
    ".code-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-code-bg": "#f1f3f5",
        "--raikou-code-color": "#000",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-code-bg": "#2c2e33",
        "--raikou-code-color": "#fff",
      },
    },
    ".colorPicker-wrapper": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-colorpicker-slider-checkers": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-colorpicker-slider-checkers": "#373a40",
      },
    },
    ".colorswatch-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-colorswatch-alpha-overlay-color": "#dee2e6",
        "--raikou-colorswatch-alpha-overlay-bg": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-colorswatch-alpha-overlay-color": "#373a40",
        "--raikou-colorswatch-alpha-overlay-bg": "#1a1b1e",
      },
    },
    ".comboBox-dropdown": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-combobox-option-hover-bg": "#f8f9fa",
        "--raikou-combobox-option-active-bg": "#f8f9fa",
        "--raikou-combobox-search-border-color": "#e9ecef",
        "--raikou-combobox-search_background": "#000",
        "--raikou-combobox-footer-border-color": "#e9ecef",
        "--raikou-combobox-divider-bg": "#e9ecef",
        "--raikou-combobox-chevron-color": "#868e96",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-combobox-option-hover-bg": "#1a1b1e",
        "--raikou-combobox-option-active-bg": "#1a1b1e",
        "--raikou-combobox-search-border-color": "#373a40",
        "--raikou-combobox-search_background": "#1a1b1e",
        "--raikou-combobox-footer-border-color": "#373a40",
        "--raikou-combobox-divider-bg": "#373a40",
        "--raikou-combobox-chevron-color": "#5c5f66",
      },
    },
    ".dataTable-root tr": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-root-tr": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-root-tr": "#1a1b1e",
      },
    },
    ".dataTable-root thead tr th": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-root-th": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-root-th": "#373a40",
      },
    },
    ".dataTable-root tbody tr td": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-root-td": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-root-td": "#373a40",
      },
    },
    ".dataTable-root.lastRowBorderBottomVisible tbody tr:last-of-type td": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-root-lastrow-border": "#5c5f66",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-root-lastrow-border": "#373a40",
      },
    },
    ".dataTable-root-tableWithBorder": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-root-tablewith-border": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-root-tablewith-border": "#373a40",
      },
    },
    ".dataTable-root-tableWithColumnBorders th:not(:first-of-type), .dataTable-tableWithColumnBorders td:not(:first-of-type)":
      {
        '[data-raikou-color-scheme="light"] &': {
          "--raikou-datatable-root-table-column-borders": "#dee2e6",
        },
        '[data-raikou-color-scheme="dark"] &': {
          "--raikou-datatable-root-table-column-borders": "#373a40",
        },
      },
    ".dataTable-root-tableWithColumnBordersAndSelectableRecords thead tr + tr th":
      {
        '[data-raikou-color-scheme="light"] &': {
          "--raikou-datatable-root-table-column-borders-and-selectable-records":
            "#dee2e6",
        },
        '[data-raikou-color-scheme="dark"] &': {
          "--raikou-datatable-root-table-column-borders-and-selectable-records":
            "#373a40",
        },
      },
    ".dataTableEmptyState-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-empty-state-root": "#868e96",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-empty-state-root": "#5c5f66",
      },
    },
    ".dataTableFooter-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-footer-root": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-footer-root": "#1a1b1e",
      },
    },
    ".dataTableFooterSelectorPlaceholderCell-root:after": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-footer-selector-placeholdercell-root": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-footer-selector-placeholdercell-root": "#373a40",
      },
    },
    ".dataTableHeader-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-header-root": "#1a1b1e",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-header-root": "#fff",
      },
    },
    ".dataTableHeaderSelectorCell-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-header-selectorcell-border-left": "#dee2e6",
        "--raikou-datatable-header-selectorcell-background":
          "linear-gradient(to right, rgba(var(0,0,0) / 0.05), rgba(var(0,0,0) / 0), linear-gradient(to right, rgba(var(0,0,0), / 0.05), rgba(var(0,0,0) / 0) 30%)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-header-selectorcell-border-left": "#373a40",
        "--raikou-datatable-header-selectorcell-background":
          "linear-gradient(to right, rgba(var(0,0,0) / 0.5), rgba(var(0,0,0) / 0), linear-gradient(to right, rgba(var(0,0,0), / 0.5), rgba(var(0,0,0) / 0) 30%)",
      },
    },
    ".dataTableLoader-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-loader-root": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-loader-root": "#141517",
      },
    },
    ".dataTablePagination-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-pagination-root": "#5c5f66",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-pagination-root": "#1c1c1c",
      },
    },
    ".dataTableRow-selected": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-row-selected-tr": "rgb(37,38,43 / 90%)",
        "--raikou-datatable-row-selected-tbody": "rgb(37,38,43 / 85%)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-row-selected-tr": "rgb(37,38,43 / 60%)",
        "--raikou-datatable-row-selected-tbody": "rgb(37,38,43 / 55%)",
      },
    },
    ".dataTableRow-context-menu": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-row-context-menu-tr": "rgb(37,38,43 / 70%)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-row-context-menu-tbody": "rgb(37,38,43 / 65%)",
      },
    },
    ".dataTableRowMenu-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-rowmenu-root": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-rowmenu-root": "#373a40",
      },
    },
    ".dataTableRowMenuDivider-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-rowmenu-divider-root": "#f1f3f5",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-rowmenu-divider-root": "#adb5bd",
      },
    },
    ".dataTableRowMenuItem-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-rowmenuitem-disabled-color": "#5c5f66",
        "--raikou-datatable-rowmenuitem-disabled-hover": "#ced4da",
        "--raikou-datatable-rowmenuitem-disabled-active": "#ced4da",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-rowmenuitem-disabled-color": "#5c5f66",
        "--raikou-datatable-rowmenuitem-disabled-hover": "#ced4da",
        "--raikou-datatable-rowmenuitem-disabled-active": "#ced4da",
      },
    },
    ".dataTable-sortableColumnHeader": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-sortable-column-header-border": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-sortable-column-header-border": "#25262b",
      },
    },
    ".dataTable-sortableColumnHeaderUnsortedIcon": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-datatable-sortable-column-header-icon-color": "#2c2e33",
        "--raikou-datatable-sortable-column-header-icon-color-hover": "#25262b",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-datatable-sortable-column-header-icon-color": "#dee2e6",
        "--raikou-datatable-sortable-column-header-icon-color-hover": "#e9ecef",
      },
    },
    ".divider-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-divider-color": "#ced4da",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-divider-color": "#373a40",
      },
    },
    ".fieldset-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-fieldset-default-bd": "#dee2e6",
        "--raikou-fieldset-default-bg": "#fff",
        "--raikou-fieldset-filled-bd": "#dee2e6",
        "--raikou-fieldset-filled-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-fieldset-default-bd": "#373a40",
        "--raikou-fieldset-default-bg": "#1a1b1e",
        "--raikou-fieldset-filled-bd": "#373a40",
        "--raikou-fieldset-filled-bg": "#25262b",
      },
    },
    ".inlineInput-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-inlineinput-disabled-label-color": "#adb5bd",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-inlineinput-disabled-label-color": "#5c5f66",
      },
    },
    ".input-wrapper": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-input-disabled-bg": "#f1f3f5",
        "--raikou-input-disabled-color": "#868e96",
        "--raikou-input-default-bd": "#ced4da",
        "--raikou-input-default-bg": "#fff",
        "--raikou-input-filled-bd": "transparent",
        "--raikou-input-filled-bg": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-input-disabled-bg": "#25262b",
        "--raikou-input-disabled-color": "#909296",
        "--raikou-input-default-bd": "#373a40",
        "--raikou-input-default-bg": "#25262b",
        "--raikou-input-filled-bd": "transparent",
        "--raikou-input-filled-bg": "#2c2e33",
      },
    },
    ".kbd-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-kbd-border-color": "#dee2e6",
        "--raikou-kbd-color": "#495057",
        "--raikou-kbd-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-kbd-border-color": "#373a40",
        "--raikou-kbd-color": "#c1c2c5",
        "--raikou-kbd-bg": "#2c2e33",
      },
    },
    ".menu-dropdown": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-menu-divider-color": "#e9ecef",
        "--raikou-menu-divider-item-hover-bg": "#f1f3f5",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-menu-divider-color": "#373a40",
        "--raikou-menu-divider-item-hover-bg": "#2c2e33",
      },
    },
    ".navLink-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-nav-link-bg-hover": "#f8f9fa",
        "--raikou-nav-link-bg-active": "#25262b",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-nav-link-bg-hover": "#f8f9fa",
        "--raikou-nav-link-bg-active": "#25262b",
      },
    },
    ".notification-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-notification-border-color": "#dee2e6",
        "--raikou-notification-bg": "#fff",
        "--raikou-notification-title-color": "#212529",
        "--raikou-notification-title-description-color": "#868e96",
        "--raikou-notification-description-color": "#000",
        "--raikou-notification-close-button-hover-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-notification-border-color": "#373a40",
        "--raikou-notification-bg": "#25262b",
        "--raikou-notification-title-color": "#fff",
        "--raikou-notification-title-description-color": "#909296",
        "--raikou-notification-description-color": "#c1c2c5",
        "--raikou-notification-close-button-hover-bg": "#141517",
      },
    },
    ".numberInput-controls": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-numberinput-control-hover-bg": "#f8f9fa",
        "--raikou-numberinput-control-active-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-numberinput-control-hover-bg": "#373a40",
        "--raikou-numberinput-control-active-bg": "#373a40",
      },
    },
    ".pagination-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-pagination-control-border-color": "#ced4da",
        "--raikou-pagination-control-bg-color": "#fff",
        "--raikou-pagination-control-bg-hover": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-pagination-control-border-color": "#373a40",
        "--raikou-pagination-control-bg-color": "#25262b",
        "--raikou-pagination-control-bg-hover": "#2c2e33",
      },
    },
    ".paper-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-paper-border-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-paper-border-color": "#373a40",
      },
    },
    ".pill-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-pill-color": "#000",
        "--raikou-pill-default-bg": "#f1f3f5",
        "--raikou-pill-default-disabled-bg": "#dee2e6",
        "--raikou-pill-contrast-bg": "#fff",
        "--raikou-pill-contrast-disabled-bg": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-pill-color": "#c1c2c5",
        "--raikou-pill-bg": "#1a1b1e",
      },
    },
    ".popover-dropdown": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-popover-bg": "#fff",
        "--raikou-popover-bd": "#e9ecef",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-popover-bg": "#25262b",
        "--raikou-popover-bd": "#373a40",
      },
    },
    ".progress-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-progress-track-bg": "#e9ecef",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-progress-track-bg": "#373a40",
      },
    },
    ".radio-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-radio-bg": "#fff",
        "--raikou-radio-bd-color": "#ced4da",
        "--raikou-radio-bg-disabled": "#f1f3f5",
        "--raikou-radio-bd-disabled-color": "#e9ecef",
        "--raikou-radio-icon-disabled-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-radio-bg": "#25262b",
        "--raikou-radio-bd-color": "#373a40",
        "--raikou-radio-bg-disabled": "#2c2e33",
        "--raikou-radio-bd-disabled-color": "#373a40",
        "--raikou-radio-icon-disabled-color": "#1a1b1e",
      },
    },
    ".rating-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-rating-star-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-rating-star-color": "#373a40",
      },
    },
    ".ringProgress-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-ringprogress-curve-root-color": "#e9ecef",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-ringprogress-curve-root-color": "#373a40",
      },
    },
    ".scrollArea-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-scrollarea-scrollbar-hover-bg": "#f8f9fa",
        "--raikou-scrollarea-thumb-hover-bg": "rgba(0, 0, 0, 0.5)",
        "--raikou-scrollarea-scrollbar-active-bg": "#f8f9fa",
        "--raikou-scrollarea-thumb-active-bg": "rgba(0, 0, 0, 0.5)",
        "--raikou-scrollarea-thumb-bg": "rgba(0, 0, 0, 0.4)",
        "--raikou-scrollarea-corner-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-scrollarea-scrollbar-hover-bg": "#141517",
        "--raikou-scrollarea-thumb-hover-bg": "rgba(255, 255, 255, 0.5)",
        "--raikou-scrollarea-scrollbar-active-bg": "#f8f9fa",
        "--raikou-scrollarea-thumb-active-bg": "rgba(0, 0, 0, 0.5)",
        "--raikou-scrollarea-thumb-bg": "rgba(255, 255, 255, 0.4)",
        "--raikou-scrollarea-corner-bg": "#141517",
      },
    },
    ".segmentedControl-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-segmentedcontrol-bg": "#f1f3f5",
        "--raikou-segmentedcontrol-indicator-bg": "#fff",
        "--raikou-segmentedcontrol-disabled-color": "#adb5bd",
        "--raikou-segmentedcontrol-active-color": "#000",
        "--raikou-segmentedcontrol-hover-color": "#000",
        "--raikou-segmentedcontrol-color": "#495057",
        "--raikou-segmentedcontrol-separator-color": "#dee2e6",
        "--raikou-segmentedcontrol-ring-outline": "#1971c2",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-segmentedcontrol-bg": "#141517",
        "--raikou-segmentedcontrol-indicator-bg": "#2c2e33",
        "--raikou-segmentedcontrol-disabled-color": "#5c5f66",
        "--raikou-segmentedcontrol-active-color": "#fff",
        "--raikou-segmentedcontrol-hover-color": "#fff",
        "--raikou-segmentedcontrol-color": "#a6a7ab",
        "--raikou-segmentedcontrol-separator-color": "#373a40",
        "--raikou-segmentedcontrol-ring-outline": "#1971c2",
      },
    },
    ".skeleton-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-skeleton-bg": "#5c5f66",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-skeleton-bg": "#373a40",
      },
    },
    ".slider-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-slider-track-bg": "#e9ecef",
        "--raikou-slider-track-disabled-bg": "#ced4da",
        "--raikou-slider-label-bg": "#212529",
        "--raikou-slider-thumb-bd": "var(--slider-color)",
        "--raikou-slider-thumb-bg": "#fff",
        "--raikou-slider-bar-disabled-bg": "#ced4da",
        "--raikou-slider-mark-disabled-bd": "#ced4da",
        "--raikou-slider-mark-bd": "#e9ecef",
        "--raikou-slider-mark-label-color": "#868e96",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-slider-track-bg": "#373a40",
        "--raikou-slider-track-disabled-bg": "#5c5f66",
        "--raikou-slider-label-bg": "#373a40",
        "--raikou-slider-thumb-bd": "#fff",
        "--raikou-slider-thumb-bg": "var(--slider-color)",
        "--raikou-slider-bar-disabled-bg": "#5c5f66",
        "--raikou-slider-mark-disabled-bd": "#5c5f66",
        "--raikou-slider-mark-bd": "#373a40",
        "--raikou-slider-mark-label-color": "#909296",
      },
    },
    ".stepper-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-stepper-separator-bg": "#e9ecef",
        "--raikou-stepper-separator-border-color": "#f1f3f5",
        "--raikou-stepper-step-icon-bg": "#f1f3f5",
        "--raikou-stepper-step-icon-border-color": "#f1f3f5",
        "--raikou-stepper-step-icon-color": "#495057",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-stepper-separator-bg": "#909296",
        "--raikou-stepper-separator-border-color": "#2c2e33",
        "--raikou-stepper-step-icon-bg": "#2c2e33",
        "--raikou-stepper-step-icon-border-color": "#2c2e33",
        "--raikou-stepper-step-icon-color": "#a6a7ab",
      },
    },
    ".switch-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-switch-bg": "#e9ecef",
        "--raikou-switch-bd": "#dee2e6",
        "--raikou-switch-color": "#868e96",
        "--raikou-switch-disabled-color": "#e9ecef",
        "--raikou-switch-thumb-bd": "#dee2e6",
        "--raikou-switch-thumb-bg-disabled": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-switch-bg": "#25262b",
        "--raikou-switch-bd": "#373a40",
        "--raikou-switch-color": "#a6a7ab",
        "--raikou-switch-disabled-color": "#373a40",
        "--raikou-switch-thumb-bd": "#fff",
        "--raikou-switch-thumb-bg-disabled": "#5c5f66",
      },
    },
    ".table-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-table-hover-color": "#f1f3f5",
        "--raikou-table-striped-color": "#f8f9fa",
        "--raikou-table-border-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-table-hover-color": "#2c2e33",
        "--raikou-table-striped-color": "#25262b",
        "--raikou-table-border-color": "#373a40",
      },
    },
    ".tabs-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-tabs-tab-border-color": "#dee2e6",
        "--raikou-tabs-tab-default-hover-color": "#f8f9fa",
        "--raikou-tabs-tab-pills-hover-color": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-tabs-tab-border-color": "#373a40",
        "--raikou-tabs-tab-default-hover-color": "#f8f9fa",
        "--raikou-tabs-tab-pills-hover-color": "#25262b",
      },
    },
    ".timeline-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-timeline-item-border-color": "#dee2e6",
        "--raikou-timeline-bullet-border-color": "#dee2e6",
        "--raikou-timeline-bullet-bg-color": "#dee2e6",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-timeline-item-border-color": "#373a40",
        "--raikou-timeline-bullet-border-color": "#373a40",
        "--raikou-timeline-bullet-bg-color": "#373a40",
      },
    },
    ".tooltip-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-tooltip-bg": "#212529",
        "--raikou-tooltip-color": "#fff",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-tooltip-bg": "#e9ecef",
        "--raikou-tooltip-color": "#000",
      },
    },
    ".tsp-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-tsp-mark-background-color": "#ffec99",
        "--raikou-tsp-mark-color": "inherit",
        "--raikou-tsp-hr-border-color": "#dee2e6",
        "--raikou-tsp-pre-border-color": "#f8f9fa",
        "--raikou-tsp-code-background-color": "#f8f9fa",
        "--raikou-tsp-code-color": "#000",
        "--raikou-tsp-blockquote-background-color": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-tsp-mark-background-color": "#fcc419",
        "--raikou-tsp-mark-color": "#000",
        "--raikou-tsp-hr-border-color": "#5c5f66",
        "--raikou-tsp-hr": "#5c5f66",
        "--raikou-tsp-pre-border-color": "#343a40",
        "--raikou-tsp-code-background-color": "#2c2e33",
        "--raikou-tsp-code-color": "#fff",
        "--raikou-tsp-blockquote-background-color": "#141517",
      },
    },
    // Outside of components
    ".carousel-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-carousel-border": "#dee2e6",
        "--raikou-carousel-control-opacity": "0.85",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-carousel-border": "#373a40",
        "--raikou-carousel-control-opacity": "0.65",
      },
    },
    ".codeHighlight-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--codehighlight-file-color": "#343a40",
        "--codehighlight-file-bd": "#e9ecef",
        "--codehighlight-file-active-bg": "#fff",
        "--codehighlight-file-active-color": "#000",
        "--codehighlight-theme-color": "#495057",
        "--codehighlight-theme-background": "#f8f9fa",
        "--codehighlight-theme-code-comment-color": "#868e96",
        "--codehighlight-theme-code-keyword-color": "#6741d9",
        "--codehighlight-theme-code-tag-color": "#c92a2a",
        "--codehighlight-theme-code-literal-color": "#228be6",
        "--codehighlight-theme-code-string-color": "#1864ab",
        "--codehighlight-theme-code-variable-color": "#5c940d",
        "--codehighlight-theme-code-class-color": "#d9480f",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--codehighlight-file-color": "#c1c2c5",
        "--codehighlight-file-bd": "#373a40",
        "--codehighlight-file-active-bg": "#25262b",
        "--codehighlight-file-active-color": "#fff",
        "--codehighlight-theme-color": "#a6a7ab",
        "--codehighlight-theme-background": "#141517",
        "--codehighlight-theme-code-comment-color": "#5c5f66",
        "--codehighlight-theme-code-keyword-color": "#b197fc",
        "--codehighlight-theme-code-tag-color": "#ffd43b",
        "--codehighlight-theme-code-literal-color": "#4dabf7",
        "--codehighlight-theme-code-string-color": "#40c057",
        "--codehighlight-theme-code-variable-color": "#a5d8ff",
        "--codehighlight-theme-code-class-color": "#ff922b",
      },
    },
    ".dates-calendarHeader": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-calendar-header-control-hover-bg": "#f8f9fa",
        "--raikou-calendar-header-control-active-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-calendar-header-control-hover-bg": "#2c2e33",
        "--raikou-calendar-header-control-active-bg": "#2c2e33",
      },
    },
    ".dates-day": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-calendar-day-hover-bg": "#f8f9fa",
        "--raikou-calendar-day-active-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-calendar-day-hover-bg": "#2c2e33",
        "--raikou-calendar-day-active-bg": "#2c2e33",
      },
    },
    ".dates-pickerControl": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-calendar-picker-control-hover-bg": "#f8f9fa",
        "--raikou-calendar-picker-control-active-bg": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-calendar-picker-control-hover-bg": "#2c2e33",
        "--raikou-calendar-picker-control-active-bg": "#2c2e33",
      },
    },
    ".dropZone-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-dropzone-bg": "#fff",
        "--raikou-dropzone-border-color": "#ced4da",
        "--raikou-dropzone-bg-hover": "#f8f9fa",
        "--raikou-dropzone-bg-active": "#f8f9fa",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-dropzone-bg": "#25262b",
        "--raikou-dropzone-border-color": "#373a40",
        "--raikou-dropzone-bg-hover": "#2c2e33",
        "--raikou-dropzone-bg-active": "#2c2e33",
      },
    },
    ".spotlight-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-spotlight-actions-list-border": "#e9ecef",
        "--raikou-spotlight-action-bg-hover": "#f8f9fa",
        "--raikou-spotlight-action-bg-active": "#f8f9fa",
        "--raikou-spotlight-footer-border": "#e9ecef",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-spotlight-actions-list-border": "#373a40",
        "--raikou-spotlight-action-bg-hover": "#25262b",
        "--raikou-spotlight-action-bg-active": "#25262b",
        "--raikou-spotlight-footer-border": "#373a40",
      },
    },
    // tiptap
    ".rte-root": {
      '[data-raikou-color-scheme="light"] &': {
        "--raikou-rte-root-bd": "#ced4da",
        "--raikou-rte-code-bg": "#f8f9fa",
        "--raikou-rte-code-color": "#212529",
        "--raikou-rte-code-color-comment": "#adb5bd",
        "--raikou-rte-code-color-var": "#f03e3e",
        "--raikou-rte-code-color-number": "#1c7ed6",
        "--raikou-rte-code-color-title": "#d6336c",
        "--raikou-rte-code-color-keyword": "#7048e8",
        "--raikou-rte-control-interactive-bg-hover": "#f8f9fa",
        "--raikou-rte-control-interactive-bg-active": "#f8f9fa",
        "--raikou-rte-control-interactive-bg": "#fff",
        "--raikou-rte-control-interactive-bd": "#ced4da",
        "--raikou-rte-control-active-bg": "#fff",
        "--raikou-rte-control-active-bd": "#ced4da",
        "--raikou-rte-control-toolbar-bd": "#ced4da",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--raikou-rte-root-bd": "#373a40",
        "--raikou-rte-code-bg": "#141517",
        "--raikou-rte-code-color": "#c1c2c5",
        "--raikou-rte-code-color-comment": "#909296",
        "--raikou-rte-code-color-var": "#ff6b6b",
        "--raikou-rte-code-color-number": "#22b8cf",
        "--raikou-rte-code-color-title": "#fcc419",
        "--raikou-rte-code-color-keyword": "#845ef7",
        "--raikou-rte-control-interactive-bg-hover": "#2c2e33",
        "--raikou-rte-control-interactive-bg-active": "#2c2e33",
        "--raikou-rte-control-interactive-bg": "#25262b",
        "--raikou-rte-control-interactive-bd": "#373a40",
        "--raikou-rte-control-active-bg": "#1a1b1e",
        "--raikou-rte-control-active-bd": "#373a40",
        "--raikou-rte-control-toolbar-bd": "#373a40",
      },
    },
  });
};
