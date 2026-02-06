// import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "@/public/png/Chaitech_logo.png"

const Header = () => {
  return (
    <header className="relative z-50 w-full lg:py-1 bg-white h-18.25 lg:px-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <div className="header-container h-full flex justify-center lg:justify-between items-center">
        <div>
          <Link href="https://chaitech.info/" target="blank">
            <Image
              className="lg:w-35"
              src="/png/Chaitech_logo.png"
              alt="logo"
              width={200}
              height={40}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
