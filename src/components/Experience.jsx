import React from 'react'
import { EXPERIENCES } from '../constants'
import { animateFromLeft, animateFromRight, animateFromTop } from '../utils/animation'
import { motion } from 'framer-motion'

function Experience() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                variants={animateFromTop(0)}
                initial='hidden'
                whileInView='visible'
                className='my-20 text-4xl text-center'>
                Experiences
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            variants={animateFromLeft(0.2)}
                            whileInView='visible'
                            initial='hidden'
                            className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                            variants={animateFromRight(0.2)}
                            whileInView='visible'
                            initial='hidden'
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {experience.role} -{" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}
                            </p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((technology, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience