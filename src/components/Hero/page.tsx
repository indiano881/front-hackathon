"use client"


import Image from "next/image";
import Davide from "../../../public/davide1.jpg"
import Star from "../../../public/parallax/star.png"
import HeroFooter from "../HeroFooter/page";
import { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";



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
                <Button as={Link} radius="full" color="primary" href="/registration" variant="flat" className=" hover:bg-c-pink hover:text-black shadow-lg cursor-pointer bg-c-green text-black text-[34px] font-semibold uppercase sm:ml-[100px] my-8 p-2 text-center w-[300px]">
            Register here
          </Button>
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
            
        <div className="flex flex-col m-6">
            <h1 className="text-white h2 uppercase font-bold  hidden lg:inline-block lg:text-[78px] xl:text-[98px] 2xl:text-[110px] pb-14 leading-normal whitespace-nowrap">
                <span className="esclamation">Pr</span>epare f<span className="esclamation">o</span>r <span className="esclamation">gre</span>atne<span className="esclamation">ss!</span>
                </h1>
                <h1 className="text-white h2 uppercase font-bold  text-[45px] sm:text-[55px] md:text-[90px] lg:hidden leading-normal">
                <span className="esclamation">Pr</span>epare f<span className="esclamation">o</span>r 
                </h1>
                <h1 className="text-white h2 uppercase font-bold  text-[45px] sm:text-[55px] md:text-[90px] lg:hidden leading-normal">
                <span className="esclamation">gre</span>atne<span className="esclamation">ss!</span>
                </h1>
        </div>
        
        <HeroFooter />
        </>
    )
};

export default Hero
