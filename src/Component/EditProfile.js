import React, {useState, useEffect} from 'react';
import { MdOutlineLogin, MdOutlineLocationOn} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import Tsparticles from './Tsparticles';
import { motion } from 'framer-motion';
import { LoginAnimation } from '../Animation/LoginAnimation';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getIdentitas, identitasSelector, updateIdentitas} from '../features/identitasSlice';

const EditProfile = () => {

    const [nama, setName] = useState('');
    const [number, setNumber] = useState('');
    const [alamat, setAlamat] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const data = useSelector((state) => identitasSelector.selectById(state, id));


    useEffect(() => {
        dispatch(getIdentitas())
    }, [])

    useEffect(() => {
        if(data) {
            setName(data.nama)
            setNumber(data.number)
            setAlamat(data.alamat)
        }
    }, data)

    const handleSubmit = async(e) => {
        e.preventDefault();
        await dispatch(updateIdentitas({nama, number, alamat, id}))
        navigate('/acount')
    }


    return (
        <>
            <Tsparticles/>
            <motion.h1 variants={LoginAnimation} initial='hidden' animate='visible' className=' text-center text-white mt-10 text-2xl font-bold'>Edit Profile</motion.h1>
            <motion.form onSubmit={handleSubmit} variants={LoginAnimation} initial='hidden' animate='visible' className=' mx-auto bg-white p-3 md:w-1/2 rounded-xl mt-10 w-[90%]'>
                <div className=' p-2 bg-blue-500 rounded-lg mb-5'>
                    <div className=' text-white flex items-center'>
                        <MdOutlineLogin className=' font-bold text-2xl mr-2' />
                        <input type="text" name="nama" id="nama" value={nama} onChange={(e) => setName(e.target.value)} className=' w-[100%] rounded-lg pl-2 outline-none text-black text-sm' placeholder='Nama Lengkap'/>
                    </div>
                </div>
                <div className=' p-2 bg-blue-500 rounded-lg mb-5'>
                    <div className=' text-white flex items-center'>
                        <BsFillTelephoneFill className=' font-bold text-2xl mr-2' />
                        <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} className=' w-[100%] pl-2 rounded-lg outline-none text-black text-sm' placeholder='No Handphone'/>
                    </div>
                </div>
                <div className=' p-2 bg-blue-500 rounded-lg'>
                    <div className=' text-white flex items-center'>
                        <MdOutlineLocationOn className=' font-bold text-2xl mr-2' />
                        <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className=' w-[100%] pl-2 rounded-lg outline-none text-black text-sm' placeholder='Alamat Lengkap'/>
                    </div>
                </div>
                <button className=' block mx-auto bg-blue-500 text-white px-3 mt-5 rounded-lg'>Edit Profile</button>
            </motion.form>
        </>

    )
}

export default EditProfile