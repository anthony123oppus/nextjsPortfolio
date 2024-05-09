import municipalImg from '../../../public/bilarImg.png'
import weatherImg from '../../../public/weatherImg.png'
import drrmImg from '../../../public/drrmImge.png'

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiPinterestFill,
} from 'react-icons/ri';


import{
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';


export const navData = [
    { name: 'Home',
      hash: '#home', 
      icon:  HiHome ,
    },
    { name: 'About',
      hash: '#about',
      icon:  HiUser,
    },
    { name: 'Project',
      hash: '#project',
      icon:  HiViewColumns, 
    },
    {
      name: 'Contact',
      hash: '#contact',
      icon:  HiEnvelope
    },
  ] as const;

  export const projectsData = [
    { 
      title: 'Weather Monitoring System',
      description: 'This project i created a website, mobile application and the hardware components which gathered the specific data from the environment with the use of sensor.', 
      tags: ['Arduino', 'NodeMcu', 'Internet of Things', 'javascript', 'html', 'CSS'],
      imageUrl: weatherImg,
    },
    { 
      title: 'DRRM Information Website',
      description: 'I created a Disaster Risk Reduction Mangement information Website of Bohol Island State University',
      tags: ['Html', 'CSS', 'Javascript','MySQL'],
      imageUrl: drrmImg,
    },
    { 
      title: 'Municipal Website',
      description: 'I created a Municipality of Bilar landing page that display the municipal information of event and it also display the municipal tourist spot.',
      tags: ['Html', 'CSS', 'Javascript','MySQL'],
      imageUrl: municipalImg,
    },
  ] as const;
  
  export const socialMedia = [
    {
      name: 'Youtube',
      path: 'https://www.youtube.com',
      icon: RiYoutubeFill ,
    },
    {
      name: 'Instagram',
      path: 'https://www.instagram.com',
      icon: RiInstagramFill,
    },
    {
      name: 'Facebook',
      path: 'https://www.facebook.com',
      icon: RiFacebookFill,
    },
    {
      name: 'Linkedin',
      path: 'https://www.linkedin.com',
      icon: RiLinkedinFill ,
    },
    {
      name: 'Dribbble',
      path: 'https://www.dribbble.com',
      icon: RiTwitterFill,
    },
    {
      name: 'Pinterest',
      path: 'https://www.pinterest.com',
      icon: RiPinterestFill,
    },
  ]

