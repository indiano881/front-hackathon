



interface PrizeCardProps {
    text: string | null,
    text1: string | null,
    text2: string | null,
    textColor: string | null,
    textColor1: string | null,
    index: number | any | null
}

const PrizeCard = ({text, text1, text2, textColor, textColor1, index}:PrizeCardProps) => {
    return (
        <div className="flex flex-col p-8">
          <p className="h2 text-c-pink">{text} <span className={`h2 text-${textColor1}`}>{text1}</span></p>
          <p className={`h2 text-${textColor}`}>{text2}</p>
        </div>
    )
};

export default PrizeCard
