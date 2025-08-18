"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hakkimizda() {
  return (
    <>
    <motion.section
      className="max-w-6xl mx-auto px-6 py-20 bg-gray-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-serif font-bold text-gray-800 text-center m-16 p-20">
        Leyla Fidanay
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <motion.div
          className="text-gray-700 space-y-4 font-sans"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold">Eğitmen, Mentor, Yazar</h2>

          <p>
            Yirmi yıl çeşitli devlet okullarında, beş yıl bir özel okulda olmak üzere yirmi beş yıl sınıf öğretmenliği yaptı.
          </p>
          <p>
            Çevre konularını ders kitaplarında işleme projesiyle Türkiye birincisi olunca Talim Terbiye Kurulu Kitap İnceleme Komisyonu‘nda görevlendirildi. Bu görevi sürerken iki yıl boyunca Ankara Radyosu’na “Dünya ölüyor mu?”, Film Radyo Televizyon Merkezi’ne “Çevre ve İnsan” konulu radyo programları yazdı.
          </p>
          <p>
            Ankara Valiliği Çevre Vakfı üyesi olarak çevre konusundaki duyarlılığı nedeniyle değişik kurum ve kuruluşlardan çok sayıda ödüle layık görüldü.
          </p>
          <p>
            Yazdığı makale ve öyküleri çeşitli dergi ve kitaplarda yayımlandı. 60’ı aşkın çocuk öyküsü, gençler için Ergen Sohbetler ve Ergenlerden Ebeveynlere kitaplarını yazdı.
          </p>
          <p>
            Öğrenciler ve ebeveynleriyle yaptığı çalışmalar sonucunda Ankara Valiliği ve Milli Eğitim Bakanlığı tarafından birçok kez ödüllendirilmiştir.
          </p>
          <p>
            Kurucusu olduğu Fidanay Öğrenci Koçluğu ve Gelişim Akademisi çatısı altında öğrencilere öğrenci koçluğu, ailelerine ebeveyn koçluğu hizmeti, Koçluk Platformu Derneği Yönetim Kurulu ve ICF üyesi olan Fidanay, Öğrenci ve Yaşam Koçluğu ile Accses Bars Eğitimleri, bu konularda bireysel seanslarla hizmet vermektedir.
          </p>
          <p>
            Bunların yanı sıra liseye giriş ve üniversite sınavlarına hazırlanan öğrencilere hedef belirleme, öfke ve stres kontrolü, NLP teknikleri, Accses Bars seansları, sınav kaygısı giderme, zaman yönetimi gibi konularda eğitim ve hizmet, kurum, kuruluş ve okullara seminerler vermektedir.
          </p>
          <p>
            Fidanay; Ankara Valiliği Çevre Vakfı, TOÇEV, TED Gönüllüler Vakfı, ÇYDD ve Hasta Yaşlı Engelli Bireyler Bakım ve Eğitim Derneği üyesidir.
          </p>
        </motion.div>

        {/* YouTube Video */}
        
      </div>
    </motion.section>
    <motion.div
  className="w-full h-full md:h-full"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="mt-12 px-6 relative mb-10">
    <iframe
      className="w-full h-full rounded-xl shadow-lg"
      src="https://www.youtube.com/embed/UxQQ-ScmVdk"
      title="Leyla Fidanay "
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</motion.div>

    </>
  );
}
