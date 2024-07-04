import Image from "next/image";
import Davide from "../../../public/davide.jpg"
import HeroFooter from "../HeroFooter/page";
const Hero = () => {
    return (
        <>
        <div className="flex h-full flex-row m-6">
            <div className="flex flex-col ">
                <p className="text-c-pink h1">28 & 29 FEB 2026</p>
                <h2 className="text-c-green h1">Frontend</h2>
                <h2 className="text-white h1">athon</h2>
            </div>
            <div>
          <Image className="m-6"
          src={Davide} 
          width={500}
          height={500}
          alt="Picture of the author"/>
            </div>
        </div>
        <div className="flex flex-col w-[450px]">
            <h1 className="text-white h2">What is Frontendathon?</h1>
            <h2 className="text-c-pink h2">Frontendathon is an Hackathon with the main focus help students to learn, compete, enlarge their porfolio as never done before</h2>
        </div>
        <HeroFooter />
        </>
    )
};

export default Hero
