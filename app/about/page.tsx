import BreadCrumb from "@/components/Helper/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <BreadCrumb
          title="About us"
          subtitle="Expertise in the Ground. Confidence in Your Project."
          breadcrumbs={[
            {
              label: "Home",
              href: "/",
            },
            { label: "About Us" },
          ]}
        />
      </div>
    </>
  );
};

export default page;
