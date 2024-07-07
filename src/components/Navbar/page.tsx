import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Davide from "../../../public/davide.jpg";

export default function NavbarC() {
  return (
    <Navbar className="bg-c-green">
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
          <Link color="foreground" href="#">
            Stories
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
