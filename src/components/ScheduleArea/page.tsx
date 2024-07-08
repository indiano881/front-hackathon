import BigTitle from "../BigTitle/page";
import ScheduleCard from "../ScheduleCard/page";
import UnderTitleText from "../UnderTitleText/page";

const scheduleItems = [
  {
    day: "Day 1",
    text: "Kickoff and Orientation"
  },
  {
    day: "Day 2",
    text: "Building and Collaborating"
  },
  {
    day: "Day 3",
    text: "Presenting and Judging"
  }
]

const ScheduleArea = () => {
    return (
        
        <div className="h-full">
          <BigTitle text1={"3 DAYS"} text2={"HACKATHON"} />
          <UnderTitleText text={"Connect with designers worldwide, celebrating world-class content and forging connections across industries, verticlas and geographical boundaries."} />
          <div className="flex flex-col md:flex-row items-left md:justify-center">
              {scheduleItems.map((item, index)=> <ScheduleCard day={item.day} text={item.text} />)}
          </div>
        </div>
    )
};

export default ScheduleArea
