"use client"

import PrizeCard from '../PrizeCard/page';
import Image from 'next/image';
import nerd from "../../../public/nerd.png"
import BigTitle from '../BigTitle/page';
import FormatCard from '../FormatCard';
import { useEffect, useState } from 'react';
import Gold from "../../../public/parallax/diamond.png"
import { Button, Link } from '@nextui-org/react';

const prizesData = [
    {
        text: "TITLE",
        text1: "WINNER",
        text2: "10,000 SEK",
        textColor: "c-pink",
        textColor1: "white"
    },
    {
        text: "FIRST",
        text1: "RUNNER UP",
        text2: "5,000 SEK",
        textColor: "c-green",
        textColor1: "white"
    },
    {
        text: "SECOND",
        text1: "RUNNER UP",
        text2: "3,000 SEK",
        textColor: "white",
        textColor1: "white"
    },

]


const PrizeArea = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY)


    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className='h-full'>
            <BigTitle text1={'Amazing'} text2={'Prizes'} />
            <div className='flex flex-col md:flex-row items-left md:justify-center'>
                {prizesData.map((item, index)=> <PrizeCard 
                text={item.text} 
                text1={item.text1} 
                text2={item.text2} 
                textColor={item.textColor} 
                textColor1={item.textColor1} 
                index={index}/>)}
            </div>

            <div className='flex flex-col md:flex-row md:justify-center'>
            <Image className='sm:p-8 mx-6 w-[300px] md:w-[450px]'
      src={nerd}
      width={450}
      height={450}
      alt="Picture of the author"
    />
    <Image className="sm:m-6 w-[75px] h-[75px] md:w-[100px] md:h-[100px] z-50 absolute hidden lg:inline-block lg:left-[450px]" style={{transform: `translateY(${offsetY * -0.4}px)` }}
          src={Gold} 
          width={250}
          height={250}
          alt="Picture of the author"/>
    <div className='flex flex-col m-6 md:mx-8 p-8'>
        <p className='h2 text-c-pink'>Registration for free</p> 
        <p className='h2 text-white'>Appplication closes</p>
        <p className='m1 sm:h1 text-white'>February 20th</p> 
        <Button as={Link} radius="full" color="primary" href="/registration" variant="flat" className=" hover:bg-c-pink hover:text-black shadow-lg cursor-pointer bg-c-green text-black text-[38px] lg:ml-[100px] my-8 p-2 text-center w-[300px]">
            Register here
          </Button>
    </div>


            </div>
            <div className="flex flex-col md:flex-row m-8 justify-between items-center">
            <FormatCard  heading={"3+"} text={"FORMAT"} transition={0.2} />
            <FormatCard  heading={"5+"} text={"WORKSHOPS"} transition={0.4} />
            <FormatCard  heading={"10K"} text={"PRIZES"} transition={0.6} />
            <FormatCard  heading={"100%"} text={"FUN"} transition={0.6} />
          </div>
        </div>
    )
};

export default PrizeArea
 