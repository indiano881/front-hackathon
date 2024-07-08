import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Link from "next/link";


interface ScheduleCardProps {
    day: string,
    text: string
}

const ScheduleCard = ({day, text}:ScheduleCardProps) => {
    return (
        <Card className="py-4 bg-c-pink m-4 rounded-lg">
          
          
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="p1 bg-black px-2 text-white">{day}</p>
            <p className="h2 tex-white"> {text}</p>
            
          </CardHeader>
          
        </Card>
      );
};

export default ScheduleCard
