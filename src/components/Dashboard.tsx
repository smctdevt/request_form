import React, { useState } from 'react';
import Man from './assets/manComputer.svg'
type Props = {};

const Dashboard: React.FC<Props> = ({}) => {
  const [darkMode, setDarkMode]= useState(true);
  return (
    <div className='bg-graybg  h-full pt-[26px] px-[30px]'>
      <div className='bg-primary w-full h-[210px] rounded-[12px] pl-[30px] flex flex-row justify-between items-center'>
        <div>
        <p className='text-[20px] pt-[22px]'>Hi, Kylie 👋</p>
        <p className='text-[20px] text-white font-semibold mt-[23px]'>Welcome to Request</p>
        <p className='text-[16px] text-white mt-2'>Request products and services</p>
        </div>
      <div className='ml-4 mr-[29px]'>
        <img alt='man' src={Man} width={320} height={176}/>
      </div>
      </div>
      <div className='grid grid-cols-3'>
        
      </div>
      <button onClick={() => setDarkMode(!darkMode)}></button>
    </div>
  );
}

export default Dashboard;