'use client'
import React from 'react'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import { BsArrowBarRight } from 'react-icons/bs'
import ParticlesHero from './ParticalBackground'
function Hero() {

  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <div className='relative z-10 flex items-center'>
        <ParticlesHero />
      
<Image src="/images/18.jpg" alt="heroimage" width={350} height={350} className='rounded-2xl'/>

<h1 className='text-2xl mt-6 text-center font-bold tracking-wide'>

    Soundcore By Anker R50i NC True Wireless Earbuds <br />
    10mm Drivers with Big Bass,<br />
    Bluetooth 5.3,45H Playtime,IP54, <br />
    AI Clear Calls with 4 Mics, 22 Preset<br />
    EQs via App-Black,18 Months Warranty.</h1>

    <h2 className='mt-5 text-center font items-center text-2xl text-cyan-300 font-bold'>
  
<TypewriterComponent options={{
strings:[
    ' Anker Wireless Earbuds',
    ' 10mm Drivers with Big Bass',
    ' Bluetooth 5.3,45H Playtime,IP54',
    ' 18 Months Warranty!!'
],
autoStart: true,
loop: true,
delay: 75,
deleteSpeed:30,
wrapperClassName: "pl-2",

}} />
</h2>
<Image src="/images/14.jpg" alt="heroimage" width={350} height={350} className='rounded-2xl'/>
<h1 className='text-2xl mt-6 text-center font-bold tracking-wide'>

    Soundcore By Anker R50i NC True Wireless Earbuds <br />
    10mm Drivers with Big Bass,<br />
    Bluetooth 5.3,45H Playtime,IP54, <br />
    AI Clear Calls with 4 Mics, 22 Preset<br />
    EQs via App-Black,18 Months Warranty.</h1>

    <h2 className='mt-5 text-center font items-center text-2xl text-cyan-300 font-bold'>
    
<TypewriterComponent options={{
strings:[
    ' Anker Wireless Earbuds',
    ' 10mm Drivers with Big Bass',
    ' Bluetooth 5.3,45H Playtime,IP54',
    ' 18 Months Warranty!!'
],
autoStart: true,
loop: true,
delay: 75,
deleteSpeed:30,
wrapperClassName: "pl-2",

}} />
</h2>

<Image src="/images/16.jpg" alt="heroimage" width={350} height={350} className='rounded-2xl'/>
<h1 className='text-2xl mt-6 text-center font-bold tracking-wide'>
    Soundcore By Anker R50i NC True Wireless Earbuds <br />
    10mm Drivers with Big Bass,<br />
    Bluetooth 5.3,45H Playtime,IP54, <br />
    AI Clear Calls with 4 Mics, 22 Preset<br />
    EQs via App-Black,18 Months Warranty.</h1>

    <h2 className='mt-5 text-center font items-center text-2xl text-cyan-300 font-bold'>
    
<TypewriterComponent options={{
strings:[
    ' Anker Wireless Earbuds',
    ' 10mm Drivers with Big Bass',
    ' Bluetooth 5.3,45H Playtime,IP54',
    ' 18 Months Warranty!!'
],
autoStart: true,
loop: true,
delay: 75,
deleteSpeed:30,
wrapperClassName: "pl-2",

}} />
</h2>

<button className="mt-6 px-10 bg-blue-800 hover:bg-blue-900
 transition-all duration-200
cursor-pointer rounded-full font-bold text-3xl">

    <span>See our works</span>

    <BsArrowBarRight className="w-10 h-15 ml-10 inline-block justify-center" />
</button>
      </div>
    </div>
  )
}

export default Hero
