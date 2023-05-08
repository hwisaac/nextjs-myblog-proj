'use client';
import ContainerWithTitle from '@/components/contact/ContainerWithTitle';
import RedButton from '@/components/ui/RedButton';
import React from 'react';

type Props = {};

const commonClassName =
  'w-full border bg-uBgColor border-uPrimary/5 outline-uRed p-2 text-uFontColor';

const inputClassName = [commonClassName, ''].join(' ');

const textareaClassName = [commonClassName, ''].join(' ');

export default function ContactPage({}: Props) {
  return (
    <section className='flex flex-col bg-white shadow-lg space-y-4 px-10 py-14'>
      <h1 className='text-uPrimary font-bold text-4xl mb-10'>Contact</h1>
      <ContainerWithTitle title='Your name'>
        <input className={inputClassName} type='text' />
      </ContainerWithTitle>
      <ContainerWithTitle title='Your email'>
        <input className={inputClassName} type='email' />
      </ContainerWithTitle>
      <ContainerWithTitle title='Subject'>
        <input className={inputClassName} type='text' />
      </ContainerWithTitle>
      <ContainerWithTitle title='Your message'>
        <textarea rows={10} className={textareaClassName} />
      </ContainerWithTitle>
      <RedButton text='Submit' />
    </section>
  );
}
