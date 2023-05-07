import React from 'react';
import TagCard from '../TagCard';

type Props = { tags: string[] };

export default function CategorySection({ tags }: Props) {
  return (
    <section className='w-full flex flex-col items-center gap-4 my-10'>
      <h6 className='text-uPrimary font-bold'>Categorized in:</h6>
      <ul className='flex flex-wrap px-10 gap-3'>
        {tags.map((tag, index) => (
          <li key={`tag ${index}`}>
            <TagCard tag={tag} />
          </li>
        ))}
      </ul>
    </section>
  );
}
