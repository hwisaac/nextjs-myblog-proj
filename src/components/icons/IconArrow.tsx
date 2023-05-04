import React from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';

type Props = {
  type: 'right' | 'left' | 'up' | 'down';
  className?: string;
  onClick?: () => void;
};

export default function IconArrow({
  type,
  className = '',
  onClick = () => undefined,
  ...props
}: Props) {
  switch (type) {
    case 'right':
      return (
        <AiOutlineArrowRight
          {...props}
          className={className}
          onClick={onClick}
        />
      );
    case 'left':
      return (
        <AiOutlineArrowLeft
          {...props}
          className={className}
          onClick={onClick}
        />
      );
    case 'up':
      return (
        <AiOutlineArrowUp {...props} className={className} onClick={onClick} />
      );
    case 'down':
      return (
        <AiOutlineArrowDown
          {...props}
          className={className}
          onClick={onClick}
        />
      );
  }
  return <AiOutlineArrowRight />;
}
