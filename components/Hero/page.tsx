import Image from "next/image";
import Davide from "../../public/davide.jpg"

const Hero = () => {
    return (
        <>
        <div className="flex h-full flex-row">
            <div className="flex flex-col">
                <p className="text-white">28&29 FEB 2026</p>
                <h2 className="text-white">Frontend</h2>
                <h2 className="text-white">athon</h2>
            </div>
            <div>
          <Image src={Davide} 
          width={500}
          height={500}
          alt="Picture of the author"/>
            </div>
        </div>

        <h1 className="text-white">What is Frontendathon?</h1>
        <h2 className="text-white">Frontendathon is an Hackathon with the main focus help students to learn, compete, enlarge their porfolio as never done before</h2>

        </>
    )
};

export default Hero
