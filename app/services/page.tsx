import BreadCrumb from "@/components/Helper/BreadCrumb";
import React from "react";
import { TiTick } from "react-icons/ti";

const page = () => {
  const investigationServices = [
    "Development application (DA) support, including review and response to geotechnical approval conditions.",
    "Desktop studies and investigation planning.",
    "Shallow and deep borehole investigations.",
    "Test pits, soil and rock logging, sampling and in-situ testing.",
    "Dynamic cone penetrometer testing.",
    "Laboratory testing coordination and interpretation.",
    "Groundwater observations and assessment.",
    "Factual and interpretive geotechnical reporting.",
    "Investigations carried out in accordance with AS 1726:2017.",
  ];

  const projectPhotos = [
    { title: "Roads", image: "/images/roads.jpg" },
    { title: "Railways", image: "/images/railways.jpg" },
    { title: "Earthworks", image: "/images/earthworks.jpg" },
    { title: "Subdivisions", image: "/images/subdivisions.jpg" },
    { title: "Under-boring", image: "/images/under-boring.jpg" },
    { title: "Buildings", image: "/images/buildings.jpg" },
  ];
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
          { label: "Services" },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-padding grid gap-10 lg:grid-cols-2">
          <div>
            <p className="service-title-text">Geotechnical Investigation</p>
            <h2 className="service-subtitle-text">
              Understanding the Ground. Supporting Your Project.
            </h2>

            <p className="mb-7 leading-7 text-slate-600 text-justify">
              We plan and deliver targeted geotechnical investigations to
              establish subsurface conditions and provide reliable inputs for
              project planning and design. Investigation scopes can be tailored
              to the project stage, risk profile, access constraints and
              proposed development.
            </p>

            <ul className="grid grid-x-6 grid-y-4 sm:grid-cols-2">
              {investigationServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-4 text-slate-600 "
                >
                  <span className="bg-slate-600 p-0.5 mt-0.5 text-white rounded-full text-center">
                    <TiTick />
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {projectPhotos.map((photos) => (
              <div key={photos.title} className="group relative min-h-45 sm:min-h-51.25">
                <img
                  src={photos.image}
                  alt={`${photos.title} geotech`}
                  className="absolute inset-0 transition duration-500 group-hover:scale-105 w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Construction Phase Support section */}
      <section className="py-16 md:py-20 bg-[#eef5fa]">
            <div className="grid container-padding lg:grid-cols-2 gap-10">
              <div>
                <img src="/carousel/construct2.jpg" alt="" />
              </div>
              <div className="">

              </div>
            </div>
      </section>
    </>
  );
};

export default page;
