"use client";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import SelectInput from "@/components/global/SelectInput";
import { FaRegEyeSlash, FaUser, FaPlus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState("0");

  const [selected, setSelected] = useState("");
  const options = [
    {
      label: "Type 1",
      value: "Type 1",
    },
    {
      label: "Type 2",
      value: "Type 2",
    },
    {
      label: "Type 3",
      value: "Type 3",
    },
  ];

  const handleClick = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="w-full text-2xl flex flex-col gap-4 p-4 md:px-6 ">
        Home
        <Button onClick={handleClick} loading={loading}>
          Click Me
        </Button>
        <TextInput
          type="email"
          inputMode="email"
          error="Email is required"
          leftIcon={<MdEmail />}
          placeholder="Enter Email"
        />
        <TextInput
          type="password"
          righIcon={<FaRegEyeSlash />}
          placeholder="Enter Password"
        />
        <TextInput format hint="Enter the amount" placeholder="Enter Amount" />
        <SelectInput
          value={selected}
          options={options}
          onSelect={(val) => {
            setSelected(val);
          }}
          error="Type is required"
          placeholder="Select Type"
          leftIcon={<FaUser />}
          action={
            <Button
              variant="text"
              block
              className="flex text-sm items-center justify-center gap-2"
            >
              Add More
              <FaPlus className="text-primary" />
            </Button>
          }
        />
      </div>
    </>
  );
}
