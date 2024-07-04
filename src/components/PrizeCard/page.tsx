



interface PrizeCardProps {
    text: string,
    text1: string,
    text2: string,
    textColor: string,
    textColor1: string,
    index: number | any
}

const PrizeCard = ({text, text1, text2, textColor, textColor1, index}:PrizeCardProps) => {
    return (
        <div className="flex flex-col p-8">
          <p className="h2">{text} <span className={`h2 text-${textColor1}`}>{text1}</span></p>
          <p className={`h2 text-${textColor}`}>{text2}</p>
        </div>
    )
};

export default PrizeCard
