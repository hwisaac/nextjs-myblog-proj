import React from 'react';
import SNSSection from './SNSSection';
import BlogTitle from './BlogTitle';
import SearchIcon from './SearchIcon';
import NavBar from './NavBar';
import TopNav from './TopNav';

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <TopNav />
      <header className='border-red-800 max-w-5xl mx-auto py-20 space-y-10'>
        <div className='flex justify-center items-center relative'>
          <SNSSection />
          <BlogTitle />
          <SearchIcon />
        </div>
        <NavBar />
      </header>
    </>
  );
}
