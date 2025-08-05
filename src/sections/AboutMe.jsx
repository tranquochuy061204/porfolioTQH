import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import HoverButton from '../components/HoverButton';

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 py-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Right (mobile first): Image */}
      <motion.div
        className="w-full max-w-xs md:max-w-sm order-1 md:order-2 mx-auto"
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

      {/* Left: Text */}
      <motion.div
        className="md:flex-[3] order-2 md:order-1"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-white-100 text-3xl md:text-4xl font-bold mb-4">About Me</h1>

        <p className="text-white-200 leading-relaxed text-base md:text-md md:text-justify">
          I’m a passionate and curious developer with a strong interest in building intuitive and visually engaging user
          interfaces. Currently focused on frontend development, I enjoy turning ideas into responsive, interactive web
          experiences using React. Looking ahead, I aim to become a full-stack developer to better understand the entire
          development process and build complete, scalable applications.
        </p>

        <p className="text-white-200 mt-4 leading-relaxed text-base md:text-md md:text-justify">
          Outside of coding, I love exploring design trends, reading tech blogs, playing instruments, and contributing
          to open source.
        </p>

        <p className="text-white-200 mt-4 leading-relaxed text-base md:text-md md:text-justify">
          Whether it’s refining my current skills or diving into something completely new, I embrace every opportunity
          to learn and improve.
        </p>

        {/* Contact */}
        <div className="flex flex-col items-start gap-4 mt-6 font-montserrat">
          {/* Row 1: Email + Facebook */}
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white text-black px-4 py-2 shadow-md border hover:bg-gray-100 transition items-center flex gap-2 text-sm md:text-base">
              <MdEmail /> tranquochuy0612@gmail.com
            </button>
            <HoverButton
              content={
                <a
                  href="https://www.facebook.com/quyt.huyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex gap-2 items-center text-sm md:text-base"
                >
                  <FaFacebook /> Quýt Huyy
                </a>
              }
            />
          </div>

          {/* Row 2: Phone + LinkedIn */}
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white text-black px-4 py-2 shadow-md border hover:bg-gray-100 transition text-sm md:text-base flex items-center gap-2">
              📞 +84 374763690
            </button>
            <HoverButton
              className={'hover:bg-blue-900 bg-blue-800'}
              content={
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-white px-4 py-2 shadow-md transition flex gap-2 items-center text-sm md:text-base"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
