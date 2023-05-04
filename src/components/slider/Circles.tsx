import React from 'react';

type Props = {
  visibleIndex: number;
  setVisibleIndex: React.Dispatch<React.SetStateAction<number>>;
  slidesLength: number;
};

export default function Circles({
  visibleIndex,
  setVisibleIndex,
  slidesLength,
}: Props) {
  const arr = new Array(slidesLength).fill(0);

  return (
    <div className='text-4xl z-50 absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 items-center'>
      {arr.map((x, index) => (
        <div
          key={index}
          className={`rounded-full w-3 h-3 box-content shadow-sm cursor-pointer ${
            index === visibleIndex ? 'bg-uRed' : 'bg-uPrimary'
          } `}
          onClick={() => setVisibleIndex(index)}
        />
      ))}
    </div>
  );
}
