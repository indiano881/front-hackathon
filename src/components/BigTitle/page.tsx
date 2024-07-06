interface BigTitleProps {
    text1: string,
    text2: string
}
    
const BigTitle = ({text1, text2}:BigTitleProps) => {
        return (
            <>
            <div>
              <p className="h1 text-c-green">{text1}</p>
              <p className="h1 text-white">{text2}</p>
            </div>
            </>
        )
};
    
export default BigTitle
     