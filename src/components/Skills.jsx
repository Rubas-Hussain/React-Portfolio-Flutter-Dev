import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { animateFromLeft, animateFromRight, animateFromTop } from '../utils/animation';

function Skills() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            variants={animateFromTop(0)}
            initial="hidden"    
            whileInView="visible"
            className="my-20 text-4xl text-center">
            Skills
            </motion.h2>

            {
                SKILLS.map((skill, index) => (
                    <div key={index} className="mb-8 flex flex-wrap justify-center lg:justify-center ">
                        <motion.div
                        variants={animateFromLeft(0.2)}
                        initial="hidden"    
                        whileInView="visible"
                        className="w-full lg:w-1/4">
                            <p className="text-neutral-400 text-sm mb-2">{Object.keys(skill)[0]}</p>
                        </motion.div>
                        <motion.div 
                        variants={animateFromRight(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        className="mb-2 w-full lg:w-3/4 max-w-xl flex flex-wrap">
                        {skill[Object.keys(skill)[0]].map((subskill, index) => ( 
                            <p className="bg-neutral-900 px-2 py-1 text-sm rounded text-purple-500 font-medium mr-2 mb-2">
                            {subskill}
                        </p>
                        ))}
                            
                        </motion.div>
                    </div>))
            }

        </div>
    );
}

export default Skills;
