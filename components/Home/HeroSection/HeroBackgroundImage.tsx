import Image from "next/image";

const HeroBackgroundImage = () => {
  return (
    <>
      <Image
        src="/carousel/construct.jpg"
        alt="Construction work at a geotechnical site"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#061d2d]/95 via-[#082a3b]/76 to-[#082a3b]/20" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-[#071e2e]/95 to-transparent" />
    </>
  );
};
export default HeroBackgroundImage;
