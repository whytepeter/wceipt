"use client";
import React, { FormEvent, useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [args, setArgs] = useState({
    fullname: "",
    email: "",
    phone_number: "",
  });

  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    phone_number: false,
  });

  const handleChange = (val: string): void => {
    console.log(val);
  };

  const setupBusiness = (e: FormEvent): void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.replace("/dashboard");
      setLoading(false);
    }, 3000);
  };

  return (
    <AuthContainer title="Setup Business">
      <form
        onSubmit={setupBusiness}
        className="grid grid-cols-1 gap-5 py-2 text-dark-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Full Name
          </label>
          <TextInput
            id="fullName"
            error={errors.fullname}
            onChange={(val) => {
              handleChange(val);
            }}
            placeholder="eg: John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Email
          </label>
          <TextInput
            id="email"
            type="email"
            inputMode="email"
            error={errors.email}
            onChange={(val) => {
              handleChange(val);
            }}
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="">
            Phone Number
          </label>
          <TextInput
            id="phone"
            type="tel"
            inputMode="numeric"
            error={errors.phone_number}
            onChange={(val) => {
              handleChange(val);
            }}
            placeholder="Enter Phone Number"
          />
        </div>

        <Button loading={loading} type="submit" block>
          Continue
        </Button>
      </form>
    </AuthContainer>
  );
}
