import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Modal from "./Modal";
import useToggle from "../utils/useToggle";
import { useState } from "react";
import davidgogging from "../assets/davidgogging.jpg";
import covertwopoetry from "../assets/covertwopoetry.jpeg";
import dangershappy from "../assets/dangershappy.png";
import IgnazioPRPoetry  from '../assets/IgnazioprPoetry.pdf';




const FeedbackCard = ({
  index,
  testimonial,
  image,
  link
}) => {
  function correctImage(image)  {
    if (image === "../assets/davidgogging.jpg") {
      return davidgogging;
    }
    else if (image === "../assets/covertwopoetry.jpeg") {
      return covertwopoetry;
    }
    else if (image === "../assets/dangershappy.png") {
      return dangershappy;
    }
  }
  
  return (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-10 rounded-2xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
    <div className='relative w-full h-[230px] pb-4'>
          <a href={link ===  "../assets/IgnazioprPoetry.pdf" ? IgnazioPRPoetry : link} download={link === "../assets/IgnazioprPoetry.pdf" ? "IgnazioPerezRomero_Poetry" : ""}>
          <img
            src={correctImage(image)}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          </a>
    </div>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
    </div>
  </motion.div>
  
);};

const Feedbacks = () => {
  
  return (
    <div className={`mt-12 bg-sky-400 rounded-[20px]`}>
      <div
        className={`bg-sky-900 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I'm currently up to...</p>
          <h2 className={styles.sectionHeadText}>Check this out!</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

//TURN THIS ONE INTO CHECK THIS OUT!!!