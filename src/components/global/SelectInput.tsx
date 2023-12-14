"use client";

import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import useClickOutside from "@/hooks/useClickOutside";

interface OptionType {
  label: string;
  value: string;
}

interface SelectType {
  value: string;
  options: OptionType[];
  id?: string;
  autoHeight?: boolean;
  placeholder?: string;
  error?: boolean | string;
  hint?: string;
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  onSelect?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export default function TextInput(props: SelectType) {
  const [isSelect, setIsSelect] = useState(false);

  const {
    id,
    value,
    options = [],
    disabled = false,
    autoHeight = true,
    error = false,
    placeholder,
    leftIcon,
    onSelect,
    onFocus,
    onBlur,
    className,
  } = props;

  const selectStyles = `
  ${disabled && "pointer-events-none opacity-60"}
  ${className}
  h-[48px] bg-white px-3 py-2 rounded-lg border border-dark-100
  flex gap-2 items-center
`;

  const getLabel = (val: string): string => {
    if (val) {
      const option = options.find((el) => el.value == val);
      return option ? option.label : "";
    }
  };

  const handleSelect = (option: OptionType): void => {
    if (!onSelect) return;
    onSelect(option.value);
    setIsSelect(false);
  };

  const toggleIsSelect = (): void => {
    setIsSelect((prev) => !prev);
  };

  const clickOutside = useClickOutside(() => {
    setIsSelect(false);
  });

  return (
    <>
      <div className="relative z-10">
        <div
          onClick={toggleIsSelect}
          style={{ height: "48px" }}
          className={selectStyles}
          aria-readonly
        >
          <span
            onClick={toggleIsSelect}
            className={`${
              value ? "text-dark-500" : "text-dark-300"
            } relative w-11/12  pointer-events-none`}
          >
            {value == "" ? placeholder : getLabel(value)}
          </span>

          <span onClick={toggleIsSelect} className=" text-xl text-dark-400">
            {isSelect ? <FiChevronRight /> : <FiChevronDown />}
          </span>
        </div>

        {isSelect && (
          <ul
            ref={clickOutside}
            className={`${
              autoHeight ? "h-auto" : "h-44 overflow-y-auto"
            } w-full mt-2 overflow-x-hidden rounded-xl shadow-xl bg-white`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  handleSelect(option);
                }}
                className={`${
                  value == option.value ? " text-success" : "text-dark-500"
                } px-4 py-3 hover:bg-[#ebfaf6] cursor-pointer   flex justify-between items-center border-b last:border-none border-dark-50`}
              >
                <span> {option.label}</span>
                <span className="text-xl">
                  {value == option.value && <AiFillCheckCircle />}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="text-xs font-light text-error mt-1 mb-2">{error}</div>
    </>
  );
}
