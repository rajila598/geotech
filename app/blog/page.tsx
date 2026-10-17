import BreadCrumb from "@/components/Helper/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <>
      <BreadCrumb
        title="Blogs"
        subtitle="Blogs"
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          { label: "Blogs" },
        ]}
      />

      <div></div>
    </>
  );
};

export default page;
