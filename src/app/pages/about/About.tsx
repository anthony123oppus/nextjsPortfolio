'use client'
import { useInView } from 'react-intersection-observer'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { useActiveSectionContext } from '../../context/active-section-context';
import {VrHeadshetCanvas} from '../../components/canvas'
import {MouseGamerCanvas} from '../../components/canvas'
import styles from './page.module.scss'
import{ HiUser } from 'react-icons/hi2';

const myHfont = localFont({ src: "../../../../public/font/Jost-Regular.ttf"})

const About = () => {

  const phrase = "I'm fresh graduate with the degree of Computer Science. I'm always eager to learn more and try new things that can improve my programming skill. Collaboration is my secret ingredient for success. I revel in teamwork, where collective brilliance sparks fresh ideas and pushes the boundaries of what's possible. Together, we'll create web experiences that are not only visually stunning but also deeply immersive and memorable.";

  const refs= useRef<HTMLSpanElement[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect ( () => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimation()
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      opacity: 1,
      color: "#00664d",
      ease: "none",
      stagger: 0.03,
      scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: `top`,
          end: `+=${window.innerHeight / 3}`,
          markers: false
      },
  })
}

  const splitWords = () => {
    let body: JSX.Element[] = []
    phrase.split(" ").forEach( ( word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>)
    })
    return body;
  }

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach( (letter, index) => {
      letters.push(<span  ref={(el) => {
        if (el) {
          refs.current.push(el);
        }
      }} key={`letter_${index}`}>{letter}</span>)
    })
    return letters;
  }

  const {ref, inView} = useInView({
    threshold: 0.50
  });
  const { setActiveSection, setMobileActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() =>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About')
      setMobileActiveSection('About')
    }
  }, [inView, setActiveSection, setMobileActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id='about' className="flex relative overflow-hidden pb-20 min-h-screen flex-col items-center justify-end scroll-mt-20">
      <div className='bg-[#50f9e8] absolute -z-10 top-[9rem] left-[20%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[10rem]' />
      <div className='bg-[#fb66db] absolute -z-10 top-[50%] right-[10%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[10rem]' />
      <div className='w-[200px] h-[200px] xl:w-[400px] xl:h-[400px]  flex absolute top-0 left-0 z-50'> 
        {/* <VrHeadshetCanvas /> */}
      </div>
      <div className='w-[200px] h-[200px] xl:w-[400px] xl:h-[400px]  flex absolute -bottom-5 xl:-bottom-14 right-0 z-50'> 
        {/* <MouseGamerCanvas /> */}
      </div>
      <div ref={container} className='flex absolute -top-80 flex-col items-center pt-[58vh] sm:pt-[52vh] xl:pt-[44vh] min-h-[140vh]'>
            <div className='flex relative justify-center pb-10 xl:pt-20 z-50 '>
              <HiUser className='absolute -top-8 xl:top-12 h-7 w-7 text-[#008060]'/>
              <div className='relative flex justify-center items-center'>
                <p className={`${myHfont.className} text-[20px] w-[140px] -z-10 text-black/20 font-sans border-y-2 border-[#008060] px-[20px] font-[560px]`}>About Me</p>
                <div className={`${myHfont.className} absolute w-[140px] text-[20px] text-[#008060] font-sans px-[20px] font-[560px]`}>
                <Typewriter 
                        options={{
                          strings: [
                            "About Me",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                       />
                </div>
              </div>
            </div>
        <div ref={body} className={`${styles.about} pb-10 text-[16px] xsm:text-[21px] sm:text-[23px] md:text-[26px] lg:text-[31px] xxl:text-[35px] w-[86%] sm:w-[82%] md:w-[70%] xl:w-[60%] justify-center`}>
          {
            splitWords()
          }
        </div>
        <div className=' flex items-center font-serif justify-end'>
          <div className='flex flex-1 gap-5 xl:gap-x-40'>
                <div className='relative flex-1 after:w-[3px] after:h-full after:bg-[#008060] after:absolute after:top-0 after:-right-2 xl:after:-right-20'>
                  <div className='flex justify-center text-[#008060] text-xl xl:text-2xl mb-2 font-extrabold'>
                    <CountUp start={0} end={24} duration={5} /> +
                  </div>
                  <div className='text-[10px] text-center xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Months of Doing Good</div>
                </div>
                <div className='relative flex-1 after:w-[3px] after:h-full after:bg-[#008060] after:absolute after:top-0 after:right-2 xl:after:-right-20'>
                  <div className='flex justify-center text-[#008060] text-xl xl:text-2xl mb-2 font-extrabold'>
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className='text-[10px] text-center xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Client Satisfied</div>
                </div>
                <div className='relative flex-1'>
                  <div className='flex justify-center text-[#008060] text-xl xl:text-2xl mb-2 font-extrabold'>
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className='text-[10px] text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Project</div>
                </div>
          </div>
      </div>
      </div>
     </section>
  )
}

export default About