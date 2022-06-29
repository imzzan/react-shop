import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { AboutUsAnimation } from '../Animation/AboutUs';
import { TextAnimation } from '../Animation/AboutUs';
import AOS from 'aos';



const AboutUs = () => {

  useEffect(() => {
  AOS.init();
}, [])

  return (
    <div className=' h-[100%] bg-white p-10'>
      <div className=' md:flex justify-center mx-auto items-center gap-10 flex-1 shadow-sm shadow-slate-400 p-5'>
        <motion.img variants={AboutUsAnimation} initial='hidden' animate='visible' src="/asset/2.jpg" alt="" className=' md:w-1/2 rounded-3xl shadow-lg mx-auto w-full mb-5' />
        <motion.div variants={TextAnimation} initial='hidden' animate='visible' className=' text-center'>
          <h1 className=' text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt?</h1>
          <p className=' capitalize'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque iure quidem
            mollitia? Fuga, at deleniti aliquid, perspiciatis in dolorum dicta officiis officia
            repellat consequuntur tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit
            . Ex doloremque dolor voluptatibus veritatis! Laboru
            m pariatur natus, fugit earum sit necessitatibus iure in totam distinctio blanditiis!</p>
        </motion.div>
      </div>
      <div className=' md:flex justify-center mx-auto items-center gap-10 flex-1 shadow-sm shadow-slate-400 p-5 mt-16'>
        <div className=' text-center mb-5' data-aos="fade-left" data-aos-delay="200">
          <h1 className=' text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt?</h1>
          <p className=' capitalize'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque iure quidem
            mollitia? Fuga, at deleniti aliquid, perspiciatis in dolorum dicta officiis officia
            repellat consequuntur tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit
            . Ex doloremque dolor voluptatibus veritatis! Laboru
            m pariatur natus, fugit earum sit necessitatibus iure in totam distinctio blanditiis!</p>
        </div>
        <img data-aos="zoom-in" src="/asset/3.jpg" alt="" className=' md:w-1/2 rounded-3xl shadow-lg mx-auto w-full mb-5' />
      </div>
    </div>
  )
}

export default AboutUs