/* eslint-disable no-unused-vars */
import { easeOut, motion } from 'framer-motion';
import SmallBox from '../components/SmallBox';
import SkillCircle from '../components/SkillCircle';
import { FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';
import { FaGitSquare } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
const Experience = () => {
  return (
    <section id="experience" className=" py-20 px-10 flex gap-3 justify-around">
      <div className="experience">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl text-white-100 mb-3 text-center"
        >
          Through out my journey
        </motion.h1>

        <div className="section-content flex gap-3">
          <SmallBox number={'4'} content={'personal projects'} duration={0.5} />
          <SmallBox number={'0'} content={'year experince'} duration={1} />
          <SmallBox number={'1'} content={'company experience'} duration={1.5} />
        </div>
      </div>

      <div className="skill">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl text-white-100 mb-3 text-center"
        >
          My skills
        </motion.h1>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="skill-list flex gap-3"
        >
          <SkillCircle>
            <FaReact />
          </SkillCircle>
          <SkillCircle>
            <IoLogoJavascript />
          </SkillCircle>
          <SkillCircle>
            <SiMysql />
          </SkillCircle>
          <SkillCircle>
            <BiLogoTailwindCss />
          </SkillCircle>
          <SkillCircle>
            <DiMsqlServer />
          </SkillCircle>
          <SkillCircle>
            <FaGitSquare />
          </SkillCircle>
          <SkillCircle>
            <SiTypescript />
          </SkillCircle>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
