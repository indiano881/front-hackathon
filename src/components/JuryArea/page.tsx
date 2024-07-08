import BigTitle from "../BigTitle/page";
import DinamicCard from "../DinamicCard";
import nerd from "../../../public/nerd.png"

const JuryArea = () => {
    return (
        <div>
          <BigTitle text1={"THE"} text2={"JURY"} />
          <div className="flex flex-row mx-6 justify-around">
          <DinamicCard staffImg={nerd} hueA={0} hueB={0} text1={"Davide Baldi"} text2={"CTO at Spotify"} />
          <DinamicCard staffImg={nerd} hueA={0} hueB={0} text1={"Davide Baldi"} text2={"CTO at Spotify"} />
          <DinamicCard staffImg={nerd} hueA={0} hueB={0} text1={"Davide Baldi"} text2={"CTO at Spotify"} />
          </div>
        </div>
    )
};

export default JuryArea
