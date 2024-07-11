import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Link from "next/link";


const mockSpeakers = [
  {
      name: "Dr. Jane Smith",
      title: "AI Researcher",
      description: "Dr. Jane Smith is an AI researcher with over 15 years of experience in deep learning and neural networks. She has published numerous papers and is a keynote speaker at various AI conferences worldwide.",
      image: "speaker1.jpg"
  },
  {
      name: "John Doe",
      title: "Cloud Solutions Architect",
      description: "John Doe is a Cloud Solutions Architect who specializes in designing scalable cloud infrastructures. With a decade of experience in the industry, John has led multiple successful cloud migration projects.",
      image: "speaker2.jpg"
  },
  {
      name: "Dr. Emily Zhang",
      title: "Backend Developer",
      description: "Dr. Emily Zhang is a renowned backend developer known for her expertise in building robust backend systems. She has been a guest lecturer at several prestigious universities and is passionate about teaching and mentoring.",
      image: "speaker3.jpg"
  },
  {
      name: "Michael Brown",
      title: "Cybersecurity Expert",
      description: "Michael Brown is a cybersecurity expert with a focus on ethical hacking and network security. He has spoken at numerous cybersecurity seminars and has contributed to several open-source security tools.",
      image: "speaker4.jpg"
  },
  {
      name: "Sarah Lee",
      title: "Data Scientist",
      description: "Sarah Lee is a data scientist who specializes in big data analytics and machine learning. She has worked with top tech companies to derive insights from large datasets and is a frequent speaker at data science meetups.",
      image: "speaker5.jpg"
  }
];

interface EventsCardProps {
    image:  any
}

const SpeakerCard = () => {
    return (
        <Card className="py-4 bg-c-pink m-4 rounded-lg">
          
          <CardBody className="overflow-visible p-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://media.istockphoto.com/id/1318435270/sv/vektor/kvinna-i-kostym-offentlig-talare-st%C3%A5r-bakom-ett-podium-politiskt-konferenskoncept-vektor.jpg?s=2048x2048&w=is&k=20&c=MSFf353ZYMDg3CNy72h1jJ4wt55h4nwJcHHdgvOLZC0="
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Davide baldi</p>
            <small className="text-default-500"> 9:00 - 28th Feb</small>
            <h4 className="font-bold text-large pb-4">Welcome the hackers and explain the event!</h4>
          </CardHeader>
          
        </Card>
      );
};

export default SpeakerCard
