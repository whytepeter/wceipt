import React, { useEffect, useState } from "react";
import SelectInput from "@/components/global/SelectInput";
import { SelectOptionType, OrganizationType } from "@/interfaces/types";

export default function ActiveOrganization() {
  const [activeOrgId, setActiveOrgId] = useState("");
  const [orgOptions, setOrgOptions] = useState<SelectOptionType[] | null>(null);

  //This function is supposed to get all user's organizations, format {label:name, value:id }
  //them and set the active organization
  const initOrganizations = () => {
    setOrgOptions([
      {
        label: "Whyte Creatives",
        value: "id-1",
      },
      {
        label: "Grofts Store",
        value: "id-2",
      },
      {
        label: "Gofer Inc",
        value: "id-3",
      },
    ]);

    //set the active organization instead of the first one on the list
    orgOptions && setActiveOrgId(orgOptions[0].value);
  };

  useEffect(() => {
    initOrganizations();
  }, []);

  const setActiveOrganizationHandler = (val: string): void => {
    //Do some actions here
    setActiveOrgId(val);
  };

  return (
    <div className="hidden md:block w-full">
      <SelectInput
        onSelect={setActiveOrganizationHandler}
        value={activeOrgId}
        options={orgOptions}
        styles={{
          backgroundColor: "transparent",
          borderColor: "#F4D690",
          color: "#F4D690",
        }}
      />
    </div>
  );
}
