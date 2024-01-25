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
  righIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
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
    leftIcon,
    righIcon,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const inputStyles = `
        ${disabled && "pointer-events-none opacity-60"}
        ${className}
        h-[48px] bg-white px-3 py-2 rounded-lg border border-dark-100
        flex gap-2 items-center
    `;

  const [fValue, setFValue] = useState<string | undefined>(undefined);

  //Convert value to a formated currency
  const formatValue = (val: string): string => {
    const enteredValue = val;

    //Remove all negative value and alphabets
    const parsedValue = parseFloat(enteredValue.replace(/[^\d.-]/g, ""));
    let stringValue = parsedValue.toLocaleString();

    //Return the formatted string
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
      //Get the formatted string and remove the commas
      let stringValue = formatValue(enteredValue);
      stringValue = stringValue.split(",").join("");

      //handle the onchange
      onChange && onChange(stringValue);
    } else {
      onChange && onChange(enteredValue);
      setFValue(enteredValue);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className={inputStyles}>
          {leftIcon && (
            <div className="text-sm text-dark cursor-pointer">{leftIcon}</div>
          )}
          <input
            id={id}
            type={type}
            name={name}
            inputMode={inputMode}
            value={fValue}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`h-full  text-sm  w-full font-light  caret-primary text-dark  leading-2 focus:outline-none block appearance-none`}
            placeholder={placeholder}
          />
          {righIcon && (
            <div className="text-sm text-dark cursor-pointer">{righIcon}</div>
          )}
        </div>
        <div className="text-xs font-light mt-1 ml-1">
          {error && <span className=" text-error  ">{error} </span>}
          {hint && <span className=" text-dark-200">{hint} </span>}
        </div>
      </div>
    </>
  );
}
