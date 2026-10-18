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
  const serviceGroups = [
    {
      number: "01",
      title: "Pavement and Earthworks",
      services: [
        "Pavement investigation and design in accordance with AGPT02-26 and council/TMR specifications.",
        "Subgrade assessment and treatment recommendations.",
        "Material suitability and reuse assessment.",
        "Earthworks advice and specification support.",
        "Proof roll observation and reporting.",
        "Construction phase verification and remediation optioneering.",
      ],
    },
    {
      number: "02",
      title: "Foundations, Retaining Structures and Slopes",
      services: [
        "Shallow and deep foundation assessment.",
        "Bearing capacity and settlement advice.",
        "Pile inspections and piling supervision.",
        "Retaining wall geotechnical parameters and advice.",
        "Slope stability assessment and remediation advice.",
        "Excavation, trench stability and shoring advice.",
      ],
    },
    {
      number: "03",
      title: "Railway Formation",
      services: [
        "Railway track formation investigation, design and verification.",
        "Formation and capping material assessment.",
        "Piling platform and crane pad assessment.",
        "Construction verification and field support.",
      ],
    },
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

            <p className="body-text">
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
              <div
                key={photos.title}
                className="group relative min-h-45 sm:min-h-51.25"
              >
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
        <div className="grid items-center container-padding lg:grid-cols-2 gap-10">
          <div className="overflow-hidden">
            <img
              src="/carousel/construct2.jpg"
              alt="Geotechnical engineer inspecting ground conditions at a construction site"
              loading="lazy"
              className="rounded-xl h-70 w-full object-cover md:h-90"
            />
          </div>
          <div className="">
            <p className="service-title-text">Construction Phase Support</p>
            <h2 className="service-subtitle-text">
              On-Site Support. On-Time Solutions
            </h2>
            <p className="body-text">
              We provide practical, responsive geotechnical support throughout
              construction to verify actual ground conditions, confirm
              compliance with design requirements and address unexpected site
              conditions. Our construction phase services can be tailored to
              project-specific hold points, risks and programme requirements,
              helping clients manage geotechnical risks, maintain clear records
              and keep works progressing safely and efficiently.
            </p>
          </div>
        </div>
      </section>
      {/* Sectors */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-padding">
          <div className="">
            <div className="service-title-text">Sectors</div>
            <div className="service-subtitle-text">
              Supporting a Wide Range of Sectors
            </div>
            <div className="body-text">
              ACE supports projects across roads and highways, rail
              infrastructure, airports and airfields, buildings and
              subdivisions, bulk earthworks, utilities, stormwater and water
              infrastructure, slopes, retaining structures and temporary works.
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {serviceGroups.map((group) => (
              <article
                key={group.number}
                className="border-b border-sky-200 pb-8 last:border-b-0 lg:border-b-0 lg:border-r lg:pr-7 lg:last:border-r-0"
              >
                <span className="text-sm font-bold tracking-widest text-sky-700">{group.number}</span>
                <h3 className="mt-2 text-xl font-bold leading-snug text-[#103858]">{group.title}</h3>
                <div className="mb-6 mt-4 h-1 w-10 bg-sky-700" />
                <ul className="space-y-4">
                  {group.services.map((service)=>(
                    <li
                  key={service}
                  className="flex items-start gap-4 leading-6 text-sm text-slate-600 "
                >
                  <span className="bg-slate-600 p-0.5 mt-0.5 text-white rounded-full text-center">
                    <TiTick />
                  </span>
                  <span>{service}</span>
                </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
