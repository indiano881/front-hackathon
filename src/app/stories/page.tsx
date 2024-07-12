import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import client from "../../../apolloClient"
import {gql} from "@apollo/client"

let dataCleaned:any
export async function getData() {
  
  const {data} = await client.query({
    query: gql`{davides{
      title
      slug
      textLong
      image {
        id
      }
    }}` 
  })
  console.log(data.davides)
  dataCleaned = data.davides;
  return dataCleaned
}
getData()
const stories = () => {
    return (
        <div>
          <p>stories</p>
          {dataCleaned.map((item: any, index: any)=> <div>
            <p> {item.title}</p>
            <p> {item.textLong}</p>
            <img src={item.image} alt={item.title} className=""/>
            </div>)}
        </div>
    )
};

export default stories


