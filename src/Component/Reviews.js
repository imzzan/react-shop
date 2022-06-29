import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Tsparticles2 from './TsParticels2';

const Reviews = () => {
  return (
    <>
        <Tsparticles2/>
        <h1 className=' text-center text-2xl font-bold pt-5 mb-5 text-white'>Testimoni Pembeli</h1>
          <Carousel className=' p-2 w-full mx-auto bg-slate-400 rounded-xl pb-0'>
                <div>
                    <img src="/asset/4.jpg" alt='' className=' rounded-xl'/>
                    <p className="legend">Muhamad Muzani</p>
                </div>
                <div>
                    <img src="/asset/5.jpg" alt='' className=' rounded-xl'/>
                    <p className="legend">Hartati</p>
                </div>
                <div>
                    <img src="/asset/6.jpg" alt='' className=' rounded-xl'/>
                    <p className="legend">Deni Prasetya</p>
                </div>
            </Carousel>
        
    </>
    
  )
}

export default Reviews