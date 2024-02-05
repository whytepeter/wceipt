"use client";
import React, { useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [args, setArgs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (val: string): void => {
    console.log(val);
  };

  return (
    <AuthContainer color="bg-secondary" title="Forgot Password">
      <form className="grid grid-cols-1 gap-5 py-2 text-dark-300">
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

        <Button block>Login</Button>
        <div className="flex items-center gap-2 justify-center text-sm font-light text-primary">
          Back to
          <Link
            href="/auth/login"
            className="font-medium text-primary-200  hover:underline underline-offset-2"
          >
            Login
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
}
