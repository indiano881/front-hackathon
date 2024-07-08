import BigTitle from "../BigTitle/page";
import EventsCard from "../EventsCard/page";
import UnderTitleText from "../UnderTitleText/page";
import Event1 from "../../../public/event1.jpeg"
import Event2 from "../../../public/ai.jpg"

const EventsArea = () => {
    return (
        <div className="h-full">
            <BigTitle text1={"FUTURE"} text2={"EVENTS"} />
            <UnderTitleText text={"Check out the upcoming and similar events! Coding is fun! Running an Hackathon is amazing!"} />
            <div className="flex flex-col md:flex-row justify-evenly m-6">
                <EventsCard  />
                <EventsCard  />
                <EventsCard  />
            </div>
        </div>
    )
};

export default EventsArea
