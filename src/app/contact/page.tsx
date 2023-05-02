'use client';
import RedButton from '@/components/ui/RedButton';
import React from 'react';

type Props = {};

const pClassName = 'text-uPrimary font-semibold text-lg';
const inputClassName = 'w-full border';
export default function ContactPage({}: Props) {
  return (
    <section className='bg-white shadow-lg'>
      <div>
        <p className={pClassName}>Your name</p>
        <input className={inputClassName} type='text' />
      </div>
      <div>
        <p className={pClassName}>Your email</p>
        <input className={inputClassName} type='email' />
      </div>
      <div>
        <p className={pClassName}>Subject</p>
        <input className={inputClassName} type='text' />
      </div>
      <div>
        <p className={pClassName}>Your message (optional)</p>
        <textarea rows={10} className='w-full border' />
      </div>
      <RedButton text='Submit' onClick={() => {}} />
    </section>
  );
}
