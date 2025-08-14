// pages/iletisim.js
import React from "react";

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 mt-10">
      <h1 className="text-4xl font-bold m-6 pt-16 mt-10">İletişim</h1>

      {/* Google Map Embed */}
      <div className="w-full max-w-2xl h-96 mb-8 shadow-lg rounded-lg overflow-hidden">
        <iframe
          title="Mutlukent Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.098473152977!2d32.7925922762728!3d39.96817387942145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fc6072c5b2d%3A0xa5680e1f0f0c5c8!2sMutlukent%20Mahallesi%201950.%20Sokak%20No%3A5%2C%20%C3%9Cmitk%C3%B6y%2C%20Ankara!5e0!3m2!1str!2str!4v1692026400000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="w-full max-w-2xl bg-light-blue-2 text-dark-blue shadow-md rounded-lg p-6 space-y-4 mb-10">
        <div>
          <h2 className="font-semibold text-lg">Adres:</h2>
          <p>Mutlukent Mahallesi 1950. Sokak No:5, Ankara, Ümitköy 06680</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Telefon:</h2>
          <p>0312 286 8081</p>
          <p>0549 343 2629</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Email:</h2>
          <a
            href="mailto:leylafidanaykocluk@gmail.com"
            rel="noopener noreferrer"
            className="text-white hover:text-dark-blue"
          >
            leylafidanaykocluk@gmail.com
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Instagram:</h2>
          <a
            href="https://www.instagram.com/p/leylafidanayofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-dark-blue"
          >
            @leylafidanayofficial
          </a>
        </div>
      </div>
    </div>
  );
}
