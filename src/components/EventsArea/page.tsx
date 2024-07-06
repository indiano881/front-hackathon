import BigTitle from "../BigTitle/page";
import UnderTitleText from "../UnderTitleText/page";


const EventsArea = () => {
    return (
        <div className="h-full">
            <BigTitle text1={"FUTURE"} text2={"EVENTS"} />
            <UnderTitleText text={"Check out the upcoming and similar events! Coding is fun! Running an Hackathon is amazing!"} />
          
        </div>
    )
};

export default EventsArea
