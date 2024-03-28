"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Global/Button";
import TextInput from "@/components/Global/TextInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BusinessType } from "@/types/types";
import { createBusiness } from "@/lib/api/businessApi";
import toast from "react-hot-toast";
import SelectInput from "@/components/Global/SelectInput";
import { setDataState } from "@/redux/slices/dataSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { businessServices } from "@/utils/db";

type BusinessPropsType = {
  userId: string;
  business?: BusinessType | null;
  onDone?: () => void;
};

type InitialValueType = {
  name: string;
  email: string;
  phone: string;
  type: string;
  address: string;
};

export default function Business({
  onDone,
  userId,
  business,
}: BusinessPropsType) {
  const [loading, setLoading] = useState(false);

  const state = useAppSelector((state) => state.data);
  const allBusiness = state?.business || [];

  const dispatch = useAppDispatch();

  const businessTypeOptions = businessServices.map((el) => {
    return {
      label: el,
      value: el,
    };
  });

  let initialValues: InitialValueType = {
    name: "",
    email: "",
    phone: "",
    type: "",
    address: "",
  };

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string().required().label("Business name is required"),
      email: Yup.string().email().required().label("Email is required"),
      phone: Yup.string().min(11).required().label("Phone Number is required"),
      type: Yup.string().required().label("Business type"),
      address: Yup.string().required().label("Address is required"),
    }),

    onSubmit: async (values) => {
      if (!userId) return;

      console.log(values);
      return;
      try {
        setLoading(true);

        const business: BusinessType = {
          ...values,
          id: "",
          userId,
          logo: null,
          createdAt: new Date(),
        };

        // Create business
        const businessData = await createBusiness(business);

        //Update bussiness state with new business
        const businessArray = [...allBusiness, businessData];
        console.log("New Business", businessArray);
        dispatch(setDataState({ field: "business", value: businessArray }));

        if (onDone) {
          onDone();
        }

        toast.success("Business added successfully");
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    },

    validateOnChange: true,
  });

  useEffect(() => {
    if (business) {
      //Assign values
      console.log("The Business", business);
      Object.keys(initialValues).forEach((key: string) => {
        (initialValues as any)[key] = (business as any)[key]; // Type assertion
      });
    }
  }, [business]);

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
          search
          autoHeight={false}
          error={formik.errors["type"]}
          value={formik.values.type}
          onChange={formik.handleChange}
          options={businessTypeOptions}
          placeholder="Business Type"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="address">
          Business Address
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
        {business ? "Update" : "Add"} Business
      </Button>
    </form>
  );
}
