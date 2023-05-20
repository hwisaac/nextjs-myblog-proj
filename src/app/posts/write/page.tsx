'use client';
import ContainerWithTitle from '@/components/contact/ContainerWithTitle';
import TagInput from '@/components/post-write/TagInput';
import RedButton from '@/components/ui/RedButton';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

const commonClassName =
  'w-full border bg-uBgColor border-uPrimary/5 outline-uRed p-2 text-uFontColor';

const inputClassName = [commonClassName, ''].join(' ');

const textareaClassName = [commonClassName, ''].join(' ');

type Form = {
  title: string;
  content: string;
  tags: string[];
  postImage: any;
};

const DEFAULT_DATA = {
  title: '',
  content: '',
  tags: [],
  postImage: '',
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
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <section className='flex flex-col bg-white shadow-lg space-y-4 px-10 py-14'>
      <h1 className='text-uPrimary font-bold text-4xl mb-10'>Write</h1>
      <form onSubmit={onSubmit}>
        <ContainerWithTitle title='Title'>
          <input
            className={inputClassName}
            type='text'
            id='title'
            name='title'
            value={form.title}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <ContainerWithTitle title='Tags'>
          <input className={inputClassName} type='text' id='tags' name='tags' />
        </ContainerWithTitle>
        <ContainerWithTitle title='Content'>
          <textarea
            rows={10}
            className={textareaClassName}
            id='content'
            name='content'
            value={form.content}
            onChange={onChange}
          />
        </ContainerWithTitle>
        <TagInput />
        <RedButton text='Submit' />
      </form>
    </section>
  );
}
