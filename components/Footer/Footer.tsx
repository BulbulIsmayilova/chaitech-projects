import logo from "/png/Chaitech_logo.png";
import Image from "next/image";
import Link from "next/link";
// import { forumData } from "@/mockdata/data";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPinCheckInside,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-[#F6F6F7]">
      <div className="mx-auto max-w-6xl px-4 lg:px-0  flex flex-col md:justify-between items-center md:flex-row gap-12 ">
        <div>
          <Link href="/">
            <div className="mb-2">
              <Image
                className="lg:w-35"
                src="/png/Chaitech_logo.png"
                alt="logo"
                width={200}
                height={40}
              />
            </div>
          </Link>

          <div>
            <span className="text-xs leading-4 text-[#646464]">
              Chaitech © {currentYear}
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/download.gif"
            alt="Download Animation"
            width={150}
            height={100}
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-0 flex gap-4  border-t border-[#EEEEEE] pt-6 my-5">
        <div className="flex flex-col md:flex-row md:gap-10 gap-4 ">
          <Link href="mailto:devteam@chaitech.info" className="flex gap-2">
            <span>
              <Send color="#000000" strokeWidth={1.5} />
            </span>
            <span>devteam@chaitech.info</span>
          </Link>

          <Link
            href="https://wa.me/994554555645"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <span>
              <FaWhatsapp className="text-black w-6 h-6" />
            </span>
            <span>+994 10 110 01 95</span>
          </Link>

   
        </div>
      </div>
    </footer>
  );
};

export default Footer;
