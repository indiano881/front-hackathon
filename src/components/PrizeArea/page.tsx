import PrizeCard from '../PrizeCard/page';
import Image from 'next/image';
import nerd from "../../../public/nerd.png"
import BigTitle from '../BigTitle/page';
import FormatCard from '../FormatCard';


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
            <BigTitle text1={'Amazing'} text2={'Prizes'} />
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
      src={nerd}
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
 