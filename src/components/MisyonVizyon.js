"use client";

import { motion } from "framer-motion";
import {
  LightBulbIcon,
  HeartIcon,
  GlobeAltIcon,
  UsersIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function MisyonVizyon() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Two-column layout for Vizyon & Misyon */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* Vizyon */}
        <motion.div
          className="p-8 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-2xl font-serif mb-4">VİZYONUMUZ</h3>
          <p className="text-gray-700 leading-relaxed font-sans">
            Mutlu çocuklar, huzurlu anne ve babalar ve potansiyelini en üst düzeye
            çıkartmak isteyen bireylerle birlikte yürüyerek kişisel gelişim
            alanında Ankara’nın önde gelen firması olmak.
          </p>
        </motion.div>

        {/* Misyon */}
        <motion.div
          className="p-8 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif mb-4">MİSYONUMUZ</h3>
          <p className="text-gray-700 leading-relaxed font-sans">
            Farklılıklarımızın zenginliğimiz olduğunu bilerek, yaşamına dokunduğumuz
            her insanın özel ve her şeyiyle bir bütün olduğunu kabullenip kişilerin
            farkındalıklarını arttırarak potansiyellerini en üst düzeyine çıkartıp
            her alanda başarıya, mutluluğa ve sevgiye ulaşmalarına destek oluyoruz.
          </p>
        </motion.div>
      </div>

      {/* Değerlerimiz Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl font-serif text-center mb-12">DEĞERLERİMİZ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {[ 
            { icon: <CheckCircleIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Sorumluluk", text: "İşini en iyi yaparak yapana duyulan saygı." },
            { icon: <UsersIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Dürüstlük", text: "Amacımız." },
            { icon: <GlobeAltIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Öze saygı", text: "Yaradan’a, onun yarattıklarına ve potansiyellerine saygı." },
            { icon: <SparklesIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Yaratıcılık", text: "Üretmenin kutsallığına saygı." },
            { icon: <LightBulbIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Bütüne Hizmet", text: "Her insanda var olan potansiyelini açığa çıkarmak..." },
            { icon: <HeartIcon className="w-8 h-8 mx-auto mb-3 text-main-blue" />, title: "Farkındalık", text: "Öz değerlerine ulaşacak kişilerin potansiyellerini artırması." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {item.icon}
              <h4 className="font-accent mb-2 text-lg">{item.title}</h4>
              <p className="text-gray-700 font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="mb-6 font-accent text-xl">
            Fidanay Koçluk, Koçluk Platformu Derneği İlk Kurumsal Üyesidir.
          </p>
          <h2 className="text-lg mb-4">Proje Ortaklarımız</h2>
          <p className="font-sans">
            Koçluk Platformu Derneği · Dördüncü Boyut Akademi · Çadem Psikoloji · TOÇEV · Mizaç Harita · TÜZDEV · 
            Ankara İl Milli Eğitim Müdürlüğü (Çocuk Dostu Şehir Ankara) · Başkent Örnek Koleji · Kaynak Koleji · 
            1001 Akademi
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
