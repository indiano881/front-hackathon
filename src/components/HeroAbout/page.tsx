"use client"


import Image from "next/image";
import Davide from "../../../public/davide2.jpg"
import Star from "../../../public/parallax/star.png"
import HeroFooter from "../HeroFooter/page";
import { useEffect, useState } from "react";



const HeroAbout = () => {

   

    return (
        <>
        <div className="flex h-full  flex-col md:flex-row m-6 relative">
            <div className="flex flex-col ">
                
                <h2 className="text-c-green m1 sm:h1">About</h2>
                <h2 className="text-white m1 sm:h1">Us</h2>
            </div>
            <div>
          <Image className="sm:m-6 w-[300px] md:w-[450px] "
          src={Davide} 
          width={500}
          height={500}
          alt="Picture of the author"/>
            </div>
            
        
            </div>
        <div className="flex flex-col w-[300px] md:w-[450px] m-6">
            <h1 className="text-white h2">What is Frontendathon?</h1>
            <h2 className="text-c-pink h2 w-[300px] md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1530px]">Frontendathon is a unique Hackathon specifically designed to help students enhance their skills in front-end development. With a primary focus on learning and competition, this event provides a platform for students to gain hands-on experience, work on real-world projects, and significantly enlarge their portfolios. Participants have the opportunity to collaborate with peers, receive mentorship from industry professionals, and tackle various challenges that simulate real job scenarios. Throughout the Hackathon, students engage in intensive coding sessions, workshops, and seminars that cover the latest trends and technologies in front-end development. These activities are aimed at equipping students with the knowledge and skills necessary to succeed in the tech industry. Moreover, Frontendathon encourages creativity and innovation, allowing students to showcase their unique solutions and ideas. By participating in Frontendathon, students not only improve their technical abilities but also build valuable networks and enhance their resumes, making them more competitive in the job market</h2>
        </div>
        
        <HeroFooter />
        </>
    )
};

export default HeroAbout
