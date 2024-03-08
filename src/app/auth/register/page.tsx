"use client";
import React, { useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createUser } from "@/redux/api/authApi";
import { SignUpUserType } from "@/types/types";
import toast from "react-hot-toast";

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
      const user: SignUpUserType = { ...values };

      try {
        setLoading(true);
        const res = await createUser(user);
        console.log("User Credential", res);

        // Redirect to setup business page
        const userId = res?.user?.uid;
        router.replace(`/auth/organization?userId=${userId}`);
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    },

    validateOnChange: true,
  });

  return (
    <AuthContainer title="Sign Up">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-4 py-2 text-dark-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Full Name
          </label>
          <TextInput
            id="full_name"
            name="full_name"
            placeholder="eg: John Doe"
            error={formik.errors["full_name"]}
            onChange={formik.handleChange}
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
