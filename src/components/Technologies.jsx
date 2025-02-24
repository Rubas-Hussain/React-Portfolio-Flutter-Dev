import React from 'react';
import { RiFirebaseFill, RiReactjsLine  } from 'react-icons/ri';
import { SiExpress, SiFlutter, SiMongodb} from 'react-icons/si';
import { FaNodeJs  } from 'react-icons/fa';
import { DiDart, DiExtjs, DiMysql,} from 'react-icons/di';
import {motion} from 'framer-motion';
import { animateFromLeft,animateFromTop } from '../utils/animation';

function Technologies() {

    const iconAnimation=(duration)=>({
        initial:{y:-10},
        animate:{y:[10,-10],
        transition:{
          duration:duration,
          ease:'linear',
          repeat: Infinity,
          repeatType:'reverse'
        },
    },
    })

  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2 
        variants={animateFromTop(0)}
        initial='hidden'
        whileInView='visible'
        className='my-20 text-4xl text-center'>
        Technologies 
        </motion.h2>
        <motion.div 
        variants={animateFromLeft(0)}
        initial='hidden'
        whileInView='visible'
        className='flex flex-wrap justify-center items-center gap-4'>
            <motion.div
            variants={iconAnimation(2.5)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <SiFlutter className='text-4xl text-blue-500' />
            </motion.div>
            
            <motion.div
            variants={iconAnimation(3)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <DiDart className='text-4xl text-sky-500' />
            </motion.div>
            
            <motion.div 
            variants={iconAnimation(5)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <RiFirebaseFill className='text-4xl text-amber-500' />
            </motion.div>
            
            <motion.div 
            variants={iconAnimation(2)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <DiMysql className='text-4xl text-blue-600' />
            </motion.div>

            <motion.div 
            variants={iconAnimation(6)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <FaNodeJs className='text-4xl text-green-500' />
            </motion.div>
            <motion.div 
            variants={iconAnimation(4)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <SiMongodb className='text-4xl text-green-500' />
            </motion.div>
            
            <motion.div 
            variants={iconAnimation(8)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <SiExpress className='text-4xl text-black-100' />
            </motion.div>

            <motion.div 
            variants={iconAnimation(7)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-3 border-neutral-800 p-3'>
                <RiReactjsLine className='text-4xl text-cyan-400' />
            </motion.div>


        </motion.div>
    </div>
  )
}

export default Technologies