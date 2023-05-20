'use client';
import createSlug from '@/utils/createSlug';
import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from 'react';

interface Props {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

export default function TagInput({ tags, setTags }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const newTag = createSlug(inputValue);
    if (event.key === 'Enter' && newTag) {
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
      console.log(tags);
    }
  };
  const handleTagRemove = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <div className='flex border bg-uBgColor border-uPrimary/5 flex-wrap'>
      <ul className='flex items-center gap-1 flex-wrap'>
        {tags.map((tag, index) => (
          <li
            className='flex h-fit rounded-xl bg-white text-uTwitter text-xs py-1 px-2 cursor-pointer hover:bg-gray-100'
            key={`tag-${index}`}
            onClick={() => handleTagRemove(tag)}>
            {tag}
          </li>
        ))}
      </ul>
      <input
        className='p-2 text-uFontColor bg-transparent outline-none grow'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder='Enter tags...'
      />
    </div>
  );
};

