import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Link from "next/link";




interface SpeakerCardProps {
    name: string
    title: string
    description: string
    image:  any
}

const SpeakerCard = ({name, title, description, image}:SpeakerCardProps) => {
    return (
        <Card className="py-4 bg-c-pink m-4 rounded-lg">
          
          <CardBody className="overflow-visible p-2 items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl items-center"
              src={image}
              width={270}
              height={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-bold  font-bold text-2xl">{name}</p>
            <p className="font-semibold italic"> {title}</p>
            <h4 className=" text-large pb-4">{description}</h4>
          </CardHeader>
          
        </Card>
      );
};

export default SpeakerCard
