"use client";
import { Carousel } from "@/components/Carousel";
import CarouselCard, {
  CarouselSlide,
} from "@/components/Carousel/CarouselCard";
import Counter from "@/components/Counter/Counter";
import HomePage from "@/components/Home/HomePage";


export const carouselSlides: CarouselSlide[] = [
  {
    id: "slide-1",
    image: "/carousel/construct.jpg",
    title: "Practical Geotechnical Solutions — ",
    highlightText: "From Ground Investigation to Construction Verification",
    description:
      "ACE Geotechnical Services provides responsive, practical and technically robust geotechnical support for civil, transport and building projects across Greater Brisbane and wider Queensland. We help clients understand ground conditions, manage geotechnical risks and make confident decisions from early investigation through design and construction.",
    primaryCtaText: "Request a Quote",
    primaryCtaLink: "#quote",
    secondaryText: "Need to review our testing capabilities first?",
    secondaryLinkText: "Explore Our services",
    secondaryLinkHref: "#services",
  },
  // {
  //   id: "slide-2",
  //   image: "/carousel/construct2.jpg",
  //   title: "Advanced geotechnical &",
  //   highlightText: "subsurface analysis",
  //   description:
  //     "State-of-the-art borehole logging, foundation recommendations, and seismic assessments managed by certified engineers.",
  //   primaryCtaText: "View Lab Capabilities",
  //   primaryCtaLink: "#lab",
  //   secondaryText: "Looking for specific project compliance?",
  //   secondaryLinkText: "Check standards",
  //   secondaryLinkHref: "#standards",
  // },
  // {
  //   id: "slide-3",
  //   image: "/carousel/construct3.jpg",
  //   title: "Environmental auditing &",
  //   highlightText: "sustainable solutions",
  //   description:
  //     "Comprehensive contaminated land assessments and acid sulfate soil testing to ensure total regulatory clearance.",
  //   primaryCtaText: "Contact Our Team",
  //   primaryCtaLink: "#contact",
  //   secondaryText: "Want to read our case studies?",
  //   secondaryLinkText: "View projects",
  //   secondaryLinkHref: "#projects",
  // },
];

const Home = () => {
  return (
    <>
      <Carousel
        showDots={false}
        showArrows={false}
        autoPlay
        autoPlayInterval={5000}
      >
        {carouselSlides.map((slide) => (
          <CarouselCard key={slide.id} slide={slide} />
        ))}
      </Carousel>
      <div className="container">
        {/* why choose us */}
        <HomePage />
        {/* counter */}
        <Counter />
        
      </div>
    </>
  );
};

export default Home;
