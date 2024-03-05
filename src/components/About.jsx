import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { about } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AboutCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  border-2 border-blue-500 p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-teritiary bg-opacity-50 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col 
        transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 ...'
      >
        <img
          src={icon}
          
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Centella is a technology platform that provide end-to-end scientific research solutions to the scientific community. It is founded and lead by experienced & practicing research scientists. The leadership team at Centella has a 60+yrs of cumulative academic and industrial research experiences in the domains of drug discovery, medicinal chemistry, cancer biology, molecular biology, microbiology, biotechnology,and bio informatics. As a strong proponent of science, Centella aims to help the scientific community translate their research ideas and findings into a communication ready format to reach wider audience and create greater impact. We firmly believe in enabling and empowering the global researchers with our offerings and tools. Backed by strong international research collaborative network and supported by large pool of freelance subject matter experts, Centella offers a wide range of services in the space of Scientific communications, Medical Communications and Market Research.

60+
Years of Cumulative Experiences

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {about.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
