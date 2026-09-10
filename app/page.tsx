"use client";
import { Carousel } from "@/components/Carousel";
import CarouselCard, {
  CarouselSlide,
} from "@/components/Carousel/CarouselCard";

export const carouselSlides: CarouselSlide[] = [
  {
    id: "slide-1",
    image: "/carousel/construct.jpg",
    title: "Reliable site data &",
    highlightText: "engineering excellence",
    description:
      "Delivering NATA-accredited laboratory testing, soil mechanics, and rigorous environmental compliance for major civil infrastructure.",
    primaryCtaText: "Request a Quote",
    primaryCtaLink: "#quote",
    secondaryText: "Need to review our testing capabilities first?",
    secondaryLinkText: "Explore services",
    secondaryLinkHref: "#services",
  },
  {
    id: "slide-2",
    image: "/carousel/construct2.jpg",
    title: "Advanced geotechnical &",
    highlightText: "subsurface analysis",
    description:
      "State-of-the-art borehole logging, foundation recommendations, and seismic assessments managed by certified engineers.",
    primaryCtaText: "View Lab Capabilities",
    primaryCtaLink: "#lab",
    secondaryText: "Looking for specific project compliance?",
    secondaryLinkText: "Check standards",
    secondaryLinkHref: "#standards",
  },
  {
    id: "slide-3",
    image: "/carousel/construct3.jpg",
    title: "Environmental auditing &",
    highlightText: "sustainable solutions",
    description:
      "Comprehensive contaminated land assessments and acid sulfate soil testing to ensure total regulatory clearance.",
    primaryCtaText: "Contact Our Team",
    primaryCtaLink: "#contact",
    secondaryText: "Want to read our case studies?",
    secondaryLinkText: "View projects",
    secondaryLinkHref: "#projects",
  },
];

const Home = () => {
  return (
    <>
      <Carousel showDots={false}>
        {carouselSlides.map((slide) => (
          <CarouselCard key={slide.id} slide={slide} />
        ))}
      </Carousel>
      <div className="container">
        {/* why choose us */}
        <div className="flex flex-col md:flex-row items-center px-8 py-16 mx-auto max-w-[1200px] gap-4">
          <div className="flex flex-col gap-4 items-start justify-start">
            <div className="font-bold text-3xl lg:text-4xl">Why Choose Us?</div>
            <div className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              iste voluptatem tempore natus, cupiditate nam voluptatum fugiat
              maxime ipsum sed error vitae doloremque inventore dolorem rerum
              enim dolore. Sed, nesciunt!
            </div>
            <button className="button">Get Started</button>
          </div>
          <div className="w-full min-w-[300px] rounded-3xl">
            <img
              src="https://picsum.photos/200"
              alt=""
              width={"500px"}
              height={"500px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
