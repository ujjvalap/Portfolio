import React from "react";
import { LOGO2 } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Tech Stack", to: "/skills" },
    { title: "Contact", to: "/contact" },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/ujjvalap" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/ujjval-pateliya-qwer2005" },
    { icon: <FaInstagram />, href: "https://instagram.com/" },
  ];

  return (
    <footer className="relative mt-24   text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.12),_transparent_25%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">

          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 group">
              <img
                src={LOGO2}
                alt="Ujjval Pateliya logo"
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-bold tracking-wide text-white">
                  Ujjval Pateliya
                </h3>
                <p className="text-sm text-slate-400">
                  Full Stack Developer & Creative Builder
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              I build responsive, modern, and user-focused full-stack web applications
              with React, Tailwind CSS, Node.js, Express, and MongoDB.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">
              Let’s Connect
            </h4>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:bg-purple-400 hover:shadow-purple-500/30"
            >
              Download Resume
              <HiOutlineArrowUpRight className="text-lg" />
            </a>

            <div className="flex items-center gap-4 mt-5">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {year} Ujjval Pateliya. Crafted with React & Tailwind.
          </p>

          <div className="text-sm font-semibold text-purple-400 text-center md:text-right min-h-[24px]">
            <Typewriter
              text={[
                "Thanks for visiting.",
                "Let’s build something amazing.",
                "<LoveToCode />",
              ]}
              loop
              speed={70}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;