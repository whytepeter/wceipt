"use client";

import { ChangeEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { TextInputType } from "@/types/types";

export default function TextInput(props: TextInputType) {
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
    leftIconClick,
    rightIconClick,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const inputStyles = cn(
    disabled ? "pointer-events-none opacity-60" : "",
    "h-[48px] bg-white px-3 py-2 rounded-lg border border-dark-100 flex gap-2 items-center",
    className
  );

  const [fValue, setFValue] = useState<string>("");

  //Convert value to a formated currency
  const formatValue = (val: string): string => {
    const enteredValue = val;

    //Remove all negative value and alphabets
    const parsedValue = parseFloat(enteredValue.replace(/[^0-9.]/g, ""));
    let stringValue = parsedValue.toLocaleString();

    //Return the formatted string
    if (!isNaN(parsedValue)) {
      setFValue(`₦${stringValue}`);
    } else {
      setFValue("");
      return "";
    }

    return stringValue;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let enteredValue = event.target.value;
    if (format) {
      //Get the formatted string and remove the commas
      let stringValue = formatValue(enteredValue);
      stringValue = stringValue.split(",").join("");
      event.target.value = stringValue;
      //handle the onchange
      onChange && onChange(event);
    } else {
      onChange && onChange(event);

      setFValue(enteredValue);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className={inputStyles}>
          {leftIcon && (
            <div
              onClick={leftIconClick}
              className="text-sm text-dark cursor-pointer"
            >
              {leftIcon}
            </div>
          )}
          <input
            id={id}
            type={type}
            name={name}
            inputMode={inputMode}
            value={fValue}
            // onChange={handleInputChange}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`h-full  text-sm  w-full font-light  caret-primary text-dark  leading-2 focus:outline-none block appearance-none`}
            placeholder={placeholder}
          />
          {righIcon && (
            <div
              onClick={rightIconClick}
              className="text-sm text-dark cursor-pointer"
            >
              {righIcon}
            </div>
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
