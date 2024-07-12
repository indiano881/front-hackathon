import BigTitle from "../BigTitle/page";
import DinamicCard from "../DinamicCard";
import nerd from "../../../public/nerd.png"
const judgeArray = [
  {
      name: "Dr. Jane Smith",
      title: "AI Researcher",
      description: "Dr. Jane Smith is an AI researcher with over 15 years of experience in deep learning and neural networks. She has published numerous papers and is a keynote speaker at various AI conferences worldwide.",
      image: "/judges/judge1.jpg"
  },
  {
      name: "John Doe",
      title: "Cloud Solutions Architect",
      description: "John Doe is a Cloud Solutions Architect who specializes in designing scalable cloud infrastructures. With a decade of experience in the industry, John has led multiple successful cloud migration projects.",
      image: "/judges/judge2.png"
  },
  {
      name: "Dr. Emily Zhang",
      title: "Backend Developer",
      description: "Dr. Emily Zhang is a renowned backend developer known for her expertise in building robust backend systems. She has been a guest lecturer at several prestigious universities and is passionate about teaching and mentoring.",
      image: "/judges/judge3.jpg"
  }
];
const JuryArea = () => {
    return (
        <div>
          <BigTitle text1={"THE"} text2={"JURY"} />
          <div className="flex flex-col lg:flex-row mx-6 items-left lg:justify-around">


            {judgeArray.map((item, index)=> <DinamicCard staffImg={item.image} hueA={0} hueB={0} text1={item.name} text2={item.title} />)}
          
          </div>
        </div>
    )
};

export default JuryArea
