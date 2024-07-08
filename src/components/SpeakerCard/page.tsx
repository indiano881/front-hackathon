import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Link from "next/link";


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
