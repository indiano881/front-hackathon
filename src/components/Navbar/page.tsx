import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Davide from "../../../public/davide.jpg";

export default function NavbarC() {

    
  return (
    
    <Navbar  className="bg-c-green md:sticky top-0 shadow-md flex justify-evenly z-20">
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
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/registration" aria-current="page">
            Registration
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/stories">
            Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/registration">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/registration" variant="flat" className=" bg-c-pink px-4 py rounded-lg border-d-purple border-2">
            Enroll here
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
