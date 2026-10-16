import HeroSection from "@/components/Home/HeroSection/HeroSection";
import {
  LuArrowRight,
  LuCalendarDays,
  LuHardHat,
  LuLayers3,
  LuMapPin,
  LuPickaxe,
  LuShieldCheck,
  LuSprout,
  LuUsersRound,
} from "react-icons/lu";

const services = [
  {
    title: "Geotechnical Investigation",
    description:
      "Subsurface investigation, laboratory testing and factual reporting to inform confident decisions.",
    icon: LuPickaxe,
  },
  {
    title: "Design and Assessment",
    description:
      "Geotechnical design and assessment for foundations, earthworks, retaining structures, slopes and more.",
    icon: LuLayers3,
  },
  {
    title: "Construction Phase Support",
    description:
      "Site inspections, testing, verification and practical advice to keep your project on track.",
    icon: LuHardHat,
  },
];

const credentials = [
  { value: "13+ years'", label: "experience", icon: LuCalendarDays },
  {
    value: "CPEng, NER, RPEQ",
    label: "accredited professionals",
    icon: LuShieldCheck,
  },
  { value: "Practical advice", label: "and solutions", icon: LuSprout },
  { value: "Responsive", label: "service", icon: LuUsersRound },
  { value: "Greater Brisbane", label: "and wider Queensland", icon: LuMapPin },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#093254]">
      <HeroSection />
      <section id="services" className="mx-auto w-[80%] py-12 text-center">
        <p className=" font-bold tracking-[0.12em] text-[#007d90]">
          OUR SERVICES
        </p>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Geotechnical Expertise Across the Project Lifecycle
        </h2>
        <p className="mt-1 text-sm text-slate-600 sm:text-base">
          Investigation. Design. Construction Support. Practical solutions for
          real-world challenges.
        </p>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex items-center gap-5 border border-slate-200 bg-[#f8fbfb] p-5 text-left shadow-sm"
            >
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[#007f90] text-4xl text-white">
                <Icon />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-snug text-slate-600">
                  {description}
                </p>
              </div>
              <LuArrowRight className="ml-auto shrink-0 text-xl text-[#093254] transition group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-y border-slate-100 bg-[#f3f8f9] py-9 text-center"
      >
        <div className="mx-auto w-[90%] max-w-6xl">
          <p className="text-[10px] font-bold tracking-[0.24em] text-[#007d90]">
            WHY CHOOSE ACE?
          </p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
            Experience. Expertise. Practical Outcomes.
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
            {credentials.map(({ value, label, icon: Icon }) => (
              <div
                key={value}
                className="flex items-center gap-3 lg:border-r lg:border-slate-200 lg:pr-3 last:border-0"
              >
                <Icon className="shrink-0 text-4xl text-[#008294]" />
                <p className="text-sm leading-tight">
                  <strong className="block text-[#093254]">{value}</strong>
                  <span className="text-slate-600">{label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
