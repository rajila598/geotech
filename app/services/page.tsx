import BreadCrumb from "@/components/Helper/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <>
      <BreadCrumb 
      title="Our Services" 
      subtitle="Practical Geotechnical Solutions for Every Project"
      breadcrumbs={[
        {
            label: "Home",
            href: "/",
        },
        { label: "Services"}
      ]}
       />

      <div></div>
    </>
  );
};

export default page;
