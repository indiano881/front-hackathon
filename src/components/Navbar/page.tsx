"use client"


import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Davide from "../../../public/davide.jpg";
import { motion } from "framer-motion";



export default function NavbarC() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const wrapperVariants = {
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <>
    
    <Navbar  className="bg-c-green md:sticky top-0 md:shadow-lg md:py-0 z-30">
        {/*should hide on scroll only for mobile */}
      <NavbarBrand>
        <a href="/"> <Image className="rounded-full m-2"
        src={Davide} 
        width={60}
      height={60}
      alt="Picture of the author"
      
        /></a>
       
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-black hover:underline">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/registration" aria-current="page" className="text-black hover:underline">
            Registration
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page" className="text-black hover:underline" >
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/stories" className="text-black hover:underline">
            Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{/*<NavbarItem><Link href="/registration">Login</Link></NavbarItem>*/}
        <NavbarItem>
          <Button as={Link} radius="full" color="primary" href="/registration" variant="flat" className=" hover:bg-d-purple hover:text-white shadow-lg cursor-pointer bg-c-pink text-black mx-8 py-2 hidden md:inline-block">
            Enroll here
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className="flex items-center md:hidden relative">
    <button
      className="focus:outline-none flex items-center justify-center"
      onClick={toggleMenu}
    >
      <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 z-20 absolute right-2 bottom-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" // This sets the color to whatever is defined in CSS or inline styles
            animate={isOpen ? "open" : "closed"}
            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                style={{ stroke: '#32174D' }} // This explicitly sets the stroke color to white
            />
        </motion.svg>
    </button>
  </div>

{isMounted && isOpen && ( // Ensure the menu is rendered only after mount
  <motion.div
    initial="closed"
    animate="open"
    variants={wrapperVariants}
    className="bg-c-green w-full md:hidden flex flex-col p-6 space-y-6 absolute top-[70px] z-10"
  >
    <Link href={"/"} className="button-text" >Home</Link>
    <Link href={"/registration"} className="block mb-2 button-text">Registartion</Link>
    <Link href={`/about`} className="block mb-2 button-text">About us</Link>
    <Link href={`/stories`} className="block mb-2 button-text">Stories</Link>
    <Button as={Link} radius="full" color="primary" href="/registration" variant="flat" className=" hover:bg-d-purple hover:text-white shadow-lg cursor-pointer bg-d-purple text-white mx-8 py-2 text-center">
            Enroll here
          </Button>
  </motion.div>
 
  
  )}
  </>
  )
}

