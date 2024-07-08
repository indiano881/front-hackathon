import BigTitle from "../BigTitle/page";

import SpeakerCard from "../SpeakerCard/page";


const SpeakersArea = () => {
    return (
        <div className="h-full">
          <BigTitle text1={"OUR"} text2={"SPEAKERS"} />
          <div className="flex flex-col md:flex-row ">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          </div>
          
        </div>
    )
};

export default SpeakersArea
