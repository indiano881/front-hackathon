"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import "./styles.css";
import { motion, Variants } from "framer-motion";



const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

interface StaffCardProps {
    staffImg: any;
    hueA: number;
    hueB: number;
    text1: string;
    text2: string;
  }
const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
const StaffCard= ({staffImg,hueA,hueB,text1, text2}:StaffCardProps) => {
  const background = 'linear-gradient(306deg, #DDA0DD, #DDA0DD)';
  return (
    <motion.div
      className="overflow-hidden flex items-center justify-center relative  p-5 pb-16 md:pb-14 sm:p-6"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="flex flex-col sm:basis-2/3 items-center pb-16 z-20 w-[300px] h-[350px] justify-center bg-white rounded-[20px] shadow-[0_0_1px_hsl(0deg_0%_0%/_0.075),0_0_2px_hsl(0deg_0%_0%/_0.075),0_0_4px_hsl(0deg_0%_0%/_0.075),0_0_8px_hsl(0deg_0%_0%/_0.075),0_0_16px_hsl(0deg_0%_0%/_0.075)] origin-[10%_60%] sm:w-[500px] sm:h-[430px] sm:p-6" variants={cardVariants}>
      <Image
          className="rounded-lg mx-2"
          src={staffImg}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <p className="text-2xl text-black font-bold text-center py-2">{text1}</p>
        <p className="h4 text-black font-semibold italic pr-2 pl-2 text-center">{text2}</p>
      </motion.div>
    </motion.div>
  );
};

export default StaffCard
