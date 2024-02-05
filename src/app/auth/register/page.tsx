"use client";
import React, { FormEvent, useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [args, setArgs] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    phone_number: false,
    password: false,
  });

  const handleChange = (val: string): void => {
    console.log(val);
  };

  const handleSignup = (e: FormEvent): void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.replace(`/auth/organization?userId=${123456}`);
      setLoading(false);
    }, 3000);
  };

  return (
    <AuthContainer title="Sign Up">
      <form
        onSubmit={handleSignup}
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
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="">
            Password
          </label>
          <TextInput
            type={showPassword ? "text" : "password"}
            righIcon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            rightIconClick={() => {
              setShowPassword((prev) => !prev);
            }}
            onChange={(val) => {
              handleChange(val);
            }}
            placeholder="Enter Password"
          />
        </div>

        <Button loading={loading} type="submit" block>
          Create Account
        </Button>
        <div className="flex items-center gap-2 text-sm justify-center font-light text-primary">
          Already have an account
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
