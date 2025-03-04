import React, { useState } from 'react';
import { RiFirebaseFill, RiReactjsLine } from 'react-icons/ri';
import { SiExpress, SiFlutter, SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiDart, DiExtjs, DiMysql, } from 'react-icons/di';
import { motion } from 'framer-motion';
import { animateFromLeft, animateFromTop } from '../utils/animation';

function Technologies() {

    const iconAnimation = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            },
        },
    })

    // const [didHover, setHover] = useState(false);
    const [hoverKey , setHoverKey] = useState(null);
     
    const hoverStartHandler=(key)=>{
        console.log('hover start');
        setHoverKey(key);
    }
    
    const hoverEndHandler=()=>{
        console.log('hover end');
        setHoverKey(null);
    }

 
    const toolTip = (title) => {
        return (
            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-15 left-0 w-full h-full 
                            bg-black-800 bg-opacity-50 flex justify-center items-center"
                        >
                            <p className="text-white-100 text-lg">{title}</p>
                        </motion.div>
        );
    }

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
                    initial="initial"
                    animate="animate"
                    // onHoverStart={() => setHover(true)}
                    // onHoverEnd={() => setHover(false)}
                    
                    onHoverStart={() => hoverStartHandler('Flutter')}
                    onHoverEnd={() => hoverEndHandler()}
                    
                    className="relative rounded-2xl border-3 border-neutral-800 p-3 cursor-pointer"
                >
                    {/* Flutter Icon */}
                    <SiFlutter className="text-4xl text-blue-500" />

                    {/* {didHover && 
                        (toolTip('Flutter'))} */}
                        
                </motion.div>

                <motion.div
                    variants={iconAnimation(3)}
                    initial='initial'
                    animate='animate'
                    // onHoverStart={() => setHover(true)}
                    // onHoverEnd={() => setHover(false)}
                    className=' rounded-2xl border-3 border-neutral-800 p-3'>
                    <DiDart className='text-4xl text-sky-500' />

                    {/* {didHover && (
                        toolTip('Dart')
                    )} */}
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