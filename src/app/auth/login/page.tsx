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
import { getAllRoles } from "@/redux/api/roleApi";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuthState } from "@/redux/slices/authSlice";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const state = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(6).required().label("Password"),
    }),

    onSubmit: async (values) => {
      const roles = await getAllRoles();

      //Set all roles
      dispatch(setAuthState({ field: "roles", value: roles }));

      console.log("state roles", state.roles);

      return;
      setTimeout(() => {
        router.replace("/dashboard");
        setLoading(false);
      }, 3000);
    },

    validateOnChange: true,
  });

  return (
    <AuthContainer color="bg-primary-200" title="Sign In">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-5 py-2 text-dark-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <TextInput
            name="email"
            type="email"
            inputMode="email"
            placeholder="Enter Email"
            error={formik.errors["email"]}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <TextInput
            id="password"
            type={showPassword ? "text" : "password"}
            righIcon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            rightIconClick={() => {
              setShowPassword((prev) => !prev);
            }}
            placeholder="Enter Password"
            error={formik.errors["password"]}
            onChange={formik.handleChange}
            value={formik.values.password}
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
