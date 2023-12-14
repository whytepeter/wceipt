"use client";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";

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
      <div className="bg-[#F4D690] text-2xl w-screen h-screen flex flex-col gap-4 p-4 ">
        Home
        <Button
          color="secondary"
          variant="fill"
          onClick={handleClick}
          loading={loading}
        >
          CLICK ME
        </Button>
        <TextInput
          onChange={(val) => {
            setAmount(val);
          }}
          placeholder="Enter Name"
        />
        {amount}
      </div>
    </>
  );
}
