"use client";
import React, { useState } from "react";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signInUser } from "@/libs/api/authApi";
import { setAuthState } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/hooks";
import useInitAccount from "@/hooks/useInitAccount";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();
  const { initAccount } = useInitAccount();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(6).required().label("Password"),
    }),

    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        setLoading(true);
        const payload = { ...values };
        const userData = await signInUser(payload);

        console.log(userData);
        //Update auth state
        dispatch(setAuthState({ field: "user", value: userData }));
        dispatch(setAuthState({ field: "isLogin", value: true }));

        //Initial the user's account and redirect to dashboard
        await initAccount(userData);

        router.replace("/dashboard");

        console.log("Done");
      } catch (error: any) {
        const message = error.message;
        if (message.includes("auth/invalid-credential")) {
          toast.error("Invalide login details");
        }
      } finally {
        setLoading(false);
      }

      setSubmitting(false);
    },

    validateOnChange: true,
  });

  return (
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
  );
}
