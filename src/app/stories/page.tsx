"use client"
import client from "../../../apolloClient"
import {gql} from "@apollo/client"
import React from "react";

let dataCleaned:any
async function getData() {
  
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


  
  console.log(dataCleaned)
    return (
        <div>
          <p>stories</p>
          {dataCleaned.map((item: any, index: any)=> <>
            <p> {item.title}</p>
            <p> {item.textLong}</p>
            
            
            </>)}
            
        </div>
    )
};

export default stories


