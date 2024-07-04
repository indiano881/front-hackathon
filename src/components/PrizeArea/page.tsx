import PrizeCard from '../PrizeCard/page';
import Image from 'next/image';
import cube from "../../../public/davide1.jpg"


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
        textColor: "c-yellow",
        textColor1: "white"
    },

]


const PrizeArea = () => {
    return (
        <div className='h-full'>
            
            <div className='flex flex-row'>
                {prizesData.map((item, index)=> <PrizeCard 
                text={item.text} 
                text1={item.text1} 
                text2={item.text2} 
                textColor={item.textColor} 
                textColor1={item.textColor1} 
                index={index}/>)}
            </div>

            <div className='flex flex-row'>
            <Image className='p-8 '
      src={cube}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <div className='flex flex-col'>
        <p className='h2 text-c-pink'>Registration for free</p> 
        <p className='h2 text-white'>Appplication closes</p>
        <p className='h1 text-white'>February 20th</p> 

    </div>


            </div>
        </div>
    )
};

export default PrizeArea
 