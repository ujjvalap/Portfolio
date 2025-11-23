import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion"; // keep motion utils only
import { educations } from "../constants";

const FeedbackCard = ({ index, branch, marks, name, degree, year, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.4, 0.75)}
    className="group relative bg-white/10 backdrop-blur-md border border-white/20 
               hover:border-indigo-400 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]
               transition-all duration-500 p-6 rounded-2xl w-full sm:w-[300px]
               flex flex-col items-center cursor-pointer"
  >
    {/* Gradient Glow on Hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                    from-indigo-500/20 to-purple-500/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Profile Image */}
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover border-4 border-white 
                 shadow-md relative z-10 group-hover:scale-110 transition-transform duration-500"
    />

    {/* Name + Year */}
    <div className="text-center mt-4 relative z-10">
      <h3 className="text-white text-xl font-semibold group-hover:text-indigo-400 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-sm text-gray-400">{year}</p>
    </div>

    {/* Decorative Quote */}
    <p className="text-white text-4xl font-black mt-2 group-hover:scale-110 transition-transform duration-300">
      "
    </p>

    {/* Education Details */}
    <div className="text-center mt-3 space-y-2 relative z-10">
      <p className="text-white text-base font-medium">{degree}</p>
      <p className="text-sm text-indigo-300 font-semibold">{branch}</p>
      <p className="text-sm text-emerald-400 font-semibold">{marks}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="w-full flex flex-col items-center py-16">
      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-indigo-400 uppercase tracking-wide text-sm">
          Education Details
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">Education</h2>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
