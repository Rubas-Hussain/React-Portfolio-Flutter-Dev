import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion"
import { animateFromLeft, animateFromRight } from '../utils/animation'

function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 '>
                    <div flex flex-col items-center lg:items-start>
                        <motion.h1 
                        variants={animateFromLeft(0)}
                        initial='hidden'
                        animate='visible'
                        className='pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-7xl'>Rubas Hussain
                        </motion.h1>
                        <motion.span 
                        variants={animateFromLeft(0.2)}
                        initial='hidden'
                        animate='visible'
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-light text-transparent'>Full Stack Flutter Developer</motion.span>
                        <motion.p 
                        variants={animateFromLeft(0.4)}
                        initial='hidden'
                        animate='visible'
                        className='my-2 max-w-lg py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    variants={animateFromRight(0.6)}
                    initial='hidden'
                    animate='visible'
                    src={profilePic} alt="Rubas"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero