import React from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';

type Props = { type: 'right' | 'left' | 'up' | 'down'; className?: string };

export default function IconArrow({ type, className = '', ...props }: Props) {
  switch (type) {
    case 'right':
      return <AiOutlineArrowRight {...props} className={className} />;
    case 'left':
      return <AiOutlineArrowLeft {...props} className={className} />;
    case 'up':
      return <AiOutlineArrowUp {...props} className={className} />;
    case 'down':
      return <AiOutlineArrowDown {...props} className={className} />;
  }
  return <AiOutlineArrowRight />;
}
