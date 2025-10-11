import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificates } from "../constants";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">My Certificates</h2>
        <p className="text-gray-500 mb-12">
          A showcase of my achievements and professional certifications that highlight my technical journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/40 transition-all duration-300 border border-gray-700 hover:border-teal-400 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow hover:bg-teal-400 transition-all"
                  >
                    View Certificate <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
