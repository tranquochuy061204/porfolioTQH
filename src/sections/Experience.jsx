/* eslint-disable no-unused-vars */
import { easeOut, motion } from 'framer-motion';
import SmallBox from '../components/SmallBox';
import SkillCircle from '../components/SkillCircle';
import { FaReact, FaGitSquare } from 'react-icons/fa';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-12 flex flex-col md:flex-row gap-12 justify-between items-center max-w-7xl mx-auto"
    >
      {/* Experience Summary */}
      <div className="w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-3xl text-white-100 mb-6 text-center md:text-left"
        >
          Throughout my journey
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
          <SmallBox number={'4'} content={'personal projects'} duration={0.5} />
          <SmallBox number={'0'} content={'year experience'} duration={1} />
          <SmallBox number={'1'} content={'company experience'} duration={1.5} />
        </div>
      </div>

      {/* Skills */}
      <div className="w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-3xl text-white-100 mb-6 text-center md:text-left"
        >
          My skills
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <SkillCircle>
            <FaReact />
          </SkillCircle>
          <SkillCircle>
            <IoLogoJavascript />
          </SkillCircle>
          <SkillCircle>
            <SiTypescript />
          </SkillCircle>
          <SkillCircle>
            <BiLogoTailwindCss />
          </SkillCircle>
          <SkillCircle>
            <SiMysql />
          </SkillCircle>
          <SkillCircle>
            <DiMsqlServer />
          </SkillCircle>
          <SkillCircle>
            <FaGitSquare />
          </SkillCircle>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
