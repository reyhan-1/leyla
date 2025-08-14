import '/src/styles/globals.css';
import Navbar from '/src/components/Navbar.js';
import Footer from '/src/components/Footer';
import Head from 'next/head';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
