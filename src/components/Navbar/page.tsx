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
    
    <Navbar  className="md:bg-d-purple md:sticky top-0 md:shadow-lg md:py-4 z-30">
        {/*should hide on scroll only for mobile */}
      <NavbarBrand>
        <Image className="rounded-full"
        src={Davide} 
        width={60}
      height={60}
      alt="Picture of the author"
        />
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-white hover:underline">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/registration" aria-current="page" className="text-white hover:underline">
            Registration
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page" className="text-white hover:underline" >
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/stories" className="text-white hover:underline">
            Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{/*<NavbarItem><Link href="/registration">Login</Link></NavbarItem>*/}
        <NavbarItem>
          <Button as={Link} radius="full" color="primary" href="/registration" variant="flat" className=" hover:bg-white hover:text-d-purple shadow-lg cursor-pointer bg-c-pink text-black mx-8 py-2">
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
        className="h-6 w-6 z-20 absolute right-2 bottom-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={isOpen ? "open" : "closed"}
        variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
        />
      </motion.svg>
    </button>
  </div>

{isMounted && isOpen && ( // Ensure the menu is rendered only after mount
  <motion.div
    initial="closed"
    animate="open"
    variants={wrapperVariants}
    className="bg-c-pink w-full md:hidden flex flex-col p-6 space-y-6 absolute top-[70px] z-10"
  >
    <Link href={"/"} className="button-text" >Home</Link>
    <Link href={"/registration"} className="block mb-2 button-text">Registartion</Link>
    <Link href={`/about`} className="block mb-2 button-text">About us</Link>
    <Link href={`/stories`} className="block mb-2 button-text">Stories</Link>
    
  </motion.div>
 
  
  )};
  </>
  )
}

