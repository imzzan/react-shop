import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIdentitas, identitasSelector, deleteIdentitas } from '../features/identitasSlice';
import {Link} from 'react-router-dom';

const Acount = () => {

  const dispatch = useDispatch();
  const data = useSelector(identitasSelector.selectAll);

  useEffect(() => {
    dispatch(getIdentitas())
  }, [])

  return (
    <div>
      {
        data.map((item) => {
          return (
            <div className=' md:w-1/2 mx-auto mt-10 border border-white bg-white p-3 rounded-sm'>
              <img src="/asset/person-icon.png" alt="profile" className=' rounded-full md:w-[100px] w-[50px] mx-auto p-2 border-2 border-gray-500' />
              <h1 className=' text-center font-bold text-sm'>{item.nama}</h1>
              <div className=' mt-6'>
                <p className=' text-sm'>No Hanphone <span className=' ml-9'>: {item.number}</span></p>
                <p className=' text-sm'>Alamat Rumah <span className=' ml-8 '>: {item.alamat}</span></p>
              </div>
              <Link to='/editprofile'><button className=' mt-5 bg-blue-600 px-2 text-white mr-5 rounded-sm shadow-md'>Edit Profile</button></Link>
              <button onClick={() => dispatch(deleteIdentitas(item.id))} className=' mt-5 bg-red-600 text-white px-2 rounded-sm shadow-md'>Hapsu Profile</button>
            </div>
          )
        })
      }

    </div>

  )
}

export default Acount