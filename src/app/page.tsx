import Image from "next/image";
import Hero from "../components/Hero/page"
import PrizeArea from "@/components/PrizeArea/page";
import ScheduleArea from "@/components/ScheduleArea/page";
import SpeakersArea from "@/components/SpeakersArea/page";
import EventsArea from "@/components/EventsArea/page";

export default function Home() {
  return (
    <main className="">
      
      <Hero />
      <PrizeArea />
      <ScheduleArea />
      <SpeakersArea />
      <EventsArea />
    </main>
  );
}
