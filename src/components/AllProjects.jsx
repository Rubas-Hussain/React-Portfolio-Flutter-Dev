import React from 'react'
import { PROJECTS } from '../constants'
import { animateFromLeft, animateFromRight, animateFromTop } from '../utils/animation'
import { motion } from 'framer-motion'

function AllProjects() {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2
                variants={animateFromTop(0)}
                initial='hidden'
                whileInView='visible'
                className='my-20 text-4xl text-center'>
                Projects
            </motion.h2>
            <div className='grid gap-10'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={animateFromTop(0.2)}
                        initial='hidden'
                        whileInView='visible'
                        className='flex flex-col lg:flex-row gap-8 border-2 border-neutral-800 rounded-xl p-6 bg-neutral-900/30'>

                        <img
                            className='w-[300px] h-[180px] object-fit rounded-xl bg-red'
                            src={project.image}
                            alt={project.title}
                        />

                        <div className='flex flex-col justify-between'>
                            <div>
                                <h3 className='text-xl font-semibold text-white mb-2'>{project.title}</h3>
                                <p className='text-neutral-400 text-sm mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}

                                            className='bg-neutral-800 px-2 py-1 rounded text-sm text-purple-500 font-medium'>

                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-3 mt-4'>
                                {project.playStore && (
                                    <a
                                        href={project.playStore}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{ backgroundColor: '#115844' }}
                                        className='text-white text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'>
                                        View on Play Store
                                    </a>
                                )}
                                {project.appStore && (
                                    <a
                                        href={project.appStore}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{ backgroundColor: '#f5f5f7', color: '#6e6e73' }}
                                        className='text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'>
                                        View on App Store
                                    </a>
                                )}
                                {!project.playStore && !project.appStore && project.webLink && (
                                    <a
                                        href={project.webLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-blue-600 text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'>
                                        View Online
                                    </a>
                                )}
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default AllProjects
