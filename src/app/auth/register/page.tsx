"use client";
import React, { FormEvent, useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required().label("Full Name"),
      email: Yup.string().email().required().label("Email"),
      phone: Yup.string().min(11).required().label("Phone Number"),
      password: Yup.string().min(6).required().label("Password"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      return;
      setLoading(true);
      setTimeout(() => {
        router.replace(`/auth/organization?userId=${123456}`);
        setLoading(false);
      }, 3000);
    },

    validateOnChange: true,
  });

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

  return (
    <AuthContainer title="Sign Up">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-5 py-2 text-dark-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Full Name
          </label>
          <TextInput
            format
            id="full_name"
            name="full_name"
            error={formik.errors["full_name"]}
            onChange={formik.handleChange}
            placeholder="eg: John Doe"
            value={formik.values.full_name}
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
            error={formik.errors["email"]}
            onChange={formik.handleChange}
            placeholder="Enter Email"
            value={formik.values.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="">
            Phone Number
          </label>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            error={formik.errors["phone"]}
            onChange={formik.handleChange}
            placeholder="Enter Phone Number"
            value={formik.values.phone}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="">
            Password
          </label>
          <TextInput
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            righIcon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            rightIconClick={() => {
              setShowPassword((prev) => !prev);
            }}
            onChange={formik.handleChange}
            placeholder="Enter Password"
            error={formik.errors["password"]}
            value={formik.values.password}
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
