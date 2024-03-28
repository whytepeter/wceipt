"use client";

import { useMemo } from "react";
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

  const computeValue = useMemo(() => {
    if (!format) return value;

    //Remove all negative value and alphabets
    let strValue = value + "";
    const parsedValue = parseFloat(strValue.replace(/[^0-9.]/g, ""));
    strValue = parsedValue.toLocaleString();

    return !isNaN(parsedValue) ? `₦${strValue}` : "";
  }, [value]);

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
            value={computeValue}
            onChange={onChange}
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
