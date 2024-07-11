import BigTitle from "../BigTitle/page";
import EventsCard from "../EventsCard/page";
import UnderTitleText from "../UnderTitleText/page";
import Event1 from "../../../public/event1.jpeg"
import Event2 from "../../../public/ai.jpg"
import Event3 from "../../../public/cube.png"


const eventsArray:Array<any> = [
    {
        image: Event1,
        title: "AI-Hackathon",
        subtitle: "June 2026",
        description: "Challenge yourself in this Ai-deep learning competition!"
    },
    {
        image:  Event2, 
        title: "Cloud Hackathon",
        subtitle: "August 2026",
        description: "Dive into the world of cloud computing and showcase your skills in this Cloud Hackathon!"
    },
    {
        image: Event3, 
        title: "Backend Hackathon",
        subtitle: "October 2026",
        description: "Put your backend development skills to the test in this exciting Backend Hackathon!"
    }


]



const EventsArea = () => {
    return (
        <div className="h-full">
            <BigTitle text1={"FUTURE"} text2={"EVENTS"} />
            <UnderTitleText text={"Check out the upcoming and similar events! Coding is fun! Running an Hackathon is amazing!"} />
            <div className="flex flex-col md:flex-row justify-evenly m-6">
                {eventsArray.map((item, index)=> <EventsCard image={item.image} title={item.title} subtitle={item.subtitle} description={item.description} id={index} />)}
            </div>
        </div>
    )
};

export default EventsArea
