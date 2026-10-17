import BreadCrumb from "@/components/Helper/BreadCrumb";
import ProfileHighlights from "@/components/Helper/ProfileHighlights";
import React from "react";

const page = () => {
  const approachItems = [
    {
      number: "01",
      title: "Collaborative",
      description:
        "We work closely with clients, designers and contractors throughout the project.",
    },
    {
      number: "02",
      title: "Risk Focused",
      description:
        "We identify and manage ground-related risks early to support informed decisions.",
    },
    {
      number: "03",
      title: "Practical Solutions",
      description:
        "Our recommendations consider safety, constructability, programme and cost.",
    },
    {
      number: "04",
      title: "Technical Excellence",
      description:
        "We combine technical rigour with a practical understanding of how projects are designed and built.",
    },
  ];
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
        {/* Who We Are */}
        <section className="py-16 md:py-20">
          <div className="grid container-padding items-center md:grid-cols-2 gap-10 lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="title-text">Who We Are</div>
              <p className="body-text">
                ACE Geotechnical Services is a specialist consultancy providing
                geotechnical investigation, assessment and construction phase
                support across Queensland.
              </p>
              <p className="body-text">
                The business was established to offer clients direct access to
                experienced engineering advice without unnecessary complexity.
              </p>
            </div>
            <div className="relative">
              <div className="">
                <img
                  src="/carousel/construct3.jpg"
                  alt="Geotechnical soil core samples collected during a ground investigation"
                  className="rounded-2xl shadow-lg object-cover h-75 md:h-95"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUr Approach */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="grid container-padding items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="title-text">Our Approach</div>
              <p className="body-text text-justify">
                Our approach combines technical rigour with practical
                understanding of how projects are designed and built. We work
                collaboratively with clients, designers and contractors to
                identify ground-related risks, define proportionate
                investigation programmes and provide recommendations that
                consider safety, constructability, programme and cost.
              </p>
            </div>
            <div className="grid gap-7 sm:grid-cols-2 items-center">
              {approachItems.map((item) => (
                <article
                  key={item.number}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">
                    {item.number}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ProfileHighlights />
      </div>
    </>
  );
};

export default page;
