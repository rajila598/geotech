import BreadCrumb from '@/components/Helper/BreadCrumb';
import React from 'react'

const page = () => {
  return (
    <>
      <BreadCrumb 
      title="Our Projects" 
      subtitle="Projects"
      breadcrumbs={[
        {
            label: "Home",
            href: "/",
        },
        { label: "Projects"}
      ]}
       />

      <div></div>
    </>
  );
}

export default page