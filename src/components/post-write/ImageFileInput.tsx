'use client';
import Image from 'next/image';
import React, { DragEventHandler, useState } from 'react';

type Props = {
  file?: File;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export default function ImageFileInput({ file, setFile }: Props) {
  const [dragging, setDragging] = useState(false);

  const handleDrag: DragEventHandler<HTMLLabelElement> = (e) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };
  const handleDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault(); // 브라우저가 파일 열기를 시도하는걸 막기
  };
  const handleDrop: DragEventHandler<HTMLLabelElement> = (
    e: React.DragEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;

    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <label
      className={`w-full h-60 flex flex-col items-center justify-center ${
        !file && 'border-2 border-sky-500 border-dashed'
      }`}
      htmlFor='input-upload'
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      {dragging && (
        <div className='absolute inset-0 z-10 bg-sky-500/20 pointer-events-none' />
      )}
      {!file && (
        <div className='flex flex-col items-center pointer-events-none'>
          <p>Drag and Drop your image here or click</p>
        </div>
      )}
      {file && (
        <div className='relative w-full aspect-square'>
          <Image
            className='object-cover'
            src={URL.createObjectURL(file)}
            alt='local file'
            fill
            sizes='650px'
          />
        </div>
      )}
    </label>
  );
}
