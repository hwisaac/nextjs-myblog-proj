import React from 'react';

type Props = {
  addClassName: string;
};

export default function PingCircle({ addClassName }: Props) {
  return (
    <div className={`absolute ${addClassName}`}>
      <div
        className={`h-1 w-1 rounded-full absolute bg-uSkyBlue animate-ping`}
      />
      <div className={`h-1 w-1 rounded-full absolute bg-uSkyBlue`} />
    </div>
  );
}
