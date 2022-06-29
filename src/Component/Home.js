import React from 'react';
import Typed from 'react-typed';
import  {Link} from 'react-router-dom';
import Tsparticles from './Tsparticles';
import { motion } from 'framer-motion';
import { HomeAnimation } from '../Animation/HomeAnimation';
import { buttonAnimation } from '../Animation/HomeAnimation';

const Home = () => {
  return (
    <>
      <Tsparticles/>    
    <div className=' text-white'> 
        <div className='  max-w-[800px] mt-[-98px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <motion.p variants={HomeAnimation} initial='hidden' animate='visible' className=' font-bold'>Selamat Datang dan Selamat Berbelanja di</motion.p>
        <motion.h1 variants={HomeAnimation} initial='hidden' animate='visible' className='  md:text-7xl sm:text-6xl text-4xl font-bold mt-0 md:py-3'>ZANZAN.SHOP</motion.h1>
        <motion.p variants={HomeAnimation} initial='hidden' animate='visible'>Penuhi Sumua kebutuhan mu mulai dari <Typed className=' text-green-500' strings={['Baju!', 'Celana!', 'Perhiasan!', 'Electronics!A']} typeSpeed={120} backSpeed={140} loop/></motion.p>
        <motion.button variants={buttonAnimation} initial='hidden' animate='visible' whileHover='hover' className='  bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3'><Link to='/product'>Get Started</Link></motion.button>
        </div>
    </div>  
    </>

  )
}

export default Home