"use client";
import client from "../../../apolloClient";
import { gql } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BigTitle from "@/components/BigTitle/page";
import Background from "@/components/Background/page";

async function getData() {
  const { data } = await client.query({
    query: gql`
      {
        davides {
          title
          slug
          textLong
          image {
            id
            url
          }
        }
      }
    `,
  });
  console.log(data.davides);
  return data.davides;
}

const Stories = () => {
  const [dataCleaned, setDataCleaned] = useState<any[]>([]);

  useEffect(() => {
    getData().then((data) => {
      setDataCleaned(data);
    });
  }, []);
  console.log(dataCleaned)
  const baseURL= "https://eu-central-1-shared-euc1-02.graphassets.com/clyh94fzz040h06w509j46b34/"
  return (
  <>
  <BigTitle text1={"Our"} text2={"Stories"} />
  
  <div className="flex flex-col md:flex-row">
      
      {dataCleaned.map((item: any, index: number) => (
        <div key={index} className="bg-white rounded-lg m-6 w-[300px] flex flex-col items-center">
          <Image src={item.image[0].url} alt={item.title} height={200} width={300} className="m-2"/>
          <p className="font-bold">{item.title}</p>
          <p>{item.textLong.split(' ').slice(0, 50).join(' ') + '...'}</p>

          
        </div>
      ))}
    </div>
  
  
  </>
    
  );
};

export default Stories;
