// 'use client';
import React from 'react';
import PortalKV from './PortalKV';
import Slider from './slider/Slider';
type Props = {};

export default function SliderWithPortal({}: Props) {
  return (
    <PortalKV>
      <Slider />
    </PortalKV>
  );
}
