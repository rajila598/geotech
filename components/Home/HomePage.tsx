import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:px-4 py-16 mx-auto max-w-[1200px] gap-8">
        <div className="flex flex-col gap-8 items-start justify-start">
          <div className="title-text">Core Value Proposition</div>
          <div className="text-gray-500">
            Ground conditions can create significant cost, safety and programme
            risks. ACE delivers clear advice that connects investigation
            findings with practical design and construction outcomes. Our focus
            is straightforward: identify the issue early, explain it clearly and
            provide solutions that can be implemented on site.
          </div>
        </div>
        {/* image content */}
        <div className="w-full min-w-[200px]">
          <Image
            src={"https://picsum.photos/200"}
            alt="demo image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="">
        <div className="title-text">Featured Services</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center md:px-4 py-16 mx-auto max-w-[1200px] gap-8">
          <div className="border rounded-xl border-brand-accent px-8 py-8 lg:px-6 lg:h-88">
            <div className="subtitle-text">Geotechnical Investigation</div>
            <div className="body-text">Site and borehole investigations, in-situ testing, material characterisation and geotechnical reporting.</div>
          </div>
          <div className="border rounded-xl border-brand-accent px-8 py-8 lg:px-4 lg:h-88">
            <div className="subtitle-text">Design and Assessment</div>
            <div className="body-text">Pavements, foundations, slopes, earthworks, railway formations, working platforms and crane pads.</div>
          </div>
          <div className="border rounded-xl border-brand-accent px-8 py-8 lg:px-4 lg:h-88">
            <div className="subtitle-text">Construction Phase Support</div>
            <div className="body-text">Piling Supervision, Proof Roll Testing, Excavation/Slope/Trench Assessment, Crane Pad / Piling Platform Assessment, Foundation Assessment, Ground Improvement, Earthworks / Material assessment.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
