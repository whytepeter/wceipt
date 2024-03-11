"use client";
import React, { useState } from "react";
import Button from "@/components/global/Button";
import TextInput from "@/components/global/TextInput";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BusinessType } from "@/types/types";
import { createBusiness } from "@/libs/api/businessApi";
import toast from "react-hot-toast";
import SelectInput from "@/components/global/SelectInput";
import { setDataState } from "@/redux/slices/dataSlice";
import { useAppDispatch } from "@/hooks";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

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
      type: "",
      address: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required().label("Business name is required"),
      email: Yup.string().email().required().label("Email is required"),
      phone: Yup.string().min(11).required().label("Phone Number is required"),
      type: Yup.string().required().label("Business type"),
      address: Yup.string().required().label("Address is required"),
    }),

    onSubmit: async (values) => {
      const userId = searchParams.get("userId");
      if (!userId) return;

      try {
        setLoading(true);

        const business: BusinessType = {
          ...values,
          id: "",
          userId,
          createdAt: new Date(),
        };

        // Create business
        const businessData = await createBusiness(business);

        //Update bussiness state with new business
        dispatch(setDataState({ field: "business", value: businessData }));
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
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 gap-4 py-2 text-dark-300"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="name">
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
        <label className="text-sm" htmlFor="email">
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
        <label className="text-sm" htmlFor="phone">
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
        <label className="text-sm" htmlFor="type">
          Business Type
        </label>
        <SelectInput
          id="type"
          name="type"
          error={formik.errors["type"]}
          value={formik.values.type}
          onChange={formik.handleChange}
          options={businessTypeOptions}
          placeholder="Business Type"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="address">
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
  );
}
