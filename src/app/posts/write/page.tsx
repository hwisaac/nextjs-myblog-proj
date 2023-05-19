'use client';
import ContainerWithTitle from '@/components/contact/ContainerWithTitle';
import RedButton from '@/components/ui/RedButton';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

const commonClassName =
  'w-full border bg-uBgColor border-uPrimary/5 outline-uRed p-2 text-uFontColor';

const inputClassName = [commonClassName, ''].join(' ');

const textareaClassName = [commonClassName, ''].join(' ');

type Form = {
  from: string;
  subject: string;
  message: string;
  author: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
  author: '',
};
export interface BannerData {
  message: string;
  state: 'success' | 'error';
}

export default function WritePage({}: Props) {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('submitted');
  };

  return (
    <section className='flex flex-col bg-white shadow-lg space-y-4 px-10 py-14'>
      <h1 className='text-uPrimary font-bold text-4xl mb-10'>Write</h1>
      <form onSubmit={onSubmit}>
        <ContainerWithTitle title='Your name'>
          <input
            className={inputClassName}
            type='text'
            id='author'
            name='author'
            value={form.author}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <ContainerWithTitle title='Your email'>
          <input
            className={inputClassName}
            type='email'
            id='from'
            name='from'
            value={form.from}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <ContainerWithTitle title='Subject'>
          <input
            className={inputClassName}
            type='text'
            id='subject'
            name='subject'
            value={form.subject}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <ContainerWithTitle title='Your message'>
          <textarea
            rows={10}
            className={textareaClassName}
            id='message'
            name='message'
            value={form.message}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <RedButton text='Submit' />
      </form>
    </section>
  );
}
