"use client";
import React, { FormEvent, useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const handleLogin = (e: FormEvent): void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.replace("/dashboard");
      setLoading(false);
    }, 3000);
  };

  return (
    <AuthContainer color="bg-primary-200" title="Sign In">
      <form
        onSubmit={handleLogin}
        className="grid grid-cols-1 gap-5 py-2 text-dark-300"
      >
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
        <div>
          <Link
            href="/auth/password"
            className="text-primary-200 text-sm hover:underline underline-offset-2"
          >
            Forgot password
          </Link>
        </div>
        <Button loading={loading} type="submit" block>
          Login
        </Button>
        <div className="flex items-center gap-2 text-sm justify-center font-light text-primary">
          New to <strong>Wceipt</strong>
          <Link
            href="/auth/register"
            className="font-medium text-primary-200 hover:underline underline-offset-2"
          >
            Create Account
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
}
