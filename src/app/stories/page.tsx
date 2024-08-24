"use client";
import client from "../../../apolloClient";
import { gql } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BigTitle from "@/components/BigTitle/page";
import Background from "@/components/Background/page";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
  const pathname = usePathname();
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
  <div className="flex flex-col w-[300px] md:w-[450px] m-6">
    <h1 className="text-white h2">Lates news</h1>
    <h2 className="text-c-pink h2 w-[300px] md:w-[740px] lg:w-[1000px] xl:w-[1240px] 2xl:w-[1530px] text-justify">
        Our stories reflect the diverse experiences and journeys of individuals who have shaped our community. Through personal narratives, we celebrate the challenges, triumphs, and milestones that have defined our collective path. These stories are a testament to the resilience, creativity, and passion that drive us forward. They offer a glimpse into the lives of those who have dared to dream, innovate, and make a difference. 
    </h2>
</div>

  <div className="flex flex-col md:flex-row md:justify-evenly">
      
      {dataCleaned.map((item: any, index: number) => (
        <div key={index} className="bg-white rounded-lg m-6 w-[300px] flex flex-col items-center">
          <Image src={item.image[0].url} alt={item.title} height={200} width={300} className="m-2"/>
          <p className="font-bold">{item.title}</p>
          <p>{item.textLong.split(' ').slice(0, 50).join(' ') + '...'}</p>

          <Link
                              href={`/stories/${item.slug}`}
                              className="hover:text-grey1 underline font-bold"
                                  >
                                Read more
                      </Link>
        </div>
      ))}
    </div>
  
  
  </>
    
  );
};

export default Stories;
