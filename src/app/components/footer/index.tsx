"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Mail, Twitter, MessageCircle, Youtube, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#020733] ">
      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between p-5 ">
            {/* Logo */}
            <div>
              <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
                <Image src={Logo} alt="EthAfrique" width={250} height={250} />
              </Link>
            </div>

            

            {/* Social Links */}
            <div className="space-y-4 w-[80%] md:w-[25%]">
              <div className="flex items-center justify-between p-5 w-full  space-y-2">
                <Link href="https://twitter.com">
                  <Twitter size={20} />
                </Link>
                <Link href="https://facebook.com" >
                  <Facebook size={20} />
                </Link>
                <Link href="https://linkedin.com">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://youtube.com">
                  <Youtube size={20} />
                </Link>
                <Link href="https://instagram.com">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 p-8 border-t border-gray-800 text-center flex flex-col md:flex-row items-center justify-between w-full md:w-[80%] m-auto ">
            <p className="text-sm text-gray-400">
              © 2025 Africa Blockchain Community. All right reserved
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[40%] p-5">
                <p className="text-sm text-gray-400 my-1">
                    <Link href='/'>Privacy Policy</Link>
                </p>
                <p className="text-sm text-gray-400 my-1">
                    <Link href='/'>Terms of Service</Link>
                </p>
                <p className="text-sm text-gray-400 my-1">
                    <Link href='/'>Cookies Settings</Link>
                </p> 
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;