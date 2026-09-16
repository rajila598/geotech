import React from "react";
import { CountUp } from "@/components/style-utilities/CountUp";
import { RevealSection } from "@/components/style-utilities/RevealSection";

const Counter = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white text-black font-albert">
        <RevealSection className="px-6 py-32 md:px-16 flex justify-between">
          <div>
            <div className="text-3xl md:text-4xl text-brand-accent">
              <CountUp end={250} />
            </div>
            <p className="mt-3 text-sm uppercase">Projects</p>
          </div>

          <div>
            <div className="text-3xl md:text-4xl text-brand-accent">
              <CountUp end={48} />
            </div>
            <p className="mt-3 text-sm uppercase">Clients</p>
          </div>

          <div>
            <div className="text-3xl md:text-4xl text-brand-accent">
              <CountUp end={12} />
            </div>
            <p className="mt-3 text-sm uppercase">Awards</p>
          </div>

          <div>
            <div className="text-3xl md:text-4xl text-brand-accent">
              <CountUp end={8} />
            </div>
            <p className="mt-3 text-sm uppercase">Years</p>
          </div>
        </RevealSection>
      </div>
    </>
  );
};

export default Counter;
