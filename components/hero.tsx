"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import profilePic from "@/app/images/profile.jpg";


// Constants
const FADE_IN_DELAY = 300;
const PROFILE_IMAGE_ALT = "Profile";
const HEADER_TEXT = "Hello, I’m Eysteinn";
const DESCRIPTION_TEXT = "A web developer passionate about creating sleek, efficient, and beautiful user experiences.";

const Hero = () => {
  // State to control the visibility of the text for the fade-in effect
  const [isVisible, setIsVisible] = useState(false);

  // Hook to trigger the fade-in effect when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, FADE_IN_DELAY); // Delay the fade-in effect slightly for a better experience
    return () => clearTimeout(timer);
  }, []);

  // Memoize the class name for the header text
  const headerClassName = useMemo(() => {
    return `text-4xl font-bold transition-opacity transform duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;
  }, [isVisible]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-10">
        {/* Left side: Profile Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <Image
            src={profilePic}
            alt={PROFILE_IMAGE_ALT}
            width={256}
            height={256}
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Right side: Header text */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
          <h1 className={headerClassName}>
            {HEADER_TEXT}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {DESCRIPTION_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;