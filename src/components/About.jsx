import React from 'react'
import aboutPic from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants/index'
import { motion } from 'framer-motion'
import { animateFromLeft, animateFromRight } from '../utils/animation'

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-4xl text-center'>
            About
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <motion.div 
            variants={animateFromLeft(0)}
            initial='hidden'
            whileInView='visible'
            className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className='rounded-2xl' src='https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
            </div>
            </motion.div>
            <motion.div
            variants={animateFromRight(0.2)}
            initial='hidden'
            whileInView='visible'
            className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6 '>{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About