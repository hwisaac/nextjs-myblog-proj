'use client';
import ContainerWithTitle from '@/components/contact/ContainerWithTitle';
import TagInput from '@/components/post-write/TagInput';
import RedButton from '@/components/ui/RedButton';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ImageFileInput from './ImageFileInput';
import usePosts from '@/hooks/usePosts';
import { useRouter } from 'next/navigation';

const commonClassName =
  'w-full border bg-uBgColor border-uPrimary/5 outline-uRed p-2 text-uFontColor';

const inputClassName = [commonClassName, ''].join(' ');
const textareaClassName = [commonClassName, ''].join(' ');

type Form = {
  title: string;
  content: string;
};

const DEFAULT_DATA = {
  title: '',
  content: '',
};

export default function CreatePostForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File>();
  const { addPost } = usePosts();
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ form, tags, file });
    router.push('/');
  };

  return (
    <form className='space-y-4' onSubmit={onSubmit}>
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
        <TagInput tags={tags} setTags={setTags} />
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
      <ContainerWithTitle title='Post Image'>
        <ImageFileInput file={file} setFile={setFile} />
      </ContainerWithTitle>
      <RedButton text='Create' />
    </form>
  );
}
