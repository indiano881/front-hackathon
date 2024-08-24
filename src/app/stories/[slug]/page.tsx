"use client";

import { useEffect, useState } from "react";
import client from "../../../../apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image"; // Import Image component from next/image
import Link from "next/link";

// Define types for the data
interface ImageData {
  id: string;
  url: string;
}

interface StoryData {
  title: string;
  slug: string;
  textLong: string;
  image: ImageData[];
}

async function getData(): Promise<StoryData[]> {
  try {
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
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const SingleStory = ({ params }: { params: { slug: string } }) => {
  const [dataCleaned, setDataCleaned] = useState<StoryData[]>([]);
  const [story, setStory] = useState<StoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const filteredArticle = data.find((project) => project.slug === params.slug);
        setStory(filteredArticle || null);
        setDataCleaned(data);
      } catch (error) {
        console.error("Error processing data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [params.slug]);

  const baseURL = "https://eu-central-1-shared-euc1-02.graphassets.com/clyh94fzz040h06w509j46b34/";

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!story) {
    return <p>No story found.</p>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center">
        <div className="bg-white rounded-lg m-6 w-[300px] md:w-[600px] flex flex-col items-center justify-center">
          {story.image.length > 0 && (
            <Image
              src={`${story.image[0].url}`}
              alt={story.title}
              height={200}
              width={600}
              className="m-2"
            />
          )}
          <p className="font-bold">{story.title}</p>
          <p>{story.textLong}</p>
          <Link href={`/stories`} className="hover:text-grey1 underline font-bold">Back to stories</Link>
        </div>
      </div>
    </>
  );
};

export default SingleStory;
