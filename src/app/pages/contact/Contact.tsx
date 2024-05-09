'use client'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
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
              <h1 className='text-7xl'>Contact</h1>
      </div>
             
    </section>
  )
}

export default Contact