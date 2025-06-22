import React from 'react'
import { PROJECTS } from '../constants'
import { animateFromLeft, animateFromRight, animateFromTop } from '../utils/animation'
import { motion } from 'framer-motion'

function Projects() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                variants={animateFromTop(0)}
                initial='hidden'
                whileInView='visible'
                className='my-20 text-4xl text-center'>
                Projects
            </motion.h2>
            <div>
                {PROJECTS.slice(0, 4).map((project, index) => (

                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            variants={animateFromLeft(0.2)}
                            whileInView='visible'
                            initial='hidden'
                            className='w-full lg:w-1/4 h-auto'>
                            {/* <img width={200} height={150} className='mb-8 rounded' src={project.image} alt={project.title} /> */}
                            <img
                                className='mb-8 rounded-xl object-fit w-[210px] h-[170px]'
                                src={project.image}
                                alt={project.title}
                            />
                        </motion.div>
                        <motion.div
                            variants={animateFromRight(0.2)}
                            whileInView='visible'
                            initial='hidden'
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {project.title}
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap'>
                                {project.technologies.map((tech, index) => (
                                    <span className='mr-2 mt-4 bg-neutral-900 px-2 py-1 rounded text-sm text-purple-500 font-medium' key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center mt-10">
                <motion.button
                    variants={animateFromTop(0)}
                    initial='hidden'
                    whileInView='visible'
                    className='bg-transparent rounded-lg border-2 border-neutral-800 px-6 py-3 text-lg font-semibold transform transition-transform hover:scale-105 hover:bg-neutral-900 hover:text-slate-300 cursor-pointer'
                >
                    <a href="/all-projects">
                        View All
                    </a>
                </motion.button>
            </div>

        </div>
    )
}

export default Projects