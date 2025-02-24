const animateFromRight =(delay)=>({
    hidden:{x: 100, opacity: 0},
    visible:{x: 0, opacity: 1,transition:{duration: 0.5,delay: delay}},
})

const animateFromLeft =(delay)=>({
    hidden:{x: -100, opacity: 0},
    visible:{x: 0, opacity: 1,transition:{duration: 0.5,delay: delay}},
})

const animateFromTop =(delay)=>({
    hidden:{y: -100, opacity: 0},
    visible:{y: 0, opacity: 1,transition:{duration: 0.5,delay: delay}},
})


export { animateFromRight, animateFromLeft,animateFromTop }