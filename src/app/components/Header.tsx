"use client"
import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsList, BsX} from 'react-icons/bs'
import clsx from 'clsx'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'

import { navData, socialMedia }  from '../lib/data'
import { useActiveSectionContext } from '../context/active-section-context'
import AnimatedLink from './AnimatedLink'


const Header = () => {
  const { activeSection, setActiveSection, mobileActiveSection, setMobileActiveSection, menuOpen, setMenuOpen,
    color, setColor, setTimeOfLastClick } = useActiveSectionContext();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
    const changeColor = () => {
      if(window.scrollY >= 60){
        setColor(true)
      }else {
        setColor(false)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
      
      return () => {
        window.removeEventListener('scroll', changeColor);
      };
    }, []);

  return (
        <nav className={color ? 'flex items-center w-full h-[60px] lg:h-[65px] xl:h-20 fixed top-0 bg-[#00CA99] lg:bg-[#00CA99] px-6 md:px-8 xl:px-20 transition-all duration-300 rounded-bl-xl xl:rounded-bl-3xl rounded-br-xl xl:rounded-br-3xl shadow-md z-[999]' : 'flex items-center w-full h-[60px] lg:h-[65px] xl:h-20 fixed top-0 bg-[#00CA99] lg:bg-transparent px-6 md:px-8 xl:px-20 transition-all duration-300 shadow-md lg:shadow-none z-[999]'}>
            {/* Desktop Menu */}
            <div className='flex items-center justify-between h-full w-full'>
                <Link href='/' className='flex items-center'>
                    <Image src='/anthony-ico.png' width='50' height='50' alt='anthony' className='cursor-pointer w-[35px] h-[35px] xl:w-[50px] xl:h-[50px]' priority={true}/>
                    <div className='text-[18px] xl:text-2xl pl-2 font-serif font-[580px] uppercase'>
                      <Typewriter 
                        options={{
                          strings: [
                            "Anthony",
                            "Balaquit",
                            "Oppus"
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                       />
                    </div>
                </Link>
            </div>
            <div className=''>
                <div>
                    <div className='hidden lg:flex gap-10 xl:gap-20'>
                        {navData.map((link, index) => {
                            return (
                                <Link href={link.hash} key={index} className={clsx('flex px-4 relative items-center justify-center', {'text-red-600': activeSection === link.name, })} onClick={() => {setActiveSection(link.name), setTimeOfLastClick(Date.now())}}>
                                        <div className='flex text-[16px] xl:text-[19px] font-serif items-center gap-2'>
                                            {/* {link.name} */}
                                            <AnimatedLink name={link.name} />
                                        </div>
                                        {
                                          link.name === activeSection && (
                                            <motion.span layoutId='activeSection' transition={{type: "spring", stiffness: 220, damping: 18}} className='hidden lg:flex border-b-2 border-red-600 h-1 rounded-full w-20 absolute bottom-0 -z-10 '></motion.span>
                                          )
                                        }
                                </Link>
                            );
                        })}
                    </div>
                </div>
                 {/* Mobile Menu */}
                 <div className='lg:hidden cursor-pointer'>
                    <BsList className='h-8 w-8 text-white' onClick={toggleMenu}/>
                 </div>
            </div>
            {/* mobile menu modal */}
            <div className={menuOpen ? 'fixed top-0 left-0 w-[75%] md:w-[60%] shadow-lg h-screen lg:hidden bg-white border-r-2 border-[#009973] py-[11px] px-[15px] md:px-8 ease-in-out duration-500' : 'fixed w-[75%] md:w-[60%] shadow-lg h-screen top-0 left-[-100%] ease-in-out duration-500'}>
                <div className='flex w-full items-center justify-end'>
                    <BsX className='h-10 w-10 cursor-pointer text-[#00CA99]' onClick={toggleMenu}/>
                </div>
                <Link href='/' className='flex items-center absolute top-[15px]' onClick={toggleMenu}>
                    <Image src='/anthony-ico.png' width='50' height='50' alt='anthony' className='cursor-pointer w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]' priority={true}/>
                    <div className='text-[18px] xl:text-2xl pl-2 font-serif font-[580px] uppercase'>
                      <Typewriter 
                        options={{
                          strings: [
                            "Anthony",
                            "Balaquit",
                            "Oppus"
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                       />
                    </div>
                </Link>
                <hr className='bg-transparent border-black  border-b-1 mt-4 mb-[2px]' />
                <hr className='bg-transparent border-black border-b-1 mb-4' />
                {/* mobile menu links */}
                {navData.map((link, index) => {
                            return (
                                <Link href={link.hash} key={index} className={clsx('flex flex-col px-4 relative  justify-center h-14 w-50', {'text-red-600': mobileActiveSection === link.name, })} onClick={() => {setMobileActiveSection(link.name), setTimeOfLastClick(Date.now()), setMenuOpen(false)}}>
                                        <div className='flex w-full text-[16px] sm:text-lg items-center font-serif gap-2 hover:text-red-700 transition-all duration-300'>
                                          <link.icon />
                                          {link.name}
                                        </div>

                                        {
                                          link.name === mobileActiveSection && (
                                            <motion.span layoutId='mobileActiveSection' transition={{type: "spring", stiffness: 220, damping: 18}} className='flex bg-[#00CA99] h-12 justify-center sm:h-14 w-full absolute  left-0 rounded-xl -z-10'></motion.span>
                                          )
                                        }
                                </Link>
                            );
                        })}

                <div className='absolute flex bottom-[15px] left-0 h-14 w-full justify-evenly items-center'>
                    {socialMedia.map((link , index) => {
                             return (
                                <Link 
                                className='h-7 w-7 sm:h-9 sm:w-9 flex justify-center  shadow-lg items-center text-[#00CA99] translate-z-0 hover:bg-transparent rounded-[5px] border-2 group hover:text-[#ff0000] border-[#00CA99] hover:scale-110 xl:hover:translate-y-3 transition-all duration-300' 
                                  href={link.path} 
                                  key={index}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  onClick={() => setMenuOpen(false)}
                                >
                                  <div className='group-hover:scale-125 transition-all duration-100'><link.icon /></div>
                                </Link>
                          );
                    })}
                </div>
            </div>
        </nav>
  )
}

export default Header