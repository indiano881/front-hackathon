"use client"

import { Flex, Divider } from '@aws-amplify/ui-react';
import PrizeCard from '../PrizeCard/page';


const prizesData = [
    {
        text: "TITLE",
        text1: "WINNER",
        text2: "10,000 SEK",
        textColor: "c-purple",
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
        textColor: "blue",
        textColor1: "white"
    },

]



const PrizeArea = () => {
    return (
        <div className='h-full'>
            
            <div className='flex flex-row'>
                {prizesData.map((item, index)=> <PrizeCard text={item.text} text1={item.text1} text2={item.text2} textColor={item.textColor} textColor1={item.textColor1} index={index}/>)}
            </div>
        </div>
    )
};

export default PrizeArea
 