import React from "react";
import TextInput from "./TextInput";
import { TextInputType } from "@/types/types";

type PropType = TextInputType & {
  onSearch: (val: string) => void;
  debounce?: boolean;
};

export default function SearchInput({
  onSearch,
  value,
  id,
  name,
  className,
  debounce,
  placeholder = "Search...",
}: PropType) {
  const handleSearch = (e: any) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div>
      <TextInput
        id={id}
        name={name}
        className={className}
        onChange={handleSearch}
        value={value}
        placeholder={placeholder}
        leftIcon={<i className="pi pi-search text-dark-200"></i>}
      />
    </div>
  );
}
