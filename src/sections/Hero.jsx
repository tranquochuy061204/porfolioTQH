import React from 'react';
// eslint-disable-next-line no-unused-vars
import { animate, motion } from 'framer-motion';
import DottedButton from '../components/DottedButton';

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col" id="hero">
      <div className="flex-center w-full">
        {
          /* { Left: Context } */
          <div className="flex-1 px-10 flex-center flex-col text-center pl-20">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl"
            >
              Trần Quốc Huy
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-3xl"
            >
              Frontend Developer Intern
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5 }}
              className="text-3xl"
            >
              Eager to Learn - Ready to Build.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="shadow-blue-300 "
            >
              <DottedButton
                className="bg-[url(/images/card_bg.jpg)]"
                text={<a href="#about-me">About me</a>}
              ></DottedButton>
            </motion.div>
          </div>
        }

        {
          // Right: Personal Image
          <motion.div
            className="flex-1 p-10 flex justify-center items-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            // Fade in when the element enters the viewport:
            whileInView={{ opacity: 1 }}
            // Animate the component when its layout changes:
            layout
            // Style now supports indepedent transforms:
          >
            <img
              src="/images/personal_pic.jpg"
              alt="personal_picture"
              className="w-3/4 max-w-sm object-cover rounded-3xl shadow-xl shadow-black z-1"
            />

            <div className="absolute z-0">
              <h1>PORTFOLIO</h1>
            </div>
          </motion.div>
        }
      </div>
    </section>
  );
};

export default Hero;
