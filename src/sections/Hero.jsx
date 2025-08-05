import React from 'react';
// eslint-disable-next-line no-unused-vars
import { animate, motion } from 'framer-motion';
import DottedButton from '../components/DottedButton';

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col py-10 px-5" id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-7xl">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Trần Quốc Huy
          </motion.h1>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-xl md:text-3xl mt-2"
          >
            Frontend Developer Intern
          </motion.h2>
          <motion.h3
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="text-lg md:text-2xl mt-2 md:text-nowrap"
          >
            Eager to Learn - Ready to Build.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6"
          >
            <DottedButton className="bg-[url(/images/card_bg.jpg)]" text={<a href="#about-me">About me</a>} />
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          layout
        >
          <img
            src="/images/personal_pic.jpg"
            alt="personal_picture"
            className="w-3/4 max-w-[250px] object-cover rounded-3xl shadow-xl shadow-black z-10"
          />

          <div className="absolute z-0 text-4xl font-extrabold opacity-10">
            <h1>PORTFOLIO</h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
