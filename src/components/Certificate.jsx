import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificates } from "../constants";

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-sky-500 via-indigo-400 to-teal-400 bg-clip-text text-transparent mb-4"
        >
          Certificates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-500 mb-14 text-lg max-w-2xl mx-auto"
        >
          A collection of certifications and accomplishments showcasing my learning journey and technical expertise.
        </motion.p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="group relative bg-white/10 border border-transparent hover:border-sky-400/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-sky-400/40 backdrop-blur-lg transition-all duration-300 flex flex-col justify-between"
              style={{ height: "400px" }}
            >
              {/* Image */}
              <div className="flex justify-center items-center bg-gradient-to-br from-gray-900/10 to-gray-800/10 h-64 overflow-hidden p-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-indigo-400 to-sky-400 hover:from-sky-400 hover:to-teal-400 text-black font-medium py-2 px-4 rounded-lg text-sm transition-all shadow-md text-center"
                >
                  <ExternalLink className="inline-block mr-1" size={16} />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
