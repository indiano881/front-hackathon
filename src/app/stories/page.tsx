"use client";
import client from "../../../apolloClient";
import { gql } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div>
      <p>stories</p>
      {dataCleaned.map((item: any, index: number) => (
        <React.Fragment key={index}>
          <p>{item.title}</p>
          <p>{item.textLong}</p>
          <Image src={item.image[0].url} alt={item.title} height={500} width={500}/>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stories;
