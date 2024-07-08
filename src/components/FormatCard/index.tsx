"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface FormatCardProps {
    heading: string
    text: string
    transition: number
}

const FormatCard = ({ heading, text, transition }:FormatCardProps) => {
    return (
        <>
            <motion.div className="bg-d-purple rounded-lg mx-6 w-[100%] md:w-[29%] overflow-hidden h-full pb-6 sm:pb-3 "
                initial={{
                    opacity: 0,
                    y: 80
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: transition 
                    }
                }}
                viewport={{ once: false }}
            >
                
                    
                <div className="flex flex-col items-centercenter">
                <h3 className="font-bold h1 mx-6 text-c-pink">{heading}</h3>
                <p className="mx-6 h2 text-white">{text}</p>

                </div>
               
                
            </motion.div>   
        </>
    )
};

export default FormatCard
