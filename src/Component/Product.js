import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BsFillStarFill} from 'react-icons/bs';
import { DotLoader } from 'react-spinners';
import { ProductAnimation } from '../Animation/ProductAnimation';
import { BeliProduct } from '../Animation/ProductAnimation';
import { motion } from 'framer-motion';


const Product = ({BeliKeranjang}) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data: response } = await axios.get('https://fakestoreapi.com/products');
                setData(response)
            } catch (err) {
                console.log(err.message);
            }
        };
        getData()
    }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000 )
    }, [])


    return (
        <div className='bg-white h-[100%] pb-20'>
            <ul className='md:flex justify-center pt-20 md:gap-x-14 hidden'>
                <li className=' font-bold hover:border-b-2 border-black md:text-[1.1rem] text-sm cursor-pointer'>All</li>
                <li className=' font-bold hover:border-b-2 border-black md:text-[1.1rem] text-sm cursor-pointer'>Men's Fashion</li>
                <li className=' font-bold hover:border-b-2 border-black md:text-[1.1rem] text-sm cursor-pointer'>Woman's Fashion</li>
                <li className=' font-bold hover:border-b-2 border-black md:text-[1.1rem] text-sm cursor-pointer'>Jawelry</li>
                <li className=' font-bold hover:border-b-2 border-black md:text-[1.1rem] text-sm cursor-pointer'>Electronics</li>
            </ul>

            {
                loading ? <div className=' flex justify-center mt-10'><DotLoader size={80} color={'black'} loading={loading}/></div> :             <div className=' grid grid-cols-1 md:grid-cols-4 mt-16 mx-9 gap-10'>
                {
                    data.map((item) => {
                        return (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 mx-auto" key={item.id}>
                                <motion.img variants={ProductAnimation} whileHover='hover' className=" w-full h-[250px]" src={item.image} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.title.substring(0, 10)}</div>
                                    <p className="text-gray-700 text-base">
                                        {
                                            item.description.substring(0, 35)
                                        }
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${item.price}</p>
                                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><BsFillStarFill className='inline mb-1 mr-1 text-orange-600'/>{item.rating.rate}</p>
                                    <motion.button onClick={BeliKeranjang} variants={BeliProduct} whileHover='hover' className=' block bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-1 text-white'>Beli</motion.button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            }



        </div>
    )
}

export default Product