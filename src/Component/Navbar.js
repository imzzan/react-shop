import React, {useState} from 'react';
import {MdOutlineLogin, MdPersonAddAlt} from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavbarAnimation } from './../Animation/NavbarAnimation';
import { LogoAnimation } from './../Animation/NavbarAnimation';

const Navbar = () => {
const [nav, setNav] = useState(true);

const handleClick = () => {
    setNav(!nav)
}

return (
    <>
    <div className=' flex justify-between items-center h-16 text-white max-w-[1204px] mx-auto px-4'>
        <motion.h1 variants={NavbarAnimation} initial='hidden' animate='visible' whileHover='hover' className=' text-2xl font-bold cursor-pointer'><Link to='/'>ZANZAN.SHOP</Link></motion.h1>
        <motion.ul variants={NavbarAnimation} initial='hidden' animate='visible' className=' hidden md:flex'>
            <motion.li variants={LogoAnimation} whileHover='hover' className='p-4 cursor-pointer'><Link to='/'>Home</Link></motion.li>
            <motion.li variants={LogoAnimation} whileHover='hover' className='p-4 cursor-pointer'><Link to='/product'>Product</Link></motion.li>
            <motion.li variants={LogoAnimation} whileHover='hover' className='p-4 cursor-pointer'><Link to='/aboutus'>About Us</Link></motion.li>
            <motion.li variants={LogoAnimation} whileHover='hover' className='p-4 cursor-pointer'><Link to='/reviews'>Reviews</Link></motion.li>
        </motion.ul>
        <motion.ul variants={NavbarAnimation} initial='hidden' animate='visible' className=' hidden md:flex'>
            <li className=' p-2 border rounded-sm mx-3 cursor-pointer'><Link to='/login'>Login <MdOutlineLogin className=' inline'/></Link></li>
            <li className=' p-2 border rounded-sm mx-3 cursor-pointer'><Link to='/signin'>Signin<MdPersonAddAlt className=' inline'/></Link></li>
            <li className=' p-2 border rounded-sm mx-3 cursor-pointer'><Link to='/acount'>Account<BsPersonCircle className=' inline ml-1'/></Link></li>
        </motion.ul>
        <div className=' block md:hidden cursor-pointer' onClick={handleClick}>
            {
                nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>
            }
        </div>
        <ul className={nav ? 'fixed left-[-100%]' : ' fixed top-0 left-0 w-[50%] h-full border-r border-r-gray-500 bg-white ease-in-out duration-500 text-black p-6 z-10' }>
            <h1 className=' text-2xl font-bold m-4 w-full'><Link to='/'>ZANZAN.COM</Link></h1>
            <li className='p-4 border-b border-b-gray-800 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='p-4 border-b border-b-gray-800 cursor-pointer'><Link to='/product'>Product</Link></li>
            <li className='p-4 border-b border-b-gray-800 cursor-pointer'><Link to='/aboutus'>About Us</Link></li>
            <li className='p-4 cursor-pointer border-b border-b-gray-800'><Link to='/reviews'>Reviews</Link></li>
            <li className=' p-2 border rounded-sm cursor-pointer'><Link to='/login'>Login <MdOutlineLogin className=' inline'/></Link></li>
            <li className=' p-2 border rounded-sm cursor-pointer'><Link to='/signin'>Signin <MdPersonAddAlt className=' inline'/></Link></li>
            <li className=' p-2 border rounded-sm cursor-pointer'><Link to='/acount'>Account <BsPersonCircle className=' inline ml-1'/></Link></li>
        </ul>
    </div>
    </>
)
}

export default Navbar