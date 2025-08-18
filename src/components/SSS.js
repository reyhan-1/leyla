"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "Meslek Olarak Koçluk",
    answer: `Koçluk Mesleği. Koçluğun pek çok potansiyel yararı vardır. Yalnızca bir kaçını sayacak olursak, insanların vasıflarını geliştirmek, daha çok elemanı elde tutmak ve örtük bilgi aktarımı diye sıralayabiliriz. Ancak, bu yararların gerçekleşmesi koçların işlevlerini düzgün bir şekilde yerine getirmeleri halinde mümkündür.Koçlar yüksek standartlar getirirler.
    
Koçluk Mesleği. Destek alan kişinin her zaman erişebileceği bir yerde bulunurlar, başka bir deyişle, iyi koçluk için gereken zaman ve çabayı sunmaya hazırdırlar. Öğüt verdikleri kişilerin gelişme deneyimlerinin oluşması için imkan sunarlar. Bunu destek alan kişileri önemli projelere, takımlara ve zorlu işlere yönlendirmek suretiyle yaparlar.

Koçun yaklaşımında tutarlılık çalışanın güveni açısından önemlidir. Koçluk Mesleği. Koçun söylediklerinin ve yaptıklarının bir bütün içinde birbirini desteklemesi gerekir. Desteklemediği özel durumların ise iyi açıklaması gerekir.

Koçu meşgul eden ve etkileyen düşünceler varsa hazırlık aşamasında zihinsel olarak temizlenmesi şarttır.

Koçluk Mesleği. Mevlana’nın deyişiyle koçun özünün ve sözünün bir olması gerekir. Güçlerinizi ortaya çıkarmanızın tek yolu, geribildirim analizidir. kilit bir karar aldığınız da ya da kilit bir eyleme geçtiğiniz de sonuçtan ne beklediğinizi bir kenara not edin.`,
  },
  {
    question: "Kimler Bir Koçla Çalışır? Koçluğun Amacı;",
    answer: `Koçluk bir gelişim sürecidir. Danışanın kendi belirlediği hedeflere, koçun desteğiyle ulaşması ve sorunlarının üstesinden tek başına gelmeyi öğrenmesidir.  
Bu süreç boyunca danışan, kendisini daha iyi tanır, potansiyelini keşfeder ve hatalarından ders alarak yetkinliklerini geliştirir.

Kimler bir koçla çalışır? Yaşamında iyiye yönelik bir değişiklik yapmak, tam potansiyelini eyleme geçirmek isteyen ve bunun için çalışmaya, risk almaya hazır herkes, bir koçla çalışabilir.

Girişimciler, iş sahipleri, profesyoneller ve değişim sürecindeki insanlar ile, gelişime açık şirketler genellikle bir koçla çalışır. Değişim zor bir süreçle işleyen kademeli bir çalışmadır. Kişiler kendi hayatlarına dair bir değişim projesi başlatmak istiyorlarsa, zorlu bir yolculuğa çıkmaya hazır olmalıdırlar. Değişim başladığında, kişi kendi değerlerini yıkarken kendi kendine yetmez. Bu yolculuğunda profesyonel rehberlik veya koçluk hizmeti almalıdır.`,
  },
  {
    question: "Koçluğun Faydaları Nelerdir?",
    answer: `KOÇLUĞUN FAYDALARI

Kurumlar için;
- Performans ve üretkenlik artışı
- Aidiyet ve destek ortamının yaratılması
- Devamsızlıkta azalma
- Daha iyi müşteri ilişkileri
- Kurum içerisinde özellikle iletişim, işbirliği ve motivasyon konularında daha iyi ilişkilerin kurulması
- Çalışan bağlılığının artması
- Sürekli gelişimi destekleme

Yöneticiler için;
- Kadrosu ile daha yakın ilişkiler geliştirebilir
- Kadrosunu daha iyi tanır ve olası durumlara hazırlıklı olur
- İnsan, yetenek ve kaynak kullanımı konularında gelişir
- Çalışanlar arasındaki sorunlar ile daha az uğraşmak ve çözüm çareleri üretmek için daha az zaman ayırmak
- Planlama yapmak, yöneticiler ve kadrosu için mesleki gelişim ve yaratıcı girişimler gibi diğer konulara daha fazla zaman harcayabilmek

Bireyler için;
- Kendini tanımak, güçlü ve zayıf yönlerinin farkına varmak
- Yaratıcı düşünme ve çalışma alışkanlığı edinme
- Kendi kendini yönlendirme, kendi yönünü bulma
- İş ve özel hayat kalitesinde artış

Kurumlarda İç Koçluğun Faydaları Nelerdir?
- Güven ortamının daha çabuk ve kolay yaratılması
- Kurum değerlerinin daha iyi anlaşılması
- İç koçluk yapan kişiler koçluk becerilerini günlük iş yaşamında da kullandıklarında kurum içi koçluk kültürünün yaratılmasında fayda sağlar
- İç Koçların kurum kültürünü ve mevcut durumu biliyor olması, koçluk alacak kişilerin kendilerinin anlaşıldığını hissetmesinde önemli rol oynar
- Kurum içi iletişim daha farklı seviyeye ulaşır
- Kurum dışarıdan koçluk hizmeti aldığında ödeyeceği parayı iç koçluk kullanarak tasarruf eder
- Daha verimli takım çalışması
- Yaratıcılığın artması
- Liderlik becerilerinin artması
- Bireysel ve profesyonel gelişimin artması`,
  },
  {
    question: "Koçluğun Amacı Nedir?",
    answer: `Danışanın kendi belirlediği hedeflere, koçun desteğiyle ulaşması ve sorunlarının üstesinden tek başına gelmeyi öğrenmesidir.

Koçluk bir gelişim sürecidir. Süreç boyunca danışan, kendisini daha iyi tanır, potansiyelini keşfeder ve hatalarından ders alarak yetkinliklerini geliştirir.

Koçluk; mevcut durumundan, daha iyi bir duruma ulaşmak isteyen sağlıklı bireylerle yapılan bir çalışmadır.

Koçluk; bu hizmeti alan danışanın, özel ve profesyonel yaşamında, gelişimi hedefleyen ve tümüyle güven ve gizlilik esasına dayanan bir süreçtir.`,
  },
  {
    question: "Koçluk Nedir? Ne Değildir?",
    answer: `Kelime anlamı olarak koçluk (coaching), birini bir yerden bir yere götürme anlamına gelir. Koçluk, istenen performansa ulaşmak için, koç (coach) ve danışan (coachee) arasında kurulan planlı bir gelişim ilişkisidir. Kişilerin var olan potansiyellerini ortaya çıkararak, ulaşılabilir hedeflere ve olasılıklara odaklanan bir öğrenme ve gelişim sürecidir. Koçluk, doğru sorular ile kişilerde farkındalık yaratma sanatıdır.

Koçluk, ilk olarak 60‘lı yılların sonunda ABD‘de bütün bir kurumun daha etkin çalışması için çalışan örgütsel gelişim danışmanlarının yürüttükleri projelerin parçaları olarak kurumun içindeki liderlerle birebir çalışmaları ile başladı denebilir. Yani koçluk kavramı aslında organizasyonel gelişim çalışmalarının entegre bir parçası idi. 80‘li yıllarda Thomas Leonard koçluğu daha geniş kitlelerin de yararlanacağı bir biçimde yapmaya ve profesyonel koçlar yetiştirmeye başladı.

Koçluk Türkiye’de son bir kaç yıldır yaygınlaşmaya başlamış bir yöntemdir. Günümüzde pek çok konuda koçluk çeşidi vardır. Bunlardan bazıları; yaşam koçluğu, öğrenci koçluğu, ebeveyn koçluğu, aile koçluğu, ilişki koçluğu, sporcu koçluğu, satış koçluğu‘dur.`,
  },
];

export default function SSS() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-serif text-center mb-12">
        SIKÇA SORULAN SORULAR
      </h2>
      <div className="space-y-6">
        {faqData.map((faq, i) => (
          <div
            key={i}
            className="border-b border-gray-200 pb-4"
          >
            <button
              className="w-full flex justify-between items-center text-left font-accent text-lg"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.question}
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  openIndex === i ? "rotate-180 text-main-blue" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-3"
                >
                  <p className="text-gray-700 whitespace-pre-line font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
