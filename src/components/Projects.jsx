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
                            whileInView="visible"
                            initial="hidden"
                            className="w-full lg:w-1/4 h-auto text-white"
                        >
                            <div
                                className="shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0 rounded-xl w-[210px] h-[170px] min-w-[210px] min-h-[170px] overflow-hidden flex items-center justify-center"
                                style={{ backgroundColor: project.backgroundColor || "transparent" }}
                            >
                                <img
                                    className="max-w-full max-h-full w-full h-full object-contain object-center"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
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