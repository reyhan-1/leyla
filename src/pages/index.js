'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Egitimler from '../components/Egitim';
import GeriBildirim from '../components/GeriBildirim';

const sections = [
  { id: "egitim", title: "Eğitim", color: "bg-blue-100" },
  { id: "seans", title: "Seans", color: "bg-green-100" },
  { id: "mentorluk", title: "Mentörlük", color: "bg-yellow-100" },
];

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="absolute top-0 left-0 w-full h-full bg-dark-gray bg-opacity-40" />

      {/* Welcome Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.section
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl text-shadow-lg/20 max-w-80 text-main-blue text-center">
            Leyla Fidanay Koçluk ve Kişisel Gelişim Akademisi
          </h1>
        </motion.section>
      </section>

      <Egitimler />

      {/* Geri Bildirim Section */}
      <GeriBildirim />
    </div>
  );
}
