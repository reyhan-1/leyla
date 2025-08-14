'use client';

import { motion } from 'framer-motion';
import { FaUserGraduate, FaHandsHelping, FaLeaf, FaBrain } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Egitimler() {
  const egitimler = [
    { 
      heading: "Yaşam Koçluğu", 
      description: "Kişisel gelişim ve rehberlik programı", 
      category: "Career / Relationships", 
      icon: <FaHandsHelping className="text-4xl text-main-blue mb-4" /> 
    },
    { 
      heading: "Numeroloji", 
      description: "Sayısal verilerle hayatınızı analiz edin", 
      category: "Student / Parent", 
      icon: <FaUserGraduate className="text-4xl text-main-blue mb-4" /> 
    },
    { 
      heading: "Biyoenerji", 
      description: "Enerji dengesi ve şifa teknikleri", 
      category: "Career / Relationships", 
      icon: <FaLeaf className="text-4xl text-main-blue mb-4" /> 
    },
    { 
      heading: "Access Bars & Recall Healing", 
      description: "Zihinsel ve duygusal dönüşüm teknikleri", 
      category: "Relationships / Parent", 
      icon: <FaBrain className="text-4xl text-main-blue mb-4" /> 
    },
  ];

  return (
    <motion.section
      id="egitimler"
      className="bg-white py-16 px-6 min-h-[50vh]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Eğitimler</h2>

      {/* Featured Yaşam Koçluğu Card */}
<div className="max-w-6xl mx-auto mb-16 px-4">
  <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center text-center gap-8">
    
    {/* Text and Button */}
    <div className="md:flex-1">
      <h2 className="text-main-blue font-semibold text-center text-3xl md:text-4xl mb-4">
        Yaşam Koçluğu Eğitimleri
      </h2>
      <p className="text-gray-600 font-medium text-center text-lg md:text-xl mb-6">
        Koçluk Eğitimlerinde Yüksek Standart
      </p>
      <div className="flex justify-center mt-6">
      <Link href="/egitimler">
        <button className="mt-2 md:mt-0 bg-main-blue text-white px-10 py-3 rounded-xl font-medium text-lg hover:bg-dark-blue transition-colors shadow-md hover:shadow-lg">
          Detaylı Bilgi Al
        </button>
      </Link>
      </div>
    </div>

    {/* Image */}
    <div className="md:flex-1 h-96 relative w-full">
      <Image
        src="/leyla1.jpg"
        alt="Leyla Fidanay"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  </div>
</div>



      {/* Other courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto ">
        {egitimler.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            {item.icon}
            <span className="text-main-blue pb-2 font-semibold text-lg">
              {item.heading}
            </span>
            <p className="text-gray-700 text-base mb-2">{item.description}</p>
            <span className="text-sm text-gray-500">{item.category}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
