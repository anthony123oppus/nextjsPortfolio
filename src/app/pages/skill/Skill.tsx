'use client'
import React, {useRef } from 'react'
import { motion , useScroll } from "framer-motion";
import { ComputersCanvas } from '@/app/components/canvas'
import Typewriter from 'typewriter-effect'
import{ HiUser } from 'react-icons/hi2';
import localFont from 'next/font/local'
const myHfont = localFont({ src: "../../../../public/font/Jost-Regular.ttf"})

// Icons Import
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaSass,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiArduino,
  SiGreensock
} from 'react-icons/si';

import {
  BiLogoTypescript,
  BiLogoTailwindCss
} from 'react-icons/bi'

import { TbBrandThreejs } from 'react-icons/tb'
// import {  } from 'react-icons/fa'

const Skill = () => {
  const ref3d = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll ({
    target: ref3d,
    offset: ["0 1", "1.33 1"],
  })

  return (
    <section className='flex flex-col relative justify-start xl:justify-center items-center w-full h-full xl:min-h-[125vh]'>
      <div className='bg-[#50f9e8] absolute -z-10 top-[50%] right-[10%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[8rem]' />
      <div className='bg-[#fb66db] absolute -z-10 top-[9rem] left-[20%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[8rem]' />
        <div className='flex relative justify-center pb-10 xl:pt-20 z-50 '>
              <HiUser className='absolute -top-8 xl:top-12 h-7 w-7 text-[#008060]'/>
              <div className='relative flex justify-center items-center'>
                <p className={`${myHfont.className} text-[20px] w-[140px] -z-10 text-black/20 font-sans border-y-2 border-[#008060] px-[20px] font-[560px]`}>My Skills</p>
                <div className={`${myHfont.className} absolute w-[140px] text-[20px] text-[#008060] font-sans px-[20px] font-[560px]`}>
                <Typewriter 
                        options={{
                          strings: [
                            "My Skills",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                       />
                </div>
              </div>
            </div>
        <div className='flex xl:h-[80vh] justify-center xl:w-full relative mx-auto xxl:mx-0 h-[200px] w-[320px] xsm:h-[300px] xsm:w-[400px] sm:w-[540px] md:h-[400px] md:w-[668px] lg:h-[550px] lg:w-[960px] '>
          <div className='absolute bottom-0 bg-compbg bg-no-repeat bg-cover h-[200px] w-[320px] xsm:h-[300px] xsm:w-[400px] sm:w-[540px] md:h-[400px] md:w-[668px] lg:h-[550px] lg:w-[960px] xl:h-[600px] xl:w-[1020px] xxl:h-[90vh] xxl:w-[80%] '></div>
        {/* xxl:mx-0 h-[200px] w-[320px] xsm:h-[300px] xsm:w-[400px] sm:w-[540px] md:h-[400px] md:w-[668px] lg:h-[550px] lg:w-[960px] max-w-none xl:h-[600px] xl:w-[1000px] */}
                <FaHtml5 className='absolute z-40 text-orange-600 h-[6%] w-[6%] bottom-[40%] -left-[2%] sm:left-[5%] hover:scale-125 transition-all duration-300'/>
                <FaJs className='absolute z-40 text-yellow-500 h-[6%] w-[8%] top-[34%] left-[8%] hover:scale-125 transition-all duration-300'/>
                <SiNextdotjs className='absolute z-40 text-slate-800 h-[7%] w-[7%] top-[20%] left-[50%] hover:scale-125 transition-all duration-300'/>
                <SiArduino className='absolute z-40 font-semibold text-blue-600 h-[8%] w-[8%] top-[20%] left-[25%] hover:scale-125 transition-all duration-300'/>
                <FaCss3 className='absolute z-40 text-orange-600 h-[6%] w-[6%] bottom-[40%] right-0 sm:right-[8%]  hover:scale-125 transition-all duration-300'/>
                <FaReact className='absolute z-40 font-bold text-blue-400 h-[6%] w-[6%] top-[27%] right-[27%] hover:scale-125 transition-all duration-300'/>
                <FaFigma className='absolute z-40 font-bold text-red-700 h-[5%] w-[5%] top-[35%] right-[14%] hover:scale-125 transition-all duration-300'/>
                <FaGithub className='absolute z-40 font-bold text-black h-[5%] w-[5%] top-[15%] right-[30%] hover:scale-125 transition-all duration-300'/>
                <SiAdobephotoshop className='absolute z-40 font-bold text-blue-900 h-[5%] w-[5%] top-[15%] left-[14%] hover:scale-125 transition-all duration-300'/>
                <SiAdobeillustrator className='absolute z-40 font-bold text-amber-800 h-[5%] w-[5%] top-[5%] right-[55%] hover:scale-125 transition-all duration-300'/>
                <BiLogoTypescript className='absolute z-40 font-bold text-blue-700 h-[7%] w-[6%] top-[8%] left-[29%] hover:scale-125 transition-all duration-300'/>
                <BiLogoTailwindCss className='absolute z-40 font-bold text-blue-600 h-[6%] w-[6%] top-[19%] right-[17%] hover:scale-125 transition-all duration-300'/>
                <TbBrandThreejs className='absolute z-40 font-bold text-slate-800 h-[6%] w-[6%] top-[8%] right-[23%] hover:scale-125 transition-all duration-300'/>
                <FaNodeJs className='absolute z-40 text-green-800 h-[6%] w-[6%] top-[5%] left-[50%] hover:scale-125 transition-all duration-300'/>
                <FaSass className='absolute z-40 text-rose-700 h-[6%] w-[6%] top-[6%] right-[37%] hover:scale-125 transition-all duration-300'/>
                <SiGreensock className='absolute  z-40 font-bold text-green-500 h-[7%] w-[6%] top-[6%] left-[23%] hover:scale-125 transition-all duration-300'/>
            {/* <ComputersCanvas /> */}
        </div>
        <motion.div ref={ref3d} style={{scale: scrollYProgress, opacity: scrollYProgress}} className='flex relative my-2 z-10 md:my-10  w-[85%] h-full xl:w-[80%] justify-center items-center'> 
          <div className='flex w-[85%] h-full xl:w-[80%] text-center p-8 bg-white/35 shadow-md backdrop-blur-md backdrop-filter border-opacity-18 border border-white rounded-xl text-[12px] xsm:text-[13px] sm:text-[14px] md:[16px] lg:text-[18px] xl:text-xl'>
            <FaQuoteLeft className='text-4xl h-full text-[#008060]'/>
            I'm deeply passionate about programming, and my thirst for knowlegde is insatiable. I find immense joy in dedicating entire days to watching tutorials and learning new concepts, continuously
            striving to enhance my programming skills and broaden my understanding of this fascinating field.
            <FaQuoteRight className='h-full text-4xl text-[#008060]'/>
          </div>
          <div className='absolute top-0 left-26 w-[80%] h-[20px] xl:w-[80%] -z-10 bg-[#50f9e8] rounded-xl'/>
          <div className='absolute bottom-0 right-26 w-[80%] h-[20px] xl:w-[80%] -z-20 bg-[#fb66db] rounded-xl'/>
        </motion.div>
    </section>
  )
}

export default Skill