import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
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
      
      {/* <div className="flex flex-wrap mt-4">
        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full md:w-1/3"
        >
          <motion.img 
            src={profile} 
            alt="Amit Kumar Meena" 
            className="rounded-full w-full h-auto object-cover" 
            variants={fadeIn("", "", 0.1, 1)}
          />
        </motion.div>
        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full md:w-2/3 md:ml-4"
        >
          <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I’m Amit Kumar Meena, a dedicated software developer specializing in TypeScript, JavaScript, React, and Node.js. I excel in building efficient, scalable solutions and enjoy collaborating with clients to turn their ideas into reality. Let’s work together to create impactful, user-friendly applications!
          </p>
        </motion.div>
      </div> */}


      { <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m Amit Kumar Meena, a dedicated software developer specializing in TypeScript, JavaScript, React, and Node.js. I excel in building efficient, scalable solutions and enjoy collaborating with clients to turn their ideas into reality. Let’s work together to create impactful, user-friendly applications!
      </motion.p> } 

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
