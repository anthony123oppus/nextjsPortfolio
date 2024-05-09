"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MdArrowBack } from 'react-icons/md'
import { gsap } from 'gsap'
import styles from './page.module.scss'


import { FaHandPointUp } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const ContactForm = () => {

    const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const t1 = gsap.timeline({ paused: true, reversed: true });

      // Add an event listener to trigger the animation
      divRef.current.addEventListener('click', () => {
        t1.play();
      });

      t1.to(divRef.current, {
        rotation: 90,
        transformOrigin: 'center center',
        duration: 0.5, // Adjust the duration as needed
      });
    }
  }, []);

    // useEffect(() => {
    //     let button = document.querySelector(".button");
    //     let reverse = document.querySelector(".reverse");
    //     const t1 = gsap.timeline({ paused: true, reversed: true });
    
    //     button?.addEventListener("click", () => {
    //       t1.play();
    //     });
    
    //     reverse?.addEventListener("click", () => {
    //       t1.reverse();
    //     });
    
    //     t1.to(".button svg", {
    //       ease: "power1.inOut",
    //       rotate: 90,
    //     });
    
    //     t1.to(".button svg", {
    //       ease: "power1.inOut",
    //       duration: 0.2,
    //       y: -10,
    //       opacity: 0,
    //     });
    
    //     t1.to(".button", {
    //       ease: "power1.inOut",
    //       yPercent: 114,
    //     });
    
    //     t1.to(".top", {
    //       ease: "power1.inOut",
    //       height: 380,
    //     });
    
    //     t1.to(".top img", {
    //       ease: "power1.inOut",
    //       scale: 1.2,
    //       yPercent: 40,
    //     });
    
    //     t1.to(".button", {
    //       ease: "power1.inOut",
    //       yPercent: 166,
    //       borderRadius: 0,
    //       scaleX: 10,
    //       scaleY: 2.6,
    //     });
    
    //     t1.from(".loading", {
    //       ease: "power1.inOut",
    //       opacity: 0,
    //       y: 50,
    //     });
    
    //     t1.to(".loading", {
    //       ease: "power1.inOut",
    //       opacity: 0,
    //       x: 200,
    //       delay: 0.5,
    //     });
    
    //     t1.from(".next-screen", {
    //       ease: "power1.inOut",
    //       yPercent: 100,
    //       duration: 0.5,
    //     });
    
    //     t1.from(".next-screen svg", {
    //       ease: "power1.inOut",
    //       xPercent: -250,
    //       duration: 0.5,
    //     });
    
    //     t1.from(".next-screen h1", {
    //       ease: "power1.inOut",
    //       scale: 0,
    //       opacity: 0,
    //       duration: 0.3,
    //     });
    
    //     t1.from(".header", {
    //       ease: "power1.inOut",
    //       scale: 0,
    //       opacity: 0,
    //       duration: 0.3,
    //     });
    
    //     t1.from(".next-screen p", {
    //       ease: "power1.inOut",
    //       scale: 0,
    //       opacity: 0,
    //       duration: 0.3,
    //     });
    
    //     t1.to(".container", {
    //       ease: "power1.inOut",
    //       backgroundColor: "#101010",
    //       duration: 0.1,
    //     });
    
    //     t1.to(".next-screen", {
    //       ease: "power1.inOut",
    //       yPercent: -10,
    //       duration: 1,
    //     });
    
    //     t1.to(".next-screen", {
    //       ease: "power1.inOut",
    //       yPercent: 0,
    //       duration: 1,
    //     });
    //   }, []);

  return (
    <div className='flex flex-col lg:flex-row  font-serif z-10 mt-[-100vh] w-[95%] sm:w-[90%] xl:w-[85%] md:mx-0'>
     
    {/* screen main */}
      <div className='bg-white w-full h-[720px] md:h-[650px] flex flex-col items-center p-8'>
            <h2 className='text-3xl'>Feel Free To Send Me a Message</h2>
        <div className='bg-[#00CA99] h-60 w-full relative mt-24 flex justify-center rounded-xl'>
            <Image src='/t-avt-3.png' alt='profile' width={40} height={40} quality={95} className='absolute rounded-full -top-20 h-40 w-40 border-2 border-[#00CA99]'/>
            <div className='mt-20'>
                <h2 className='text-center text-2xl mt-3'>Anthony B. Oppus</h2>
                    <div className='w-full flex flex-col gap-y-4 mt-3'>
                        <div className='flex gap-x-2'>
                            <MdEmail className='text-2xl' />
                            <h2 className='text-xl'>anthonyoppus2000@gmail.com</h2>
                        </div>
                        <div className='flex gap-x-2'>
                            <AiFillPhone className='text-2xl' />
                            <h2 className='text-xl'>+639934125119</h2>
                        </div>
                    </div>
            </div>
        </div>
        {/* button */}
        {/* <div className='absolute top-[75%] bg-[#00CA99] h-20 w-20 rounded-full cursor-pointer'>
            <div className='h-20 w-20 relative flex justify-center items-center'>
                <Image src='/messageme-text.png' alt='' width='200' height='200' className='h-[68px] w-16 absolute animate-spin-slow' />
                <div ref={divRef} className='text-3xl bg-transparent text-white animate-bounce'>
                    <FaHandPointUp />
                </div>
            </div>
        </div> */}
      </div>

       {/* next_screen */}
       <div className='flex flex-col justify-center bg-[#00CA99] h-[720px] md:h-[650px] w-full p-6 gap-y-8'>
        <h2 className='text-2xl md:text-4xl text-center'>Get In Touch</h2>
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
  )
}

export default ContactForm