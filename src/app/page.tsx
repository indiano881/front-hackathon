"use client"

import Hero from "../components/Hero/page";
import PrizeArea from "@/components/PrizeArea/page";
import ScheduleArea from "@/components/ScheduleArea/page";
import SpeakersArea from "@/components/SpeakersArea/page";
import EventsArea from "@/components/EventsArea/page";
import JuryArea from "@/components/JuryArea/page";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import NavbarC from "@/components/Navbar/page";

export default function Home() {
  // State to track if the splash screen is active
  const [loading, setLoading] = useState(true);

  // This useEffect simulates the splash screen duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Duration of the splash animation

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <main>
      {loading ? (
        <SplashScreen /> // Show the splash screen while loading
      ) : (
        <>
          <NavbarC />
          <Hero />
          <PrizeArea />
          <ScheduleArea />
          <SpeakersArea />
          <JuryArea />
          <EventsArea />
        </>
      )}
    </main>
  );
}

