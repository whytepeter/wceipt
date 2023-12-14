"use client";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState("0");

  const handleClick = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className=" m bg-[#F4D690] text-2xl w-screen h-screen flex flex-col gap-4 p-4 ">
        Home
        <Button onClick={handleClick} loading={loading}>
          Click Me
        </Button>
        <TextInput
          type="email"
          inputMode="email"
          error="Email is required"
          leftIcon={<MdEmail />}
          onChange={(val) => {
            setAmount(val);
          }}
          placeholder="Enter Email"
        />
        <TextInput
          type="password"
          righIcon={<FaRegEyeSlash />}
          onChange={(val) => {
            setAmount(val);
          }}
          placeholder="Enter Password"
        />
        <TextInput
          format
          hint="Enter the amount"
          onChange={(val) => {
            setAmount(val);
          }}
          placeholder="Enter Amount"
        />
      </div>
    </>
  );
}
