import React from 'react';
import GridSection from './GridSection';
import CopyrightSection from './CopyrightSection';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='border border-sky-700 max-w-5xl mx-auto'>
      <GridSection />
      <CopyrightSection />
    </footer>
  );
}
