import BigTitle from "../BigTitle/page";

import SpeakerCard from "../SpeakerCard/page";
const speakersArray = [
  {
      name: "Dr. Jane Smith",
      title: "AI Researcher",
      description: "Dr. Jane Smith is an AI researcher with over 15 years of experience in deep learning and neural networks. She has published numerous papers and is a keynote speaker at various AI conferences worldwide.",
      image: "/speakers/speaker1.jpg"
  },
  {
      name: "John Doe",
      title: "Cloud Solutions Architect",
      description: "John Doe is a Cloud Solutions Architect who specializes in designing scalable cloud infrastructures. With a decade of experience in the industry, John has led multiple successful cloud migration projects.",
      image: "/speakers/speaker2.jpg"
  },
  {
      name: "Dr. Emily Zhang",
      title: "Backend Developer",
      description: "Dr. Emily Zhang is a renowned backend developer known for her expertise in building robust backend systems. She has been a guest lecturer at several prestigious universities and is passionate about teaching and mentoring.",
      image: "/speakers/speaker3.jpg"
  },
  {
      name: "Michael Brown",
      title: "Cybersecurity Expert",
      description: "Michael Brown is a cybersecurity expert with a focus on ethical hacking and network security. He has spoken at numerous cybersecurity seminars and has contributed to several open-source security tools.",
      image: "/speakers/speaker4.jpg"
  },
  {
      name: "Sarah Lee",
      title: "Data Scientist",
      description: "Sarah Lee is a data scientist who specializes in big data analytics and machine learning. She has worked with top tech companies to derive insights from large datasets and is a frequent speaker at data science meetups.",
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
