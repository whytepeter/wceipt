"use client";

import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { SelectOptionType } from "@/types/types";

interface SelectType {
  id?: string;
  name?: string;
  value: string;
  options: SelectOptionType[] | null;
  autoHeight?: boolean;
  placeholder?: string;
  error?: boolean | string;
  hint?: string;
  disabled?: boolean;
  className?: string;
  styles?: Object;
  leftIcon?: React.ReactNode;
  action?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelect?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default function TextInput(props: SelectType) {
  const [isSelect, setIsSelect] = useState(false);

  const {
    id,
    value,
    name,
    options = [],
    disabled = false,
    autoHeight = true,
    error = false,
    hint,
    placeholder,
    leftIcon,
    action,
    onChange,
    onSelect,
    onFocus,
    onBlur,
    className,
    styles,
  } = props;

  const selectStyles = `
  ${disabled && "pointer-events-none opacity-60"}
  ${className}
  h-[48px]  px-3 py-2 rounded-lg 
  border bg-white border-dark-100 text-dark
  flex gap-2 items-center 
`;

  const getLabel = (val: string): string => {
    const option = options && options.find((el) => el.value == val);
    return option ? option.label : "";
  };

  const handleSelect = (option: SelectOptionType): void => {
    if (onChange) {
      onChange({
        target: { value: option.value, name },
      } as React.ChangeEvent<HTMLSelectElement>);
    }

    if (onSelect) {
      onSelect(option.value);
    }

    setIsSelect(false);
  };

  const toggleIsSelect = (): void => {
    setIsSelect((prev) => !prev);
  };

  const clickOutside = useClickOutside(() => {
    setIsSelect(false);
  });

  return (
    <div>
      <div className="relative z-10">
        <div
          id={id}
          onClick={toggleIsSelect}
          style={styles}
          className={`${selectStyles} h-[48px] flex items-center gap-2`}
          aria-readonly
        >
          {leftIcon && (
            <div className="text-sm  cursor-pointer">{leftIcon}</div>
          )}
          <span
            className={`${
              value ? "" : "text-dark-100"
            } relative text-sm w-full font-light leading-2  pointer-events-none truncate`}
          >
            {value == "" ? placeholder : getLabel(value)}
          </span>

          <span className="text-xl  cursor-pointer">
            <FiChevronRight
              className={`transiton-all duration-200 ${
                isSelect ? "rotate-90" : "rotate-0"
              }`}
            />
          </span>
        </div>

        {isSelect && (
          <ul
            ref={clickOutside}
            className={`
            ${autoHeight ? "h-auto" : "h-44 overflow-y-auto"}
            absolute w-full mt-1 overflow-x-hidden rounded-b-lg shadow-xl bg-white`}
          >
            {options &&
              options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleSelect(option);
                  }}
                  className={`${
                    value == option.value ? " text-primary" : "text-dark"
                  } px-4 py-3 text-sm  hover:bg-[#ebfaf6]  cursor-pointer flex justify-between items-center border-b last:border-none border-outline`}
                >
                  <span> {option.label}</span>
                  <span className="text-xl">
                    {value == option.value && <AiFillCheckCircle />}
                  </span>
                </li>
              ))}

            {action && <div className="p-1 text-sm">{action}</div>}
          </ul>
        )}
      </div>

      <div className="text-xs font-light mt-1 ml-1">
        {error && <span className=" text-error  ">{error} </span>}
        {hint && <span className=" text-dark-200 ">{hint} </span>}
      </div>
    </div>
  );
}
