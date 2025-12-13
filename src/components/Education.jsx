import React from "react";
import { edu } from "../constants.js";

export const Education = () => {
  return (
    <section id="education" className="py-12 px-4 sm:px-6 md:px-16 font-sans text-foreground">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground">EDUCATION</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line only on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

        {edu.map((item, index) => (
          <div
            key={item.id}
            className={`mb-10 flex flex-col md:flex-row items-center md:items-start ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Empty spacer for alignment on desktop */}
            <div className="hidden md:block w-1/2"></div>

            {/* Card */}
            <div className="relative w-full md:w-1/2 border border-purple-500 rounded-xl p-6 md:p-4 bg-gray-900/50">
              {/* Logo */}
              <div
                className={`absolute top-0 -translate-y-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 ${
                  index % 2 === 0 ? "right-4 md:right-6" : "left-4 md:left-6"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.institution}
                  className="w-full h-full object-cover"
                />
              </div>

               <h3 className="font-semibold text-lg md:text-xl text-foreground mb-1">{item.institution}</h3>
          <p className="text-sm md:text-base text-foreground/70 mb-2">{item.year}</p>
          <p className="text-foreground/60 text-sm md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
