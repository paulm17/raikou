import React$1 from 'react';

type GetInputPropsType = "input" | "checkbox";
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
type GetInputProps<Values> = <Field extends LooseKeys<Values>>(path: Field, options?: {
    type?: GetInputPropsType;
    withError?: boolean;
    withFocus?: boolean;
}) => {
    value: any;
    onChange: any;
    checked?: any;
    error?: any;
    onFocus?: any;
    onBlur?: any;
};
type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(path: Field, value: Field extends keyof Values ? Values[Field] : unknown) => void;
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
type ResetDirty<Values> = (values?: Values) => void;
type IsValid<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
type _TransformValues<Values> = (values: Values) => unknown;
interface UseFormInput<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values> {
    initialValues?: Values;
    initialErrors?: FormErrors;
    initialTouched?: FormStatus;
    initialDirty?: FormStatus;
    transformValues?: TransformValues;
    validate?: FormValidateInput<Values>;
    clearInputErrorOnChange?: boolean;
    validateInputOnChange?: boolean | LooseKeys<Values>[];
    validateInputOnBlur?: boolean | LooseKeys<Values>[];
}
interface UseFormReturnType<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values> {
    values: Values;
    errors: FormErrors;
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
}
type UseForm<Values = Record<string, unknown>, TransformValues extends _TransformValues<Values> = (values: Values) => Values> = (input?: UseFormInput<Values, TransformValues>) => UseFormReturnType<Values, TransformValues>;
type TransformedValues<Form extends UseFormReturnType<any>> = Parameters<Parameters<Form["onSubmit"]>[0]>[0];

declare function useForm<Values = Record<string, unknown>, TransformValues extends _TransformValues<Values> = (values: Values) => Values>({ initialValues, initialErrors, initialDirty, initialTouched, clearInputErrorOnChange, validateInputOnChange, validateInputOnBlur, transformValues, validate: rules, }?: UseFormInput<Values, TransformValues>): UseFormReturnType<Values, TransformValues>;

interface FormProviderProps<Form> {
    form: Form;
    children: React$1.ReactNode;
}
declare function createFormContext<Values, TransformValues extends _TransformValues<Values> = (values: Values) => Values>(): [React$1.FC<FormProviderProps<UseFormReturnType<Values, TransformValues>>>, () => UseFormReturnType<Values, TransformValues>, UseForm<Values, TransformValues>];

interface FormProps<Form extends UseFormReturnType<any>> extends React$1.ComponentPropsWithRef<"form"> {
    form: Form;
    onSubmit?: (values: TransformedValues<Form>) => void;
}
type FormComponent = <Form extends UseFormReturnType<any>>(props: FormProps<Form>) => JSX.Element | React$1.ReactNode;
declare const Form: FormComponent;

declare const FORM_INDEX = "__MANTINE_FORM_INDEX__";

declare function isNotEmpty(error?: React$1.ReactNode): (value: unknown) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

declare function matches(regexp: RegExp, error?: React$1.ReactNode): (value: unknown) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

declare function isEmail(error?: React$1.ReactNode): (value: unknown) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

interface HasLengthOptions {
    max?: number;
    min?: number;
}
type HasLengthPayload = HasLengthOptions | number;
declare function hasLength(payload: HasLengthPayload, error?: React$1.ReactNode): (value: unknown) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

interface IsInRangePayload {
    min?: number;
    max?: number;
}
declare function isInRange({ min, max }: IsInRangePayload, error?: React$1.ReactNode): (value: unknown) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

declare function matchesField(field: string, error?: React$1.ReactNode): (value: unknown, values: Record<string, unknown>) => string | number | true | React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>> | Iterable<React$1.ReactNode> | null;

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

export { FORM_INDEX, Form, type FormErrors, type TransformedValues, type UseFormInput, type UseFormReturnType, createFormContext, hasLength, isEmail, isInRange, isNotEmpty, joiResolver, matches, matchesField, superstructResolver, useForm, yupResolver, zodResolver };
