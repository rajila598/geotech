import React from "react";

interface BreadCrumbLink {
  _id: string;
  title: string;
  url: string;
}

interface BreadCrumbProps {
  title: string;
//   links: BreadCrumbLink[];
}
const BreadCrumb = ({ title }: BreadCrumbProps) => {
  return (
    <>
      <div className="flex-center h-72 w-full bg-[url('/carousel/construct.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="container flex-center flex-col gap-2">
          <p className="text-primary text-4xl font-bold">{title}</p>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
