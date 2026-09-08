import React from "react";
import { GraduationCap, CalendarDays, Award } from "lucide-react";
import { edu } from "../constants.js";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 md:px-16 font-sans text-foreground"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          EDUCATION
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        <p className="text-foreground/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
          My academic journey and professional training.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {edu.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-border bg-card/60
                       backdrop-blur-sm p-6 overflow-hidden
                       transition-all duration-300
                       hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
          >
            {/* Glow accent */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-40 h-40
                         bg-primary/20 rounded-full blur-3xl opacity-0
                         group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <div className="relative flex items-start gap-4">
              {/* Logo */}
              <div className="shrink-0 w-14 h-14 rounded-xl border border-border bg-background/80 overflow-hidden flex items-center justify-center">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.institution}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <GraduationCap className="w-7 h-7 text-primary" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-semibold text-lg text-foreground leading-tight">
                    {item.institution}
                  </h3>
                  {item.status && (
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
                        item.status === "Ongoing"
                          ? "bg-primary/15 text-primary border border-primary/30"
                          : "bg-foreground/10 text-foreground/70 border border-border"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                {item.degree && (
                  <p className="text-sm md:text-base text-foreground/80 font-medium mt-1">
                    {item.degree}
                  </p>
                )}

                <div className="flex items-center gap-1.5 text-foreground/50 text-xs md:text-sm mt-2">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </div>

                {item.grade && (
                  <div className="flex items-center gap-1.5 text-foreground/60 text-xs md:text-sm mt-1">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>{item.grade}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="relative text-foreground/60 text-sm md:text-base mt-4 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};