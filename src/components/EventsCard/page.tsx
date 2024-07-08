import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Link from "next/link";


interface EventsCardProps {
    image:  any
}

const EventsCard = () => {
    return (
        <Card className="py-4 bg-white m-4 rounded-lg">
          
          <CardBody className="overflow-visible p-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Musicackathon</p>
            <small className="text-default-500">Stockholm 2026</small>
            <h4 className="font-bold text-large pb-4">Challenge the best music artist in this faboulous event!</h4>
          </CardHeader>
          <Button radius="full"
            className="bg-d-purple text-white shadow-lg cursor-pointer hover:bg-c-pink hover:text-black mx-8 py-2"
            >
                <Link href="/registration">
                Register here
                </Link>
            
        </Button>
        </Card>
      );
};

export default EventsCard
