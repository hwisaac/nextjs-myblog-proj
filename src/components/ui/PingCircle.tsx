import React from 'react';

type Props = {
  addClassName: string;
};

export default function PingCircle({ addClassName }: Props) {
  return (
    <div className={`absolute opacity-70 ${addClassName}`}>
      <div
        className={`h-2 w-2 rounded-full absolute bg-uSkyBlue animate-ping`}
      />
      <div className={`h-2 w-2 rounded-full absolute bg-uSkyBlue`} />
    </div>
  );
}
