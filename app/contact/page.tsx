import BreadCrumb from "@/components/Helper/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <BreadCrumb
          title="Contact Us"
          subtitle="contact us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
        <div></div>
      </div>
    </>
  );
};

export default page;
