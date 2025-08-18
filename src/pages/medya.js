"use client";

import React from "react";
import { motion } from "framer-motion";
import { SpeakerWaveIcon, NewspaperIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Medya() {
  const mediaItems = [
    {
      type: "audio",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/368958542&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      title:
        "Leyla Fidanay TRT Ankara Radyosu'ndan Sayın Canan Arslan'ın konuğuydu.",
      link:
        "https://soundcloud.com/user-27234226/leyla-fidanay-trt-ankara-radyosundan-sayin-canan-arslanin-konuguydu",
      source: "fidanaykocluk",
      sourceLink: "https://soundcloud.com/user-27234226",
      icon: <SpeakerWaveIcon className="w-6 h-6 text-main-blue inline-block mr-2" />,
    },
    {
      type: "article",
      title: "Doğru tercihin püf noktaları",
      link: "https://www.sabah.com.tr/ankara-baskent/2017/07/22/dogru-tercihin-puf-noktalari",
      source: "Sabah Gazetesi",
      imageUrl:
        "https://iasbh.tmgrup.com.tr/cc50d1/752/395/0/31/447/266?u=http://i.sabah.com.tr/sbh/2017/07/21/1500663033342.jpeg", // Use actual OG image or fallback
      icon: <NewspaperIcon className="w-6 h-6 text-main-blue inline-block mr-2" />,
    },
    // Add more media items here
  ];

  return (
    <motion.section
      className="min-h-screen bg-gray-50 py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-serif font-bold text-gray-800 m-16 pt-20 text-center">
        Medyada Leyla Fidanay
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon + Source */}
            <div className="mb-4 flex items-center">
              {item.icon}
              {item.source && (
                <a
                  href={item.sourceLink || item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 hover:underline"
                >
                  {item.source}
                </a>
              )}
            </div>

            {/* Media content */}
            {item.type === "audio" && (
              <>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={item.embedUrl}
                  className="rounded-lg mb-3"
                ></iframe>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:un font-sans"
                >
                  {item.title}
                </a>
              </>
            )}

            {item.type === "article" && (
              <>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-sans hover:underline"
                >
                  {item.title}
                </a>
              </>
            )}

            {item.type === "video" && (
              <iframe
                width="100%"
                height="315"
                src={item.embedUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
