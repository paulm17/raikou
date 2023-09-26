import React from 'react';

interface InputsGroupFieldsetProps {
    children: React.ReactNode;
    role: "radiogroup" | "group";
}
declare function InputsGroupFieldset({ children, role, }: InputsGroupFieldsetProps): React.JSX.Element;

export { InputsGroupFieldset };
