interface UnderTitleTextProps {
    text:string
}

const UnderTitleText = ({text}:UnderTitleTextProps) => {
    return (
        <p className="p1 text-white mx-6 max-w-[330px]">{text}</p>
    )
};

export default UnderTitleText
