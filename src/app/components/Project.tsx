'use client'
import React, {useRef } from 'react'
import { motion , useScroll } from "framer-motion";
import { projectsData } from "../lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({title, description, tags, imageUrl}: ProjectProps) {

  const refs = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll ({
    target: refs,
    offset: ["0 1", "1.33 1"],
  })

  return (
    <motion.div ref={refs} style={{scale: scrollYProgress, opacity: scrollYProgress}} className='w-[95%] sm:w-[90%] group rounded-lg shadow-lg md:mx-0 md:max-w-[42rem] last:mb-0'>
        <section className='relative  bg-gray-100  border border-black/5 overflow-hidden sm:pr-8 h-[22rem] rounded-lg  hover:bg-gray-200 transition'>
          <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%] md:group-even:ml-[20rem]'>
              <h3 className='font-serif text-center md:text-start bg-[#00CA99] md:bg-transparent text-[15px] xsm:text-lg md:text-2xl font-semibold'>{title}</h3>
              <p className='mt-2 text-[12px] md:text-[16px] leading-relaxed text-gray-700'>{description}</p>
              <ul className='flex flex-wrap mt-4 gap-2'>
                  {tags.map((tag,index) => (
                  <li className='bg-black/[0.7] px-3 py-1 text-[0.5rem] font-serif md:text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                  ))}
              </ul>
          </div>
            <Image src={imageUrl} alt={title} quality={95} className='static md:absolute md:top-8 md:-right-60 w-[34rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-60
            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-0 md:group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-0 md:group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition'/>
        </section>
    </motion.div>
  )
}