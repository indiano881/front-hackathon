"use client"


import Image from "next/image";
import Davide from "../../../public/davide1.jpg"
import Star from "../../../public/parallax/star.png"
import HeroFooter from "../HeroFooter/page";
import { useEffect, useState } from "react";



const Hero = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY)


    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
        <div className="flex h-full  flex-col md:flex-row m-6 relative">
            <div className="flex flex-col ">
                <p className="text-c-pink m1 sm:h1">26, 27 & 28 FEB 2026</p>
                <h2 className="text-c-green m1 sm:h1">Frontend</h2>
                <h2 className="text-white m1 sm:h1">Hackathon</h2>
            </div>
            <div>
          <Image className="sm:m-6 w-[300px] md:w-[450px]"
          src={Davide} 
          width={500}
          height={500}
          alt="Picture of the author"/>
            </div>
            <Image className="sm:m-6 w-[75px] h-[75px] md:w-[100px] md:h-[100px] z-50 absolute hidden lg:inline-block lg:right-[100px]" style={{transform: `translateY(${offsetY * -0.4}px)` }}
          src={Star} 
          width={50}
          height={50}
          alt="Picture of the author"/>
        
            </div>
        <div className="flex flex-col w-[300px] md:w-[450px] m-6">
            <h1 className="text-white h2">What is Frontendathon?</h1>
            <h2 className="text-c-pink h2 w-[300px] md:w-[600px]">Frontendathon is an Hackathon with the main focus help students to learn, compete, enlarge their porfolio as never done before</h2>
        </div>
        
        <HeroFooter />
        </>
    )
};

export default Hero
