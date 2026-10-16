import Link from "next/link";
import { LuArrowRight, LuHardHat, LuMapPin, LuSprout } from "react-icons/lu";
import HeroBackgroundImage from "./HeroBackgroundImage";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[565px] overflow-hidden">
      <HeroBackgroundImage />
      <div className="relative mx-auto flex min-h-[565px] w-[80%] flex-col justify-center pb-32 pt-10 text-white">
        <h1 className="max-w-3xl text-4xl leading-[0.98] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Practical Geotechnical
          <br />
          Solutions
        </h1>
        <p className="mt-4 text-xl font-medium sm:text-2xl">
          From Ground Investigation to Construction Verification
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
          Responsive, practical and technically robust geotechnical support for
          infrastructure, development and the built environment across Greater
          Brisbane and Queensland.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#contact" className="button">
            Request a Quote <LuArrowRight className="text-lg" />
          </Link>
          <Link href="#services" className="button-transparent">
            Explore Our Services
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto grid w-[80%] grid-cols-1 gap-4 pb-5 text-white sm:grid-cols-3 sm:gap-8">
        {[
          [LuMapPin, "Local knowledge", "Queensland focus"],
          [LuHardHat, "Practical solutions", "Real-world outcomes"],
          [LuSprout, "A safer, more resilient", "tomorrow"],
        ].map(([Icon, title, label]) => {
          const FeatureIcon = Icon as typeof LuMapPin;
          return (
            <div className="flex items-center gap-3" key={title as string}>
              <FeatureIcon className="shrink-0 text-3xl text-[#9edbe0]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-100">
                {title as string}
                <br />
                {label as string}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default HeroSection;
