'use client';

import { motion } from "framer-motion";
import { useRef } from "react";

const feedbacks = [
  { type: "text", 
    content: "Hocam kızımdan güncel haberler vereyim. Alışverişte hiç tanımadığı kasiyere iltifat etti. Gittiğimiz sergideki ressama sorular sordu, sohbet etti. Otobüsle şehrin her yerine gidiyor. Kendi kendine geziyor 🧿🧿🧿 Dizim öncesinde bunlar bizim için imkansıza yakındı 🙏🏻", 
    heading: "Otizm Teşhisi Olan Kızımızın Annesinden Mesaj" 
  },
  { type: "video", content: "/feedback1.mp4", heading: "Danışanımızdan" },
  // add more feedbacks as needed
  { type: "text", 
    content: "Hocam kızımdan güncel haberler vereyim. Alışverişte hiç tanımadığı kasiyere iltifat etti. Gittiğimiz sergideki ressama sorular sordu, sohbet etti. Otobüsle şehrin her yerine gidiyor. Kendi kendine geziyor 🧿🧿🧿 Dizim öncesinde bunlar bizim için imkansıza yakındı 🙏🏻", 
    heading: "Otizm Teşhisi Olan Kızımızın Annesinden Mesaj" 
  },
  { type: "text", 
    content: "Hocam kızımdan güncel haberler vereyim. Alışverişte hiç tanımadığı kasiyere iltifat etti. Gittiğimiz sergideki ressama sorular sordu, sohbet etti. Otobüsle şehrin her yerine gidiyor. Kendi kendine geziyor 🧿🧿🧿 Dizim öncesinde bunlar bizim için imkansıza yakındı 🙏🏻", 
    heading: "Otizm Teşhisi Olan Kızımızın Annesinden Mesaj" 
  },
  { type: "text", 
    content: "Hocam kızımdan güncel haberler vereyim. Alışverişte hiç tanımadığı kasiyere iltifat etti. Gittiğimiz sergideki ressama sorular sordu, sohbet etti. Otobüsle şehrin her yerine gidiyor. Kendi kendine geziyor 🧿🧿🧿 Dizim öncesinde bunlar bizim için imkansıza yakındı 🙏🏻", 
    heading: "Otizm Teşhisi Olan Kızımızın Annesinden Mesaj" 
  },
  { type: "text", 
    content: "Hocam kızımdan güncel haberler vereyim. Alışverişte hiç tanımadığı kasiyere iltifat etti. Gittiğimiz sergideki ressama sorular sordu, sohbet etti. Otobüsle şehrin her yerine gidiyor. Kendi kendine geziyor 🧿🧿🧿 Dizim öncesinde bunlar bizim için imkansıza yakındı 🙏🏻", 
    heading: "Otizm Teşhisi Olan Kızımızın Annesinden Mesaj" 
  },
];

export default function GeriBildirim() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <motion.section
      id="feedbacks"
      className="bg-light-blue-2 py-16 px-6 min-h-screen/2"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Geri Bildirimler</h2>

      <div className="relative max-w-5xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {feedbacks.map((fb, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center min-w-[300px] max-w-[300px] snap-center"
            >
              <span className="text-main-blue pb-2 font-semibold">
                {fb.heading}
              </span>

              {fb.type === "text" ? (
                <p className="text-base">"{fb.content}"</p>
              ) : (
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <video
                    src={fb.content}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          ‹
        </button>

        <button
          onClick={scrollRight}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
}
