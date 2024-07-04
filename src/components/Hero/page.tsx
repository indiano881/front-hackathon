import Image from "next/image";
import Davide from "../../../public/davide.jpg"

const Hero = () => {
    return (
        <>
        <div className="flex h-full flex-row">
            <div className="flex flex-col">
                <p className="text-c-pink">28&29 FEB 2026</p>
                <h2 className="text-c-green">Frontend</h2>
                <h2 className="text-c-green">athon</h2>
            </div>
            <div>
          <Image src={Davide} 
          width={300}
          height={300}
          alt="Picture of the author"/>
            </div>
        </div>

        <h1 className="text-white">What is Frontendathon?</h1>
        <h2 className="text-c-pink">Frontendathon is an Hackathon with the main focus help students to learn, compete, enlarge their porfolio as never done before</h2>

        </>
    )
};

export default Hero
