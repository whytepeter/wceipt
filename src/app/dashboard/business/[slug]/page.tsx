"use client";
import AddEditBusiness from "@/components/Business/AddEditBusiness";
import React from "react";

type PropTypes = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Business({ params, searchParams }: PropTypes) {
  const editMode = searchParams?.edit;

  if (params.slug === "new") return <AddEditBusiness />;
  if (editMode) return <AddEditBusiness edit businessId={params.slug} />;

  return <div>View Business By ID </div>;
}
