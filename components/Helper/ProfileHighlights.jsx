
const highlights = [
  {
    value: "13+",
    label: "Years' Experience",
  },
  {
    value: "CPEng",
    label: "Chartered Professional Engineer",
  },
  {
    value: "NER",
    label: "National Engineering Register",
  },
  {
    value: "RPEQ",
    label: "Registered Professional Engineer of Queensland",
  },
  {
    value: "Multi-sector",
    label: "Civil, transport and building project experience",
  },
];

export default function ProfileHighlights() {
  return (
    <section className="bg-[#082f4c] py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-9">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Experience & Credentials
          </p>

          <h2 className="text-2xl font-bold md:text-3xl">
            Expertise You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col justify-center px-4 ${
                index > 0
                  ? "border-white/20 sm:border-l"
                  : ""
              }`}
            >
              <p className="mb-3 text-2xl font-bold tracking-tight text-white md:text-xl xl:text-2xl">
                {item.value}
              </p>

              <p className="max-w-[220px] text-sm leading-6 text-slate-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
