import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../constants'
import { animateFromTop } from '../utils/animation'
import { motion } from 'framer-motion'

function AllProjects() {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen px-4 pb-16 border-b border-neutral-800'>

            {/* Header */}
            <motion.div
                variants={animateFromTop(0)}
                initial='hidden'
                animate='visible'
                className='flex items-center justify-between mt-10 mb-14'
            >
                <button
                    onClick={() => navigate('/')}
                    className='text-sm sm:text-base lg:text-lg font-medium px-4 py-2 mr-12 sm:px-5 sm:py-2.5 rounded border border-neutral-700 text-white hover:bg-neutral-800 transition'
                >
                    ← Back
                </button>

                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white'>
                    All Projects
                </h2>
                {/* Spacer for symmetry */}
                <div className='w-[140px]' />
            </motion.div>

            {/* Project Cards */}
            <div className='grid gap-10'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={animateFromTop(0.2)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='flex flex-col lg:flex-row gap-8 border-2 border-neutral-800 rounded-xl p-6 bg-neutral-900/30'
                    >
                        <img
                            className='w-[300px] h-[180px] object-cover rounded-xl'
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
                                            className='bg-neutral-800 px-2 py-1 rounded text-sm text-purple-500 font-medium'
                                        >
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
                                        className='bg-green-700 text-white text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'
                                    >
                                        View on Play Store
                                    </a>
                                )}
                                {project.appStore && (
                                    <a
                                        href={project.appStore}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'
                                    >
                                        View on App Store
                                    </a>
                                )}
                                {!project.playStore && !project.appStore && project.webLink && (
                                    <a
                                        href={project.webLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition'
                                    >
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
