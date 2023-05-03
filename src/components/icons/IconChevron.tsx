import React from 'react';
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from 'react-icons/fi';

type Props = {
  type: 'down' | 'up' | 'left' | 'right';
};

export default function IconChevron({ type, ...props }: Props) {
  switch (type) {
    case 'down':
      return <FiChevronDown {...props} />;
    case 'up':
      return <FiChevronUp {...props} />;
    case 'left':
      return <FiChevronLeft {...props} />;
    case 'right':
      return <FiChevronRight {...props} />;
  }
}
