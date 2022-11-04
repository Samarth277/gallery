import React from "react";

const outcomes = [
  "How to build this landing page with Next.js",
  "How to create API endpoint and integrate with ConvertKit API",
  "How to use React Hook Form and TailwindCSS",
];

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
  </span>
);

const Hero = () => {
  return (
    <div className="border border-gray-200 md:flex md:flex-row">
      <div className="bg-gray-100 text-center md:w-1/3">
      <div>  
         <h1 className="main-heading text-center">WORLD CUP OF YOGASANA SPORTS 2022</h1>
         </div>
        <img
          className="object-contain mx-auto"
          alt="Next.js 101"
          src="/hero.png"
        />
        
      </div>
    </div>
  );
};

export default Hero;
