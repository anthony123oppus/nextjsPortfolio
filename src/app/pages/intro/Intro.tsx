'use client'
import localFont  from 'next/font/local'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useState } from 'react'
import { useActiveSectionContext } from '../../context/active-section-context';
import useMousePosition from '@/app/util/useMousePosition';
import ParticlesContainer from '@/app/components/ParticleContainer';
import {motion} from 'framer-motion'
import styles from './page.module.scss'
import Image from 'next/image';
import {AiOutlineCrown} from 'react-icons/ai'
import Link from 'next/link';


const myFont = localFont({ src: "../../../../public/font/UnifrakturMaguntia-Regular.ttf"})
const myBfont = localFont({ src: "../../../../public/font/Jost-Regular.ttf" })

const Home = () => {
  const {ref, inView} = useInView({
    threshold: 1
  });
  const { setActiveSection, setMobileActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() =>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Home')
      setMobileActiveSection('Home')
    }
  }, [inView, setActiveSection, setMobileActiveSection, timeOfLastClick]);

  
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 210 : 20

  return (
    <section ref={ref} id='home' className="flex min-h-screen w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-7xl flex-col items-center justify-center scroll-mt-20">
      <ParticlesContainer />
      {/* <Image src='/shape2.png' width='600' height='300' alt='design' className='absolute h-[150px] w-[350px] xl:w-[600px] xl:h-[300px] right-0 bottom-16 md:bottom-18'/> */}
       <div className={styles.main}> 
          <motion.div className={styles.mask} animate={{WebkitClipPath: `circle(${size}px at ${x - size/20}px ${y - size/20}px)` }} transition={{ type: "tween", ease: "backOut"}}>
            <div className='flex relative justify-center text-white'>
              <AiOutlineCrown className='absolute -top-8 h-8 w-8 text-white'/>
              <p className={`${myBfont.className} text-[20px] text-white font-sans border-y-2 border-white px-[3px] lg:p-[6px]`}>Anthony Portfolio</p>
            </div>
            <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${myFont.className} w-[90%] sm:w-[82%] md:w-[70%] xl:w-[60%] p-6 text-center text-white mb-[60px]`}>This is my portfolio. Feel free to take your time to explore and enjoy.</p>
          </motion.div>
          <motion.div initial={{opacity: 0, y:100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1, duration: 1.2}} className={styles.body}>
            <div className='flex relative justify-center -z-10'>
              <AiOutlineCrown className='absolute -top-8 h-8 w-8 text-[#008060]'/>
              <p className={`${myBfont.className} text-[20px] text-[#008060] font-sans border-y-2 border-[#008060] px-[3px] lg:p-[6px]`}>Anthony Portfolio</p>
            </div>
            <p className={`${myFont.className} w-[90%] sm:w-[82%] md:w-[70%] xl:w-[60%] p-6 text-center text-black`}>Welcome to <span>My Portfolio</span> Where Creativity Meets Purpose</p>
            <div className='flex gap-2 sm:gap-10 xl:gap-14 mt-5'>
            <Link href='/CV.pdf' download target='_blank' rel='noopener noreferrer' className='flex justify-center items-center w-32 md:w-40 h-10 text-sm xl:text-[18px] text-[#00b386] border-[3px] border-[#00b386] cursor-pointer z-10 hover:backdrop-filter rounded-tl-xl font-semibold hover:backdrop-blur-xl hover:scale-110 transition-all duration-700'><p>Download CV</p></Link>
            <Link href='#contact' className='flex justify-center items-center w-32  md:w-40 h-10 text-sm xl:text-[18px] text-[#00b386] border-[3px] border-[#00b386] cursor-pointer z-10 font-semibold hover:backdrop-filter rounded-br-xl hover:backdrop-blur-xl hover:scale-110 transition-all duration-700'><p>Get Touch</p></Link>
            </div>
          </motion.div>
       </div>
     </section>
  )
}

export default Home