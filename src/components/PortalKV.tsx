'use client';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';

type Props = { children: React.ReactNode };

export default function PortalKV({ children }: Props) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setNode(document.getElementById('portal'));
  }, []);

  if (!node) return null;

  return reactDom.createPortal(children, node);
}
