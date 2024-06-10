import * as react from 'react';
import react__default from 'react';

type GetInputPropsType = 'input' | 'checkbox';
type FormMode = 'controlled' | 'uncontrolled';
type FormStatus = Record<string, boolean>;
interface FormFieldValidationResult {
    hasError: boolean;
    error: React.ReactNode;
}
interface FormValidationResult {
    hasErrors: boolean;
    errors: FormErrors;
}
type FormErrors = Record<string, React.ReactNode>;
interface ReorderPayload {
    from: number;
    to: number;
}
type Rule<Value, Values> = (value: Value, values: Values, path: string) => React.ReactNode;
type FormRule<Value, Values> = NonNullable<Value> extends Array<infer ListValue> ? Partial<{
    [Key in keyof ListValue]: ListValue[Key] extends Array<infer NestedListItem> ? FormRulesRecord<NestedListItem, Values> | Rule<ListValue[Key], Values> : FormRulesRecord<ListValue[Key], Values> | Rule<ListValue[Key], Values>;
}> | Rule<Value, Values> : NonNullable<Value> extends Record<string, any> ? FormRulesRecord<Value, Values> | Rule<Value, Values> : Rule<Value, Values>;
type FormRulesRecord<Values, InitValues = Values> = Partial<{
    [Key in keyof Values]: FormRule<Values[Key], InitValues>;
}>;
type FormValidateInput<Values> = FormRulesRecord<Values> | ((values: Values) => FormErrors);
type LooseKeys<Values> = keyof Values | (string & {});
type SetValues<Values> = React.Dispatch<React.SetStateAction<Partial<Values>>>;
type SetInitialValues<Values> = (values: Values) => void;
type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;
type OnSubmit<Values, TransformValues extends _TransformValues<Values>> = (handleSubmit: (values: ReturnType<TransformValues>, event: React.FormEvent<HTMLFormElement> | undefined) => void, handleValidationFailure?: (errors: FormErrors, values: Values, event: React.FormEvent<HTMLFormElement> | undefined) => void) => (event?: React.FormEvent<HTMLFormElement>) => void;
type GetTransformedValues<Values, TransformValues extends _TransformValues<Values>> = (values?: Values) => ReturnType<TransformValues>;
type OnReset = (event: React.FormEvent<HTMLFormElement>) => void;
interface GetInputPropsOptions$1 {
    type?: GetInputPropsType;
    withError?: boolean;
    withFocus?: boolean;
    [key: string]: any;
}
interface GetInputPropsReturnType$1 {
    onChange: any;
    value?: any;
    defaultValue?: any;
    checked?: any;
    error?: any;
    onFocus?: any;
    onBlur?: any;
}
type GetInputProps<Values> = <Field extends LooseKeys<Values>>(path: Field, options?: GetInputPropsOptions$1) => GetInputPropsReturnType$1;
type PathValue<T, P extends LooseKeys<T>> = P extends `${infer K}.${infer Rest}` ? K extends keyof T ? PathValue<T[K], Rest> : unknown : P extends keyof T ? T[P] : unknown;
type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(path: Field, value: PathValue<Values, Field> | ((prevValue: PathValue<Values, Field>) => PathValue<Values, Field>), options?: {
    forceUpdate: boolean;
}) => void;
type ClearFieldError = (path: unknown) => void;
type ClearErrors = () => void;
type Reset = () => void;
type Validate = () => FormValidationResult;
type ValidateField<Values> = <Field extends LooseKeys<Values>>(path: Field) => FormFieldValidationResult;
type SetFieldError<Values> = <Field extends LooseKeys<Values>>(path: Field, error: React.ReactNode) => void;
type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(path: Field, payload: ReorderPayload) => void;
type InsertListItem<Values> = <Field extends LooseKeys<Values>>(path: Field, item: unknown, index?: number) => void;
type RemoveListItem<Values> = <Field extends LooseKeys<Values>>(path: Field, index: number) => void;
type GetFieldStatus<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
type ResetStatus = () => void;
type GetStatus = () => FormStatus;
type ResetDirty<Values> = (values?: Values) => void;
type IsValid<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
type Initialize<Values> = (values: Values) => void;
type _TransformValues<Values> = (values: Values) => unknown;
type FormFieldSubscriber<Values, Field extends LooseKeys<Values>> = (input: {
    previousValue: PathValue<Values, Field>;
    value: PathValue<Values, Field>;
    touched: boolean;
    dirty: boolean;
}) => void;
type Watch<Values> = <Field extends LooseKeys<Values>>(path: Field, subscriber: FormFieldSubscriber<Values, Field>) => void;
type Key<Values> = <Field extends LooseKeys<Values>>(path: Field) => string;
type GetInputNode<Values> = <NodeType extends HTMLElement, Field extends LooseKeys<Values>>(path: Field) => NodeType | null;
interface UseFormInput<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values> {
    name?: string;
    mode?: FormMode;
    initialValues?: Values;
    initialErrors?: FormErrors;
    initialTouched?: FormStatus;
    initialDirty?: FormStatus;
    transformValues?: TransformValues;
    validate?: FormValidateInput<Values>;
    clearInputErrorOnChange?: boolean;
    validateInputOnChange?: boolean | LooseKeys<Values>[];
    validateInputOnBlur?: boolean | LooseKeys<Values>[];
    onValuesChange?: (values: Values, previous: Values) => void;
    enhanceGetInputProps?: (payload: {
        inputProps: GetInputPropsReturnType$1;
        field: LooseKeys<Values>;
        options: GetInputPropsOptions$1;
        form: UseFormReturnType<Values, TransformValues>;
    }) => Record<string, any> | undefined | void;
}
interface UseFormReturnType<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values> {
    values: Values;
    initialized: boolean;
    errors: FormErrors;
    initialize: Initialize<Values>;
    setValues: SetValues<Values>;
    setInitialValues: SetInitialValues<Values>;
    setErrors: SetErrors;
    setFieldValue: SetFieldValue<Values>;
    setFieldError: SetFieldError<Values>;
    clearFieldError: ClearFieldError;
    clearErrors: ClearErrors;
    reset: Reset;
    validate: Validate;
    validateField: ValidateField<Values>;
    reorderListItem: ReorderListItem<Values>;
    removeListItem: RemoveListItem<Values>;
    insertListItem: InsertListItem<Values>;
    getInputProps: GetInputProps<Values>;
    onSubmit: OnSubmit<Values, TransformValues>;
    onReset: OnReset;
    isDirty: GetFieldStatus<Values>;
    isTouched: GetFieldStatus<Values>;
    setTouched: SetFormStatus;
    setDirty: SetFormStatus;
    resetTouched: ResetStatus;
    resetDirty: ResetDirty<Values>;
    isValid: IsValid<Values>;
    getTransformedValues: GetTransformedValues<Values, TransformValues>;
    getValues: () => Values;
    getTouched: GetStatus;
    getDirty: GetStatus;
    watch: Watch<Values>;
    key: Key<Values>;
    getInputNode: GetInputNode<Values>;
}
type UseForm<Values = Record<string, unknown>, TransformValues extends _TransformValues<Values> = (values: Values) => Values> = (input?: UseFormInput<Values, TransformValues>) => UseFormReturnType<Values, TransformValues>;
type TransformedValues<Form extends UseFormReturnType<any>> = Parameters<Parameters<Form['onSubmit']>[0]>[0];

declare function useForm<Values extends Record<string, any> = Record<string, any>, TransformValues extends _TransformValues<Values> = (values: Values) => Values>({ name, mode, initialValues, initialErrors, initialDirty, initialTouched, clearInputErrorOnChange, validateInputOnChange, validateInputOnBlur, onValuesChange, transformValues, enhanceGetInputProps, validate: rules, }?: UseFormInput<Values, TransformValues>): UseFormReturnType<Values, TransformValues>;

interface FormProviderProps<Form> {
    form: Form;
    children: react__default.ReactNode;
}
declare function createFormContext<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values>(): [react__default.FC<FormProviderProps<UseFormReturnType<Values, TransformValues>>>, () => UseFormReturnType<Values, TransformValues>, UseForm<Values, TransformValues>];

declare function createFormActions<FormValues extends Record<string, any> = Record<string, any>>(name: string): {
    setFieldValue: SetFieldValue<FormValues>;
    setValues: SetValues<FormValues>;
    setInitialValues: SetInitialValues<FormValues>;
    setErrors: SetErrors;
    setFieldError: SetFieldError<FormValues>;
    clearFieldError: ClearFieldError;
    clearErrors: ClearErrors;
    reset: Reset;
    validate: () => void;
    validateField: ValidateField<FormValues>;
    reorderListItem: ReorderListItem<FormValues>;
    removeListItem: RemoveListItem<FormValues>;
    insertListItem: InsertListItem<FormValues>;
    setDirty: SetFormStatus;
    setTouched: SetFormStatus;
    resetDirty: ResetDirty<FormValues>;
    resetTouched: ResetStatus;
};

interface FormProps<Form extends UseFormReturnType<any>> extends react__default.ComponentPropsWithRef<"form"> {
    form: Form;
    onSubmit?: (values: TransformedValues<Form>) => void;
}
type FormComponent = <Form extends UseFormReturnType<any>>(props: FormProps<Form>) => JSX.Element | react__default.ReactNode;
declare const Form: FormComponent;

declare const FORM_INDEX = "__MANTINE_FORM_INDEX__";

declare function isNotEmpty(error?: React.ReactNode): (value: unknown) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

declare function matches(regexp: RegExp, error?: React.ReactNode): (value: unknown) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

declare function isEmail(error?: React.ReactNode): (value: unknown) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

interface HasLengthOptions {
    max?: number;
    min?: number;
}
type HasLengthPayload = HasLengthOptions | number;
declare function hasLength(payload: HasLengthPayload, error?: React.ReactNode): (value: unknown) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

interface IsInRangePayload {
    min?: number;
    max?: number;
}
declare function isInRange({ min, max }: IsInRangePayload, error?: React.ReactNode): (value: unknown) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

declare function matchesField(field: string, error?: React.ReactNode): (value: unknown, values: Record<string, unknown>) => string | number | true | react.ReactElement<any, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null;

type UseFieldErrorResolver = (error: unknown) => React.ReactNode;
interface UseFieldInput<T, FieldType extends GetInputPropsType = 'input', Mode extends FormMode = 'controlled'> {
    /** Field mode, controlled by default */
    mode?: Mode;
    /** Initial field value */
    initialValue: T;
    /** Initial touched value */
    initialTouched?: boolean;
    /** Initial field error message */
    initialError?: React.ReactNode;
    /** Called with updated value when the field value changes */
    onValueChange?: (value: T) => void;
    /** Determines whether the field should be validated when value changes, false by default */
    validateOnChange?: boolean;
    /** Determines whether the field should be validated when it loses focus, false by default */
    validateOnBlur?: boolean;
    /** Determines whether the field should clear error message when value changes, true by default */
    clearErrorOnChange?: boolean;
    /** A function to validate field value, can be sync or async */
    validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;
    /** Field type, input by default */
    type?: FieldType;
    /** A function to resolve validation error from the result returned from validate function, should return react node */
    resolveValidationError?: UseFieldErrorResolver;
}
interface GetInputPropsOptions {
    withError?: boolean;
    withFocus?: boolean;
}
interface GetInputPropsSharedReturn {
    error?: React.ReactNode;
    onFocus?: () => void;
    onBlur: () => void;
    onChange: (value: any) => void;
}
type GetInputPropsTypeValue<T, FieldType extends GetInputPropsType, Mode extends FormMode> = FieldType extends 'checkbox' ? Mode extends 'controlled' ? {
    checked: boolean;
} : {
    defaultChecked: boolean;
} : Mode extends 'controlled' ? {
    value: T;
} : {
    defaultValue: T;
};
type GetInputPropsReturnType<T, FieldType extends GetInputPropsType, Mode extends FormMode> = GetInputPropsSharedReturn & GetInputPropsTypeValue<T, FieldType, Mode>;
interface UseFieldReturnType<T, FieldType extends GetInputPropsType = 'input', Mode extends FormMode = 'controlled'> {
    /** Returns props to pass to the input element */
    getInputProps: (options?: GetInputPropsOptions) => GetInputPropsReturnType<T, FieldType, Mode>;
    /** Returns current input value */
    getValue: () => T;
    /** Sets input value to the given value */
    setValue: (value: T) => void;
    /** Resets field value to initial state, sets touched state to false, sets error to null */
    reset: () => void;
    /** Validates current input value when called */
    validate: () => Promise<React.ReactNode | void>;
    /** Set to true when async validate function is called, stays true until the returned promise resolves */
    isValidating: boolean;
    /** Current error message */
    error: React.ReactNode;
    /** Sets error message to the given react node */
    setError: (error: React.ReactNode) => void;
    /** Returns true if the input has been focused at least once */
    isTouched: () => boolean;
    /** Returns true if input value is different from the initial value */
    isDirty: () => boolean;
    /** Resets touched state to false */
    resetTouched: () => void;
    /** key that should be added to the input when mode is uncontrolled */
    key: number;
}
declare function useField<T, Mode extends FormMode = 'controlled', FieldType extends GetInputPropsType = 'input'>({ mode, clearErrorOnChange, initialValue, initialError, initialTouched, onValueChange, validateOnChange, validateOnBlur, validate, resolveValidationError, type, }: UseFieldInput<T, FieldType, Mode>): UseFieldReturnType<T, FieldType, Mode>;

interface ZodError {
    path: (string | number)[];
    message: string;
}
interface ZodParseSuccess {
    success: true;
}
interface ZodParseError {
    success: false;
    error: {
        errors: ZodError[];
    };
}
interface ZodSchema<T extends Record<string, any>> {
    safeParse: (values: T) => ZodParseSuccess | ZodParseError;
}
declare function zodResolver<T extends Record<string, any>>(schema: ZodSchema<T>): (values: T) => FormErrors;

declare function superstructResolver(schema: any): (values: Record<string, any>) => FormErrors;

declare function yupResolver(schema: any): (values: Record<string, any>) => FormErrors;

declare function joiResolver(schema: any, options?: any): (values: Record<string, any>) => FormErrors;

export { FORM_INDEX, Form, type FormErrors, type TransformedValues, type UseFieldInput, type UseFieldReturnType, type UseFormInput, type UseFormReturnType, createFormActions, createFormContext, hasLength, isEmail, isInRange, isNotEmpty, joiResolver, matches, matchesField, superstructResolver, useField, useForm, yupResolver, zodResolver };
