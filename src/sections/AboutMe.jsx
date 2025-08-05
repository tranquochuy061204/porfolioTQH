import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import HoverButton from '../components/HoverButton';
const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-10 text-justify"
    >
      {/* Left: Description */}
      <motion.div
        className="am-description md:pr-10 md:flex-[3] "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-white-100 text-4xl mb-5">About Me</h1>

        <p className="description-text text-white-200 leading-relaxed">
          I’m a passionate and curious developer with a strong interest in building intuitive and visually engaging user
          interfaces. Currently focused on frontend development, I enjoy turning ideas into responsive, interactive web
          experiences using React. Looking ahead, I aim to become a full-stack developer to better understand the entire
          development process and build complete, scalable applications.
        </p>

        <p className="description-text text-white-200 mt-4 leading-relaxed">
          Outside of coding, I love exploring design trends, reading tech blogs, playing instruments, and contributing
          to open source.
        </p>

        <p className="description-text text-white-200 mt-4 leading-relaxed">
          Whether it’s refining my current skills or diving into something completely new, I embrace every opportunity
          to learn and improve.
        </p>

        <div className="contact flex flex-col items-center gap-4 mt-5 font-montserrat">
          {/* Dòng 1: Email & Facebook */}
          <div className="contact-line flex gap-4">
            <button className="rounded-full bg-white text-black px-4 py-2 shadow-md border hover:bg-gray-100 transition items-center flex gap-1">
              <MdEmail /> tranquochuy0612@gmail.com
            </button>
            <HoverButton
              content={
                <a
                  href="https://www.facebook.com/quyt.huyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex gap-1 items-center"
                >
                  <FaFacebook /> Quýt Huyy
                </a>
              }
            />
          </div>

          {/* Dòng 2: Số điện thoại & LinkedIn */}
          <div className="contact-line flex gap-4">
            <button className="rounded-full bg-white text-black px-4 py-2 shadow-md border hover:bg-gray-100 transition">
              📞 +84 374763690
            </button>
            <HoverButton
              className={'hover:bg-blue-900 bg-blue-800'}
              content={
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full  text-white px-4 py-2 shadow-md  transition flex gap-1 items-center"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              }
            />
          </div>
        </div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="am-img md:flex-[2] w-full max-w-xs md:max-w-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/images/personal_pic_2.jpg"
          alt="My Portrait"
          className="rounded-2xl shadow-xl object-cover w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
