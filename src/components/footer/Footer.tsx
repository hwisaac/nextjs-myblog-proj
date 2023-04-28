import React from 'react';
import GridSection from './GridSection';
import CopyrightSection from './CopyrightSection';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='max-w-7xl mx-auto'>
      <GridSection />
      <CopyrightSection />
    </footer>
  );
}
