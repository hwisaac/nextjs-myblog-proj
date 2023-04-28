import React from 'react';
import GridSectionBlock from './footer/GridSectionBlock';
import Avatar from './Avatar';

type Props = {};

export default function AboutMeBlock({}: Props) {
  return (
    <GridSectionBlock title='About me'>
      <div className='w-full'>
        <Avatar />
      </div>
    </GridSectionBlock>
  );
}
