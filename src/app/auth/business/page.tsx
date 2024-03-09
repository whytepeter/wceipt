"use client";
import React, { FormEvent, useState } from "react";
import AuthContainer from "../shared/AuthContainer";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BusinessType } from "@/types/types";
import { createBusiness } from "@/redux/api/businessApi";
import toast from "react-hot-toast";
import SelectInput from "@/components/global/SelectInput";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const businessTypeOptions = [
    {
      label: "Professional Service",
      value: "Professional Service",
    },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      address: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required().label("Business name is required"),
      email: Yup.string().email().required().label("Email is required"),
      phone: Yup.string().min(11).required().label("Phone Number is required"),
      businessType: Yup.string().min(11).required().label("Business type"),
      address: Yup.string().min(11).required().label("Address is required"),
    }),

    onSubmit: async (values) => {
      console.log(values);

      return;
      const userId = searchParams.get("userId");
      if (!userId) return;

      const business: BusinessType = {
        ...values,
        id: "",
        userId,
        createdAt: new Date(),
      };

      try {
        setLoading(true);
        // Create business
        await createBusiness(business);

        //Log user in
        router.replace(`/dashboard`);
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    },

    validateOnChange: true,
  });

  return (
    <AuthContainer title="Setup Business">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-4 py-2 text-dark-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Business Name
          </label>
          <TextInput
            id="name"
            name="name"
            placeholder="eg: John Doe"
            error={formik.errors["name"]}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            Business Email
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
            Business Phone Number
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
          <label htmlFor="phone" className="">
            Business Type
          </label>
          <SelectInput
            id="businessType"
            name="businessType"
            error={formik.errors["businessType"]}
            value={formik.values.businessType}
            onChange={formik.handleChange}
            options={businessTypeOptions}
            placeholder="Business Type"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="">
            Business Phone Number
          </label>
          <TextInput
            id="address"
            name="address"
            error={formik.errors["address"]}
            onChange={formik.handleChange}
            placeholder="Enter address"
            value={formik.values.address}
          />
        </div>

        <Button loading={loading} type="submit" block>
          Continue
        </Button>
      </form>
    </AuthContainer>
  );
}
