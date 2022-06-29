import React from 'react';
import { MdOutlineLogin } from 'react-icons/md';
import {BsFillLockFill} from 'react-icons/bs';
import Tsparticles from './Tsparticles';
import { motion } from 'framer-motion';
import { LoginAnimation } from '../Animation/LoginAnimation';

const LogIn = () => {
    return (
        <>
            <Tsparticles/>
            <motion.h1 variants={LoginAnimation} initial='hidden' animate='visible' className=' text-center text-white mt-10 text-2xl font-bold'>Log In</motion.h1>
            <motion.div variants={LoginAnimation} initial='hidden' animate='visible' className=' mx-auto bg-white p-5 md:w-1/2 rounded-xl mt-10 w-[90%]'>
                <div className=' p-5 bg-blue-500 rounded-lg mb-5'>
                    <div className=' text-white flex items-center'>
                        <MdOutlineLogin className=' font-bold text-3xl mr-5' />
                        <input type="text" name="nama" id="nama" className=' w-[100%] rounded-lg outline-none p-2 text-black' placeholder='Nama Lengkap'/>
                    </div>
                </div>
                <div className=' p-5 bg-blue-500 rounded-lg'>
                    <div className=' text-white flex items-center'>
                        <BsFillLockFill className=' font-bold text-3xl mr-5' />
                        <input type="password" name="password" id="password" className=' w-[100%] rounded-lg outline-none p-2 text-black' placeholder='Password'/>
                    </div>
                </div>
                <button className=' block mx-auto bg-blue-500 text-white p-3 mt-5 rounded-lg'>Submit</button>
            </motion.div>
        </>

    )
}

export default LogIn