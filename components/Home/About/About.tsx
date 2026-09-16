import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:px-4 py-16 mx-auto max-w-[1200px] gap-8">
        <div className="flex flex-col gap-8 items-start justify-start">
          <div className="font-bold text-3xl lg:text-4xl">Why Choose Us?</div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            iste voluptatem tempore natus, cupiditate nam voluptatum fugiat
            maxime ipsum sed error vitae doloremque inventore dolorem rerum enim
            dolore. Sed, nesciunt!
          </div>
          <button type="button" className="button ">Get Started</button>
        </div>
        {/* image content */}
        <div className="w-full min-w-[200px]">
          <Image
            src={"https://picsum.photos/200"}
            alt="demo image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>

      
    </>
  );
};

export default About;
