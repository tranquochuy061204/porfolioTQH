import React from 'react';
// eslint-disable-next-line no-unused-vars
import { easeOut, motion } from 'framer-motion';
const SmallBox = ({ number, content, duration }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      transition={{ duration: duration, ease: easeOut }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      className="rounded-2xl p-2 
    font-montserrat  w-fit aspect-auto 
     border-2 bg-[url(/images/card_bg.jpg)] 
      flex  flex-col p-5 gap-5"
    >
      <div className="number text-5xl text-center font-bold">{number}</div>
      <div className="content text-2sm self-end">{content}</div>
    </motion.div>
  );
};

export default SmallBox;
