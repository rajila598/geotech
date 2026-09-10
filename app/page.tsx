"use client";
import { Carousel } from "@/components/Carousel";
import CarouselCard, { CarouselSlide } from "@/components/Carousel/CarouselCard";

export const carouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    image: '/carousel/construct.jpg',
    title: 'Reliable site data &',
    highlightText: 'engineering excellence',
    description: 'Delivering NATA-accredited laboratory testing, soil mechanics, and rigorous environmental compliance for major civil infrastructure.',
    primaryCtaText: 'Request a Quote',
    primaryCtaLink: '#quote',
    secondaryText: 'Need to review our testing capabilities first?',
    secondaryLinkText: 'Explore services',
    secondaryLinkHref: '#services',
  },
  {
    id: 'slide-2',
    image: '/carousel/construct2.jpg',
    title: 'Advanced geotechnical &',
    highlightText: 'subsurface analysis',
    description: 'State-of-the-art borehole logging, foundation recommendations, and seismic assessments managed by certified engineers.',
    primaryCtaText: 'View Lab Capabilities',
    primaryCtaLink: '#lab',
    secondaryText: 'Looking for specific project compliance?',
    secondaryLinkText: 'Check standards',
    secondaryLinkHref: '#standards',
  },
  {
    id: 'slide-3',
    image: '/carousel/construct3.jpg',
    title: 'Environmental auditing &',
    highlightText: 'sustainable solutions',
    description: 'Comprehensive contaminated land assessments and acid sulfate soil testing to ensure total regulatory clearance.',
    primaryCtaText: 'Contact Our Team',
    primaryCtaLink: '#contact',
    secondaryText: 'Want to read our case studies?',
    secondaryLinkText: 'View projects',
    secondaryLinkHref: '#projects',
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
      <div className="container">hello hello</div>
    </>
  );
};

export default Home;
