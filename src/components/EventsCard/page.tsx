import React from "react";
import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";
import Image  from "next/image";

import Link from "next/link";
import { StaticImageData } from "next/image";


interface EventsCardProps {
    image:   StaticImageData | string,
    title: string,
    subtitle: string,
    description: string,
    id: number
}

const EventsCard = ({image, title, subtitle, description, id}:EventsCardProps) => {
    return (
        <Card className="py-4 bg-white m-4 rounded-lg max-w-[330px]">
          
          <CardBody className="overflow-visible p-2 items-center">
            <Image
              alt={title}
              className="object-cover rounded-xl"
              src={image}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{title}</p>
            <small className="text-default-500">{subtitle}</small>
            <h4 className="font-bold text-large pb-4">{description}</h4>
          </CardHeader>
          <Button radius="full"
            className="hover:bg-d-purple hover:text-white shadow-lg cursor-pointer bg-c-pink text-black mx-8 py-2"
            >
                <Link href="/registration">
                Register here
                </Link>
            
        </Button>
        </Card>
      );
};

export default EventsCard
