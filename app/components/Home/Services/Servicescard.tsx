import React from 'react'
import Image from 'next/image';
type Props = {
icon: string;
name: string;
description: string;
};

const Servicescard = ({description, icon, name}:Props) => {
  return (
    <div>
     <Image src={icon} alt="img" width={60} height={60} />
     <h1 className='mt-6 text-4xl font-bold text-gray-200'>{name}</h1>
     <p className='mt-6 text-gray-400 text-2xl'>{description}</p>
    </div>
  )
};

export default Servicescard
