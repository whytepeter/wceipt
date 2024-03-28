import AddEditBusiness from "@/components/Business/AddEditBusiness";
import React from "react";

type PropTypes = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Business({ params, searchParams }: PropTypes) {
  if (params.slug === "new") return <AddEditBusiness />;

  return <div>{params?.slug} Business Page </div>;
}
