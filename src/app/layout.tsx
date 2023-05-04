import './globals.css'
import {
  Josefin_Sans,
  Source_Serif_Pro,
  Nanum_Myeongjo,
  Open_Sans,
  Hahmlet,
  Song_Myung,
  Gowun_Batang,
} from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import React from 'react';
import SideBar from '@/components/sidebar/SideBar';
import Slider from '@/components/slider/Slider';

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
const songMyung = Song_Myung({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-song-myung',
});
const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-gown-batang',
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
      {/* <ThemeProvider defaultTheme='light' attribute='class'> */}
      <body className='bg-uBgColor'>
        <Header />
        <Slider />
        <main className='flex mx-auto max-w-6xl'>
          <section className='w-2/3'>{children}</section>
          <SideBar />
        </main>
        <Footer />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
