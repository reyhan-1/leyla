import '/src/styles/globals.css';
import { Lato, Libre_Baskerville, Marcellus_SC } from 'next/font/google';
import Navbar from '/src/components/Navbar.js';
import Footer from '/src/components/Footer';
import Head from 'next/head';


// Paragraph font
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // normal + bold
  variable: '--font-lato',
});

// Header font
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

// Accent font
const marcellusSC = Marcellus_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus-sc',
});

export const metadata = {
  title: 'Leyla Fidanay Koçluk ve Kişisel Gelişim Akademisi',
  description: 'Leyla Fidanay',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${lato.variable} ${libreBaskerville.variable} ${marcellusSC.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
