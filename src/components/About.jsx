import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { up } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Overview.</h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My name is Ujjwal, and I am currently pursuing a Bachelor’s degree in Computer Science from RGPV University, Bhopal. I completed both my 10th and 12th education from Govt. Excellence School, Chhindwara.

          I am a passionate and dedicated full-stack developer with a strong foundation in modern web technologies, including React.js, Vue.js, Node.js, Express.js, and MongoDB. I also have hands-on experience with tools and frameworks such as Tailwind CSS, Material UI, and WebSockets, enabling me to build scalable, secure, and interactive applications. Through my internships in Web Development, I gained practical exposure to real-world project development, clean architecture, and performance-focused solutions.

          I have worked on several impactful projects, including CodeNest, a college-oriented coding platform; a Smart Task Manager integrated with the Google Calendar API; and an MCQ-based platform featuring automated Word/PDF question extraction. Alongside development, I am proficient in software testing, with experience in writing test cases, debugging, and ensuring application quality using both manual testing practices and automation frameworks.

          I am actively exploring networking and cybersecurity concepts, such as ACLs, firewalls, Zone-Based Firewalls (ZPF), encryption, and cloud security. I follow Agile methodologies, manage tasks using tools like Jira, and focus on delivering well-structured, goal-driven solutions.

          In addition to my development experience, I have solved 450+ DSA problems, participated in competitive programming challenges, and earned certifications in Web Development, C++, and Object-Oriented Programming in C++. I am continuously improving my English communication skills to perform confidently in group discussions and interviews.
          <a
            href="mailto:ujjvalpateliya@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            ujjvalpateliya@gmail.com
          </a>{" "}
          I'm always open to new opportunities and collaborations!{" "}
        </p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={up}
                alt="up"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
