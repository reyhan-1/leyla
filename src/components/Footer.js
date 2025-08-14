'use client';
import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {


  return (
    <div className="w-full bg-white text-dark-gray  px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-0">
        {/* Left Nav */}
        <nav className="space-y-2 font-quicksand">
          <Link href="/hakkimizda" className="block hover:text-main-blue-bright">Hakkımızda</Link>
          <Link href="/iletisim" className="block hover:text-main-blue-bright">İletişim</Link>
        </nav>


{/* Social Icons */}
<div>
  <h6 className="font-quicksand pb-2  text-dark-gray">Bizi instagramdan takip etmeyi unutmayın</h6>
  <div className="grid place-items-start gap-2 text-xs md:text-base">

    {/* Instagram */}
    <a
      href="http://instagram.com/leylafidanayofficial"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:text-main-blue-bright"
    >
    <FaInstagram className="text-xl text-dark-gray mr-2" /> 
    leylafidanayofficial
    </a>
    
  </div>
</div>

      </div>
      <div className="footer sm:footer-horizontal bg-white footer-center pt-10">
        <aside>
          <p className="font-quicksand text-center text-dark-gray text-sm">
            © Leyla Fidanay Koçluk ve Kişisel Gelişim Akademisi {new Date().getFullYear()} | WEBSITE BY <a href="https://www.reyhanuyanik.art">Reyhan Uyanik </a>
          </p>
        </aside>
      </div>
    </div>
    
  );
}
