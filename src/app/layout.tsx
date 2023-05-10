import './globals.css'
import {
  Josefin_Sans,
  Source_Serif_Pro,
  Open_Sans,
  Hahmlet,
} from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import React from 'react';
import SideBar from '@/components/sidebar/SideBar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const sourceSerifPro = Source_Serif_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const hahmlet = Hahmlet({
  subsets: ['latin'],
  variable: '--font-hahmlet',
});

export const metadata = {
  title: 'My Blog',
  description: 'Generated by create next app',
};

const fontVariables = [
  josefinSans.variable,
  openSans.variable,
  sourceSerifPro.variable,
  hahmlet.variable,
].join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='ko' className={fontVariables}>
      <body className='bg-uBgColor selection:bg-uFontColor selection:text-white'>
        <AuthContext>
          <Header />
          <SWRConfigContext>
            <div id='portal' className='max-w-6xl mx-auto' />
            <main className='flex mx-auto max-w-6xl'>
              <section className='w-full mx-auto'>{children}</section>
              <SideBar />
              <div id='side-portal' />
            </main>
          </SWRConfigContext>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
