  'use client'
  import React, {useEffect, useRef} from 'react'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  const Motto = () => {

      const firstText = useRef(null);
      const secondText = useRef(null);
      const slider = useRef(null);

      let xPercent = 0;
      let direction = -1;

      useEffect( ()=>{
          gsap.registerPlugin(ScrollTrigger)
          gsap.to(slider.current, {
              scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                markers: false,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
              },
              x: "-=300px",
            })
          requestAnimationFrame(animation)
      }, [])

      const animation = () => {
          if(xPercent <= -100){
              xPercent = 0;
          }
          else if(xPercent > 0){
              xPercent = -100;
            }
          gsap.set(firstText.current, {xPercent: xPercent})
          gsap.set(secondText.current, {xPercent: xPercent})
          xPercent += 0.1 * direction 
          requestAnimationFrame(animation)
      }

    return (
      <section className='relative bg-[#b3ffec]'>
          <p className='absolute -top-[30px] xxl:top-0 rounded-br-xl left-0 bg-[#00CA99] px-4 xl:px-8 py-[2px] xl:py-[4px] text-[12px] md:text-[15px] xl:text-[18px] text-center'>Developer Motto</p>
          <div ref={slider} className='flex w-full'>
              <p ref={firstText} className='text-[16px] xsm:text-[22px] sm:text-[31px] md:text-[38px] lg:text-[56px] xl:text-[70px] xxl:text-[87px] xxxl:text-[96px]'>  Crafting Digital Dreams into Reality - </p>
              <p ref={secondText} className='absolute left-[100%] w-full text-[16px] xsm:text-[22px] sm:text-[31px] md:text-[38px] lg:text-[56px] xl:text-[70px] xxl:text-[87px] xxxl:text-[96px]'>Crafting Digital Dreams into Reality - </p>  
          </div>
      </section>
    )
  }

  export default Motto