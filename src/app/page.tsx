"use client"
import React, { useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Hero from "../components/Hero/page";
import PrizeArea from "@/components/PrizeArea/page";
import ScheduleArea from "@/components/ScheduleArea/page";
import SpeakersArea from "@/components/SpeakersArea/page";
import EventsArea from "@/components/EventsArea/page";
import JuryArea from "@/components/JuryArea/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <SplashScreen onFinish={handleSplashFinish} />}
      <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="navbar-fixed">
          <nav className="flex justify-end p-4 bg-purple-800">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-facebook-square fa-2x text-white mx-2"
            ></a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-github-square fa-2x text-white mx-2"
            ></a>
          </nav>
        </header>
        <Hero />
        <PrizeArea />
        <ScheduleArea />
        <SpeakersArea />
        <JuryArea />
        <EventsArea />
      </main>
    </>
  );
}
