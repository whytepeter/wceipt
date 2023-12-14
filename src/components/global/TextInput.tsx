"use client";

import { useState } from "react";

interface InputType {
  type?: "text" | "email" | "password" | "tel" | undefined;
  name?: string;
  value?: string | number;
  id?: string;
  inputMode?:
    | "text"
    | "email"
    | "tel"
    | "numeric"
    | "search"
    | "url"
    | "none"
    | "decimal"
    | undefined;
  placeholder?: string;
  error?: boolean | string;
  hint?: string;
  disabled?: boolean;
  format?: boolean;
  className?: string;
  onChange?: (value: string) => void;
  //   onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default function TextInput(props: InputType) {
  const {
    type = "text",
    inputMode = "text",
    error = false,
    disabled = false,
    placeholder,
    hint,
    format = false,
    value,
    id,
    name,
    className,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const inputStyles = `
        ${disabled && "pointer-events-none opacity-60"}
        ${className}
        h-[48px] bg-white px-3 py-2 rounded-lg border border-dark-100
    `;

  const [fValue, setFValue] = useState<string | undefined>(undefined);

  //Convert value to a formated currency
  const formatValue = (val: string): string => {
    const enteredValue = val;
    const parsedValue = parseFloat(enteredValue.replace(/[^\d.-]/g, ""));
    let stringValue = parsedValue.toLocaleString();

    console.log(stringValue);

    if (!isNaN(parsedValue)) {
      setFValue(`₦${stringValue}`);
    } else {
      setFValue("");
    }

    return stringValue;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let enteredValue = event.target.value;

    if (format) {
      const stringValue = formatValue(enteredValue);
      const parsedValue = parseFloat(stringValue.split(",").join(""));
      onChange && onChange(parsedValue);
    } else {
      onChange && onChange(enteredValue);
      setFValue(enteredValue);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className={inputStyles}>
          <input
            id={id}
            type={type}
            name={name}
            inputMode={inputMode}
            value={fValue}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`h-full  text-base  w-full font-light  caret-primary text-dark-300  leading-2 focus:outline-none block appearance-none`}
            placeholder={placeholder}
          />
        </div>
        {error && <span className="text-xs text-error  my-1">{error} </span>}
        {hint && <span className="text-xs my-1">{hint} </span>}
      </div>
    </>
  );
}