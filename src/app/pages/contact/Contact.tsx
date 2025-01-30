'use client'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import {EarthCanvas} from '../../components/canvas'
import { useActiveSectionContext } from '../../context/active-section-context';
import Image from 'next/image';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import styles from './page.module.scss'
import Typewriter from 'typewriter-effect'
import{ HiUser } from 'react-icons/hi2';
import localFont from 'next/font/local'
const myHfont = localFont({ src: "../../../../public/font/Jost-Regular.ttf"})

const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0.50
  });
  const { setActiveSection, setMobileActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() =>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Contact')
      setMobileActiveSection('Contact')
    }
  }, [inView, setActiveSection, setMobileActiveSection, timeOfLastClick]);

  // const refDiv = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: refDiv,
  //   offset: ["start start", "end end"]
  // })
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 12])

  return (
    <section ref={ref} id='contact' className="scroll-mt-20 overflow-hidden">
      <div className='min-h-screen w-full flex justify-center items-center'>
              {/* <h1 className='text-7xl'>Contact</h1> */}
              <div className='flex flex-col xl:flex-row mt-32 xl:mt-20 m-4 h-full xl:h-[600px] w-full justify-center item-center'>
            <div className="flex relative px-2 md:px-10 lg:px-16 xl:px-0 ">
            {/* <Image src='/contact-left-dec.png' width={150} height={150} alt='' className="absolute top-50 -left-20 xl:-left-32 rotate-180 mix-blend-hard-light animate-pulse" /> */}
            <div  className='flex relative flex-col items-center w-full h-full xl:max-w-[700px] bg-gradient-to-r from-indigo-300 via-purple-300 to bg-pink-300 backdrop-filter backdrop-blur-xl shadow-myshadow px-2 md:px-10 pb-6 rounded-xl xl:px-10 '>
                {/* <Image src='/subscribe-dec.png' width={120} height={120} alt='' className="absolute -top-6 -right-6" /> */}
               <h2 className='text-3xl md:text-5xl font-semibold mb-6 mt-4 xl:mb-4'>
                Lets <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to bg-pink-700'>connect.</span>
                </h2>
                <form className='flex-1 flex flex-col gap-8 w-full mx-auto'>
                    <div className='flex flex-col md:flex-row xl:flex-row gap-x-8 gap-y-6 w-full'>
                        <input type='name' id='name' name='name' placeholder='name' className='w-full h-[52px] rounded-lg pl-6 capitalize text-black bg-white backdrop-filter backdrop-blur-xl' required/>
                        <input type='email' id='email' name='email' placeholder='email' className='w-full h-[52px] rounded-lg pl-6 capitalize text-black bg-white backdrop-filter backdrop-blur-xl' required/>
                    </div>
                    <input type='text' id="subject" name="subject" placeholder='subject' className='w-full h-[52px] rounded-lg pl-6 capitalize text-black bg-white backdrop-filter backdrop-blur-xl' />
                    <textarea id='message' name='message' placeholder="message" className="w-full h-[180px] p-6 capitalize rounded-lg resize-none text-black bg-white backdrop-filter backdrop-blur-xl" required></textarea>
                    <div className='flex justify-center items-center group xl:hover:translate-x-2 transition-all duration-300'>
                        <button type="submit"
                            className='relative w-[185px] h-[40px] flex justify-center items-center bg-white border-4 border-black/60 rounded-full xl:hover:bg-slate-400/80 hover:scale-110 transition-all duration-500'>Send
                        </button>
                    </div>
                </form>
            </div>
            </div>
            <div className="w-full xl:w-[600px] h-[500px] xl:h-[600px]">
                <EarthCanvas/>
            </div>
        </div> 
      </div>
             
    </section>
  )
}

export default Contact