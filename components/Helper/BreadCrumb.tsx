import Link from "next/link";
import React from "react";

interface BreadCrumbLink {
  label: string;
  href?: string;
}

interface BreadCrumbProps {
  title: string;
  subtitle: string;
  breadcrumbs?: BreadCrumbLink[];
  backgroundImage?: string;
  //   links: BreadCrumbLink[];
}
const BreadCrumb = ({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage = "/carousel/construct2.jpg",
}: BreadCrumbProps) => {
  return (
    <>
      <section
        className="relative flex min-h-85 bg-cover items-center bg-center md:min-h-[370px] overflow-hidden "
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />
        <div className="relative z-10  w-full container-padding">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-sm"
          >
            {breadcrumbs.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index > 0 && <span className="text-slate-500">/</span>}
                {item.href && index !== breadcrumbs.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-slale-600 transition hover:text-sky-700"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={
                      index === breadcrumbs.length - 1 ? "page" : undefined
                    }
                    className={
                      index === breadcrumbs.length - 1
                        ? "font-semibold text-sky-800"
                        : "text-slate-600"
                    }
                  >
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
            {title}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {subtitle}
          </h1>
          <div className="mt-7 h-1 w-14 rounded-full bg-sky-700" />
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
