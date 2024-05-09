'use client'
import { useInView } from 'react-intersection-observer'
import React, { useEffect, useRef } from 'react'
import { useActiveSectionContext } from '../../context/active-section-context';
import Typewriter from 'typewriter-effect'
import{ HiViewColumns } from 'react-icons/hi2';
import { projectsData } from '@/app/lib/data';
import Project from '@/app/components/Project'
import localFont from 'next/font/local'
const myHfont = localFont({ src: "../../../../public/font/Jost-Regular.ttf"})

const Work = () => {
  const {ref, inView} = useInView({
    threshold: 0.50
  });
  const { setActiveSection, setMobileActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() =>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Project')
      setMobileActiveSection('Project')
    }
  }, [inView, setActiveSection, setMobileActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id='project' className="flex relative min-h-screen last:mb-0 w-[100%] flex-col items-center justify-center py-24 p-0 xl:p-24 scroll-mt-20">
      {/* <div> */}
        <div className='bg-[#50f9e8] absolute -z-10 top-[50%] right-[10%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[8rem]' />
        <div className='bg-[#fb66db] absolute -z-10 top-[9rem] left-[20%] h-[10.25rem] w-[12.25rem] xl:w-[10.25rem] rounded-full blur-[8rem]' />
          <div className='flex relative justify-center pb-10 xl:pt-20 z-50 '>
            <HiViewColumns className='absolute -top-8 xl:top-12 h-7 w-7 text-[#008060]'/>
            <div className='relative flex justify-center items-center'>
              <p className={`${myHfont.className} text-[20px] w-[150px] -z-10 text-black/20 font-sans border-y-2 border-[#008060] px-[20px] font-[560px]`}>My Project</p>
              <div className={`${myHfont.className} absolute w-[150px] text-[20px] text-[#008060] font-sans px-[20px] font-[560px]`}>
              <Typewriter 
                      options={{
                         strings: [
                           "My Project",
                         ],
                         autoStart: true,
                         loop: true,
                        delay: 100,
                       }}
                     />
              </div>
            </div>
          </div>
      {/* </div> */}
      <div className='w-[100%] flex flex-col justify-center items-center gap-y-4 md:gap-y-6'>
          {
            projectsData.map((project, index) =>(
              <React.Fragment key={index}>
              <Project {...project}/>
              </React.Fragment>
            ))
          }
      </div>
     </section>
  )
}

export default Work
