import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import Modal from "./Modal";

const ServiceCard = ({ index, title, points, onClick }) => (
  <button className='focus:outline-none' onClick={onClick}>
  
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  </button>
);

const About = () => {

  const [selectedService, setSelectedService] = useState(null);

  const handleClick = service => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-sky-200 text-[17px] max-w-3xl leading-[30px]'
      >
        Throughout my life, I've moved around quite a bit... Here are some key eras of my life that taught me key lessons.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}  onClick={() => handleClick(service)} />
        ))}
      </div>
      {selectedService && (
        <Modal onClose={handleClose}>
          <h1 className="font-bold text-[22px]">{selectedService.title}</h1>
          <p>{selectedService.points}</p>
        </Modal>)}
    </div>
  );
};

const background = "bg-gradient-to-tr from-black via-black to-pink-500";

export default SectionWrapper(About, "about", background);


// On CLICK? Have each card open up?