import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, RaikouColor, Factory, ElementProps, RaikouRadius } from '@raikou/core';
import * as React from 'react';
import React__default from 'react';
import { FileWithPath, FileRejection, Accept, DropEvent, FileError } from 'react-dropzone';
export { FileRejection, FileWithPath } from 'react-dropzone';

interface PortalProps extends React__default.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React__default.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type RaikouLoaderComponent = React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<any> & React__default.RefAttributes<any>>;
type RaikouLoadersRecord = Partial<Record<"bars" | "dots" | "oval" | "progress" | (string & {}), RaikouLoaderComponent>>;
type RaikouLoader = keyof RaikouLoadersRecord;

type LoaderStylesNames = "root";
type LoaderCssVariables = {
    root: "--loader-size" | "--loader-color";
};
interface LoaderProps extends BoxProps, StylesApiProps<LoaderFactory>, Omit<React__default.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
    /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: RaikouColor;
    /** Loader type, key of `loaders` prop, default value is `'oval'` */
    type?: RaikouLoader;
    /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
    loaders?: RaikouLoadersRecord;
}
type LoaderFactory = Factory<{
    props: LoaderProps;
    ref: HTMLSpanElement;
    stylesNames: LoaderStylesNames;
    vars: LoaderCssVariables;
    staticComponents: {
        defaultLoaders: typeof defaultLoaders;
    };
}>;
declare const defaultLoaders: RaikouLoadersRecord;

interface DropzoneStatusProps {
    children: React__default.ReactNode;
}
type DropzoneStatusComponent = React__default.FC<DropzoneStatusProps>;
declare const DropzoneAccept: DropzoneStatusComponent;
declare const DropzoneReject: DropzoneStatusComponent;
declare const DropzoneIdle: DropzoneStatusComponent;
type DropzoneAcceptProps = DropzoneStatusProps;
type DropzoneRejectProps = DropzoneStatusProps;
type DropzoneIdleProps = DropzoneStatusProps;

type DropzoneStylesNames = "root" | "inner" | "fullScreen";
type DropzoneVariant = "filled" | "light";
type DropzoneCssVariables = {
    root: "--dropzone-radius" | "--dropzone-accept-color" | "--dropzone-accept-bg" | "--dropzone-reject-color" | "--dropzone-reject-bg";
};
interface DropzoneProps extends BoxProps, StylesApiProps<DropzoneFactory>, ElementProps<"div", "onDrop"> {
    /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Accept`, `theme.primaryColor` by default */
    acceptColor?: RaikouColor;
    /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Reject`, `'red'` by default */
    rejectColor?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Determines whether files capturing should be disabled, `false` by default */
    disabled?: boolean;
    /** Called when any files are dropped to the dropzone */
    onDropAny?: (files: FileWithPath[], fileRejections: FileRejection[]) => void;
    /** Called when valid files are dropped to the dropzone */
    onDrop: (files: FileWithPath[]) => void;
    /** Called when dropped files do not meet file restrictions */
    onReject?: (fileRejections: FileRejection[]) => void;
    /** Determines whether a loading overlay should be displayed over the dropzone, `false` by default */
    loading?: boolean;
    /** Mime types of the files that dropzone can accepts. By default, dropzone accepts all file types. */
    accept?: Accept | string[];
    /** A ref function which when called opens the file system file picker */
    openRef?: React__default.ForwardedRef<() => void | undefined>;
    /** Determines whether multiple files can be dropped to the dropzone or selected from file system picker, `true` by default */
    multiple?: boolean;
    /** Maximum file size in bytes */
    maxSize?: number;
    /** Name of the form control. Submitted with the form as part of a name/value pair. */
    name?: string;
    /** Maximum number of files that can be picked at once */
    maxFiles?: number;
    /** Set to autofocus the root element */
    autoFocus?: boolean;
    /** If `false`, disables click to open the native file selection dialog */
    activateOnClick?: boolean;
    /** If `false`, disables drag 'n' drop */
    activateOnDrag?: boolean;
    /** If `false`, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. */
    activateOnKeyboard?: boolean;
    /** If `false`, stops drag event propagation to parents */
    dragEventsBubbling?: boolean;
    /** Called when the `dragenter` event occurs */
    onDragEnter?: (event: React__default.DragEvent<HTMLElement>) => void;
    /** Called when the `dragleave` event occurs */
    onDragLeave?: (event: React__default.DragEvent<HTMLElement>) => void;
    /** Called when the `dragover` event occurs */
    onDragOver?: (event: React__default.DragEvent<HTMLElement>) => void;
    /** Called when user closes the file selection dialog with no selection */
    onFileDialogCancel?: () => void;
    /** Called when user opens the file selection dialog */
    onFileDialogOpen?: () => void;
    /** If `false`, allow dropped items to take over the current browser window */
    preventDropOnDocument?: boolean;
    /** Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true */
    useFsAccessApi?: boolean;
    /** Use this to provide a custom file aggregator */
    getFilesFromEvent?: (event: DropEvent) => Promise<Array<File | DataTransferItem>>;
    /** Custom validation function. It must return null if there's no errors. */
    validator?: <T extends File>(file: T) => FileError | FileError[] | null;
    /** Determines whether pointer events should be enabled on the inner element, `false` by default */
    enablePointerEvents?: boolean;
    /** Props passed down to the Loader component */
    loaderProps?: LoaderProps;
}
type DropzoneFactory = Factory<{
    props: DropzoneProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneStylesNames;
    vars: DropzoneCssVariables;
    staticComponents: {
        Accept: typeof DropzoneAccept;
        Idle: typeof DropzoneIdle;
        Reject: typeof DropzoneReject;
        FullScreen: DropzoneFullScreenType;
    };
}>;

type DropzoneFullScreenStylesNames = DropzoneStylesNames | "fullScreen";
interface DropzoneFullScreenProps extends BoxProps, Omit<DropzoneProps, "styles" | "classNames" | "vars" | "variant">, StylesApiProps<DropzoneFullScreenFactory>, ElementProps<"div", "onDragLeave" | "onDragOver" | "onDrop" | "onDragEnter"> {
    /** Determines whether user can drop files to browser window, true by default */
    active?: boolean;
    /** z-index value, 9999 by default */
    zIndex?: React__default.CSSProperties["zIndex"];
    /** Determines whether component should be rendered within Portal, true by default */
    withinPortal?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: Omit<PortalProps, "children" | "withinPortal">;
}
type DropzoneFullScreenFactory = Factory<{
    props: DropzoneFullScreenProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneFullScreenStylesNames;
    variant: DropzoneVariant;
}>;
declare const DropzoneFullScreen: _raikou_core.RaikouComponent<{
    props: DropzoneFullScreenProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneFullScreenStylesNames;
    variant: DropzoneVariant;
}>;
type DropzoneFullScreenType = typeof DropzoneFullScreen;

declare const MIME_TYPES: {
    readonly png: "image/png";
    readonly gif: "image/gif";
    readonly jpeg: "image/jpeg";
    readonly svg: "image/svg+xml";
    readonly webp: "image/webp";
    readonly avif: "image/avif";
    readonly mp4: "video/mp4";
    readonly zip: "application/zip";
    readonly csv: "text/csv";
    readonly pdf: "application/pdf";
    readonly doc: "application/msword";
    readonly docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    readonly xls: "application/vnd.ms-excel";
    readonly xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    readonly ppt: "application/vnd.ms-powerpoint";
    readonly pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    readonly exe: "application/vnd.microsoft.portable-executable";
};
declare const IMAGE_MIME_TYPE: ("image/png" | "image/gif" | "image/jpeg" | "image/svg+xml" | "image/webp" | "image/avif")[];
declare const PDF_MIME_TYPE: "application/pdf"[];
declare const MS_WORD_MIME_TYPE: ("application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document")[];
declare const MS_EXCEL_MIME_TYPE: ("application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")[];
declare const MS_POWERPOINT_MIME_TYPE: ("application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation")[];
declare const EXE_MIME_TYPE: "application/vnd.microsoft.portable-executable"[];

declare const Dropzone: _raikou_core.RaikouComponent<{
    props: DropzoneProps;
    ref: HTMLDivElement;
    stylesNames: DropzoneStylesNames;
    vars: DropzoneCssVariables;
    staticComponents: {
        Accept: React.FunctionComponent<DropzoneStatusProps>;
        Idle: React.FunctionComponent<DropzoneStatusProps>;
        Reject: React.FunctionComponent<DropzoneStatusProps>;
        FullScreen: _raikou_core.RaikouComponent<{
            props: DropzoneFullScreenProps;
            ref: HTMLDivElement;
            stylesNames: DropzoneFullScreenStylesNames;
            variant: DropzoneVariant;
        }>;
    };
}>;

export { Dropzone, DropzoneAccept, DropzoneAcceptProps, DropzoneCssVariables, DropzoneFactory, DropzoneFullScreen, DropzoneFullScreenFactory, DropzoneFullScreenProps, DropzoneFullScreenStylesNames, DropzoneIdle, DropzoneIdleProps, DropzoneProps, DropzoneReject, DropzoneRejectProps, DropzoneStylesNames, DropzoneVariant, EXE_MIME_TYPE, IMAGE_MIME_TYPE, MIME_TYPES, MS_EXCEL_MIME_TYPE, MS_POWERPOINT_MIME_TYPE, MS_WORD_MIME_TYPE, PDF_MIME_TYPE };
