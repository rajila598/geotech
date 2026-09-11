import Image from "next/image";

export interface CarouselSlide {
  id: string;
  image: string;
  title: string; // Plain string or use a rich format if needed
  highlightText: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryText: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
}

interface CarouselCardProps {
  slide: CarouselSlide;
}
const CarouselCard: React.FC<CarouselCardProps> = ({ slide }) => {
  return (
<div className="bg-brand-bg w-full">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-5 sm:px-8 py-10 sm:py-16">

    {/* Left column */}
    <div className="w-full lg:flex-1 font-albert">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.08] mb-5 lg:mb-6">
        {slide.title}{" "}
        <span className="text-brand-accent">
          {slide.highlightText}
        </span>
      </h1>

      <p className="text-base sm:text-lg leading-relaxed text-brand-muted max-w-[440px] mb-6 lg:mb-8">
        {slide.description}
      </p>

      <a
        href={slide.primaryCtaLink}
        className="inline-flex items-center gap-2.5 bg-brand-accent text-white rounded-md px-6 sm:px-7 py-3.5 sm:py-4 text-[15px] font-bold shadow-brand-cta hover:bg-brand-accent-hover transition-colors"
      >
        {slide.primaryCtaText}
        <span className="text-base">&#8594;</span>
      </a>

      <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] text-brand-muted">
        {slide.secondaryText}{" "}
        <a
          href={slide.secondaryLinkHref}
          className="text-brand-accent font-bold no-underline hover:underline"
        >
          {slide.secondaryLinkText}
        </a>
      </p>
    </div>

    {/* Right column */}
    <div className="w-full lg:flex-1 relative flex justify-center">
      <div className="relative z-20 w-full max-w-[560px] rounded-xl overflow-hidden shadow-brand-card">
        <Image
          src={slide.image}
          alt={slide.title}
          width={500}
          height={500}
          className="block w-full h-auto lg:h-95 object-cover"
        />
      </div>
    </div>

  </div>
</div>

  );
};
export default CarouselCard;
