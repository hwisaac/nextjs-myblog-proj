'use client';
import React, { useState } from 'react';
import SlideCard from './SlideCard';
import { AnimatePresence, motion } from 'framer-motion';
import Circles from './Circles';
import SliderArrows from './SliderArrows';
import { IPost } from '@/service/post';

export interface ISlide {
  image: string;
  alt: string;
  tags: string[];
  title: string;
  date: string;
}

const postSlides: IPost[] = [
  {
    tags: ['TypeORM', 'back-end'],
    postId: '12ffc6ee-e4d2-45f9-a3e5-607643a822c8',
    createdAt: '2023-05-10T10:51:11Z',
    updatedAt: '2023-05-20T07:29:47Z',
    commentsLength: 0,
    title: 'TypeORM: getting started',
    slug: 'typeorm-getting-started',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/964d2bbb3aff12fcaec5e6dc66f8ede201fbfa85-4928x3264.jpg?w=800',
    description:
      'TypeORM`은 NodeJS, 브라우저, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, Electron 플랫폼에서 실행할 수 있으며 TypeScript 및 JavaScript (ES5, ES6, ES7, ES8)와 함께 사용할 수 있는 ORM입니다.',
  },
  {
    updatedAt: '2023-05-20T07:30:45Z',
    description:
      'next/font`는 사용자 정의 폰트를 포함하여 모든 폰트 파일을 자동으로 최적화하고 개인 정보 보호와 성능 향상을 위해 외부 네트워크 요청을 제거합니다.  > 🎥 영상 보기: `next/font` 사용 방법 알아보기 → [YouTube (6분)](https://www.youtube.com/watch?v=L8_98i_bMMA&ab_channel=LeeRobinson).',
    tags: ['nextjs', 'font', 'optimization'],
    postId: 'drafts.f4e25414-7269-4430-84ff-810d882d2e6d',
    createdAt: '2023-05-05T09:43:10Z',
    commentsLength: 1,
    title: 'NextJS : font 최적화',
    slug: 'nextjs-font-최적화',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/2918ba293a774cf9506ae23642e7abfdc594d936-5184x3888.jpg?w=800',
  },
  {
    slug: 'jsonwebtoken-라이브러리',
    description:
      'jsonwebtoken은 JSON 형식으로 인증 정보를 생성하고 검증하기 위한 라이브러리입니다. 이 라이브러리는 서버와 클라이언트 간에 인증을 처리할 때 사용됩니다.  jsonwebtoken은 암호화된 토큰을 생성합니다. 이 토큰은 사용자의 ID나 권한 등을 포함한 JSON 형식의 데이터를 포함하며, 이 데이터는 암호화되어 있습니다. 서버에서는 이 암호화된 토큰을 클라이언트에게 전달하고, 클라이언트는 이 토큰을 사용하여 서버에 인증 요청을 보냅니다.',
    tags: ['jwt', 'back-end'],
    postId: '42808c7a-bd93-4b9b-ab41-acae8fe0b102',
    createdAt: '2023-05-10T10:52:59Z',
    commentsLength: 0,
    title: 'jsonwebtoken 라이브러리',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/666fe7368840d04a7c1d6722cc565a7813981478-5184x3456.jpg?w=800',
    updatedAt: '2023-05-20T07:30:07Z',
  },
  {
    title: 'Text content does not match server-rendered HTML',
    slug: 'text-content-does-not-match-server-rendered-html',
    postId: 'da44669e-9ec1-4f25-828c-5dd2956b1143',
    createdAt: '2023-05-05T09:38:16Z',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/278a0a6a6c3a8b98263903f793a4dd8fab474b4e-3377x2782.jpg?w=800',
    description:
      '애플리케이션을 렌더링하는 동안, 서버 사이드 렌더링(SSR/SSG)된 `React` 트리와 브라우저에서 첫 렌더링 시 렌더링된 `React` 트리 간에 차이가 있었습니다. 첫 번째 렌더링은 `React`의 `Hydration` 기능 중 하나입니다.',
    tags: ['nextjs', 'front-end', 'error'],
    updatedAt: '2023-05-20T07:32:04Z',
    commentsLength: 2,
  },
];

const divVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};
export default function Slider() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const onNext = () => {
    setVisibleIndex((prev) => (prev === postSlides.length - 1 ? 0 : prev + 1));
  };
  const onPrev = () => {
    setVisibleIndex((prev) => (prev === 0 ? postSlides.length - 1 : prev - 1));
  };

  return (
    <section className='w-full flex items-center border bg-white shadow-sm mx-auto max-w-6xl h-96 relative mb-20'>
      <AnimatePresence>
        <motion.div
          variants={divVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          key={visibleIndex}
          className='absolute w-full h-full'>
          <SlideCard post={postSlides[visibleIndex]} />
        </motion.div>
      </AnimatePresence>

      <Circles
        visibleIndex={visibleIndex}
        setVisibleIndex={setVisibleIndex}
        slidesLength={postSlides.length}
      />
      <SliderArrows onNext={onNext} onPrev={onPrev} />
    </section>
  );
}
