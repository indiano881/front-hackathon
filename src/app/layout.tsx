import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarC from "@/components/Navbar/page";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Frontendackathon",
  description: "Hackathon for all the frontend web and app developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-d-purple">
      <body className={`${roboto.className} relative`}>
        <NavbarC />
        
        {children}</body>
    </html>
  );
}
