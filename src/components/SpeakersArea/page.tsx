import BigTitle from "../BigTitle/page";

import SpeakerCard from "../SpeakerCard/page";
const speakersArray = [
    {
        name: "Dr. John Smith",
        title: "AI Researcher",
        description: "Dr. John Smith, an AI expert with 15+ years in deep learning, is a frequent keynote at global AI conferences.",
        image: "/speakers/speaker1.jpg"
    },
    {
        name: "John Doe",
        title: "Cloud Solutions Architect",
        description: "John Doe, a Cloud Architect with 10 years' experience, has led successful cloud migration projects.",
        image: "/speakers/speaker2.jpg"
    },
    {
        name: "Dr. Emily Zhang",
        title: "Backend Developer",
        description: "Dr. Emily Zhang, a backend developer, is known for her robust systems and passion for teaching.",
        image: "/speakers/speaker3.jpg"
    },
    {
        name: "Michele Brown",
        title: "Cybersecurity Expert",
        description: "Michele Brown specializes in ethical hacking and network security, speaking at top cybersecurity events.",
        image: "/speakers/speaker4.jpg"
    },
    {
        name: "Marco Rodriguez",
        title: "Data Scientist",
        description: "Marco Rodriguez, a data scientist, excels in big data analytics and machine learning.",
        image: "/speakers/speaker5.jpg"
    }
  ];
  

const SpeakersArea = () => {
    return (
        <div className="h-full">
          <BigTitle text1={"OUR"} text2={"SPEAKERS"} />
          <div className="flex flex-col md:flex-row ">
          {speakersArray.map((item, index)=> <SpeakerCard 
          name={item.name} 
          title={item.title} 
          description={item.description} 
          image={item.image} />)}
          </div>
          
        </div>
    )
};

export default SpeakersArea
