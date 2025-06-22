import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import AllProjects from './components/AllProjects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:(
      <>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Experience />
        <Projects/>
        <Contact />
      </>
    )
    }, 
    {
      path:'/all-projects',
      element:<AllProjects/>
    } 
  ]);
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      {/* Dark theme */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      {/* light theme */}
      {/* <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
        </div> */}
      <div className='container mx-auto px-8 h-screen'>
{/* <div className='container mx-auto px-8 min-h-screen pb-20'> */}
        {/* <Navbar />
      
        <Hero/>
        <About/>
        <Technologies/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/> */}
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App