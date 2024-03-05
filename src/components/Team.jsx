import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { team } from "../constants";

const FeedbackCard = ({
  index,
  team,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[380px] w-full border-2 border-blue-500 '
  >
    <p className='text-white font-black text-[58px]'></p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{team}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[23px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[17px]'>
            {designation}  {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-20 h-20 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] bg-opacity-0`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] bg-opacity-0`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Our Team.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {team.map((team, index) => (
          <FeedbackCard key={team.name} index={index} {...team} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
