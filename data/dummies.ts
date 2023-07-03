const posts = [
  {
    slug: 'oop-캡슐화-1685710573386',
    description:
      '객체지향 프로그래밍의 캡슐화는 데이터와 메서드를 하나의 단위로 묶어 외부에서 직접 접근하지 못하도록 보호하는 개념입니다.   이를 통해 객체의 내부 구현 정보를 숨기고, 객체 간의 결합도를 낮춤으로써 코드의 유지보수성과 재사용성을 향상시킬 수 있습니다.  예를 들어,',
    updatedAt: '2023-06-21T12:22:07Z',
    title: 'oop: 캡슐화',
    tags: ['oop'],
    postId: 'AASYvnbZHaG7QhINu1S7qg',
    createdAt: '2023-06-02T12:56:13Z',
    commentsLength: 6,
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/b64b4577dd3bf2110a1f836cbd29ba572fbf88c1-5840x3741.jpg?w=800',
  },
  {
    postId: 'nTFm2VscxOrnKR8ozYiMZ4',
    createdAt: '2023-05-28T11:32:55Z',
    title: 'Jest - get Started',
    slug: 'jest-get-started-1685273575555',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/666fe7368840d04a7c1d6722cc565a7813981478-5184x3456.jpg?w=800',
    tags: ['jest', '문서'],
    description:
      '시작하기  bash npm install --save-dev jest  시작하기 전에 두 숫자를 더하는 가상의 함수에 대한 테스트를 작성해보겠습니다. 먼저 sum.js 파일을',
    updatedAt: '2023-06-08T08:49:35Z',
    commentsLength: 3,
  },
  {
    title: 'Jest API - Globals',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/964d2bbb3aff12fcaec5e6dc66f8ede201fbfa85-4928x3264.jpg?w=800',
    postId: 'nTFm2VscxOrnKR8ozYetI4',
    createdAt: '2023-05-28T11:00:27Z',
    updatedAt: '2023-06-01T11:25:22Z',
    commentsLength: 0,
    slug: 'jest-api-globals',
    description:
      'Globals Jest는 각각의 메서드와 객체를 전역 환경global environment에 넣습니다. 이들을 사용하려면 require 또는 import를 하지 않아도',
    tags: ['jest'],
  },
  {
    tags: ['nextjs', 'test', 'cypress'],
    postId: 'fe4222b7-22b6-49fe-8937-14b4dbd1dc64',
    updatedAt: '2023-05-29T11:38:51Z',
    commentsLength: 0,
    title: 'Next.js: 테스팅',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/c51426bfbece7ab3a0a0eb2b97b9de4da4b1e426-5184x3456.jpg?w=800',
    description:
      '이 문서에서는 `Cypress`, `Playwright`, `Jest`와 `React Testing Library`와 같은 대표적인 테스팅 툴을 사용하여 `Next.js`를 어떻게 설정하는지 배울 수 있습니다.',
    createdAt: '2023-05-11T02:12:01Z',
    slug: 'nextjs-테스팅',
  },
  {
    commentsLength: 0,
    title: 'NextJS API: getServerSideProps',
    description:
      'getServerSideProps 함수를 페이지에서 내보내면 (서버 측 렌더링), Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 요청마다이 페이지를 사전 렌더링합니다. 이것은 자주 변경되는 데이터를 가져 오고 페이지가 가장 최신 데이터를 보여주도록하려는 경우 유용합니다.',
    postId: '88b27585-02c7-4855-aff1-0070489d3131',
    createdAt: '2023-05-10T10:58:07Z',
    updatedAt: '2023-06-01T11:25:52Z',
    slug: 'next-js-api-get-server-side-props',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/cbd5361f24572c42ffe3ce4d416f7c5f8a950888-6016x4016.jpg?w=800',
    tags: ['nextjs', 'front-end'],
  },
  {
    slug: 'nextjs-api-getstaticprops',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/1ba4b779332b42f7341436e5471d651a14039ac2-3840x2160.jpg?w=800',
    description:
      'etStaticProps에서는 모듈을 import하여 데이터베이스에서 데이터를 가져와 서버쪽에서 코드를 직접 작성할 수 있습니다. 사용된 import는 클라이언트 쪽에서 번들링되지 않습니다.  Context 매개변수 Context 매개변수는 다음과 같은 키를 가지는 객체입니다:  params는 동적 라우트를 사용하는 페이지에서 라우트 매개변수를 포함합니다. 예를 들어, 페이지 이름이 [id].js라면 params는 { id: ... }와 같습니다. getStaticPaths와 함께 사용해야 합니다. preview는 페이지가 미리보기 모드인지(true) 그렇지 않은지(undefined) 여부를 나타냅니다. previewData는 setPreviewData에 의해 설정된 미리보기 데이터를 포함합니다.',
    createdAt: '2023-05-10T10:57:17Z',
    updatedAt: '2023-05-20T07:31:28Z',
    title: 'NextJS API: getStaticProps',
    postId: 'b3fb95e6-900d-477e-8eb6-2353d5fb87e9',
    commentsLength: 0,
    tags: ['nextjs', 'front-end'],
  },
  {
    commentsLength: 0,
    slug: 'nextjs-api-nextserver',
    description:
      'next/server는 미들웨어 및 Edge API 라우트에서 사용할 수 있는 서버 전용 도우미를 제공합니다.',
    createdAt: '2023-05-10T10:54:26Z',
    updatedAt: '2023-05-20T07:31:46Z',
    title: 'NextJS API: next/server',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/ef038b14ea8394be33d7e92e93775d06190e260d-4831x3221.jpg?w=800',
    tags: ['nextjs', 'back-end'],
    postId: '73b63c68-cadb-4e96-a6e1-7deea6a95431',
  },
  {
    postId: '6c0182ee-4d45-4713-8348-c3445a17373e',
    createdAt: '2023-05-10T10:53:48Z',
    description:
      'Firebase Functions을 테스트하는 방법은 크게 두 가지입니다.  1. 로컬 환경에서 테스트하기 Firebase Functions을 로컬 환경에서 테스트하려면 Firebase Emulators를 사용할 수 있습니다. Firebase Emulators는 Firebase의 여러 서비스를 로컬에서 실행할 수 있도록 도와주는 도구입니다.  다음은 Firebase Functions을 로컬에서 실행하고 테스트하는 방법입니다.  Firebase CLI를 설치합니다. CLI(Command Line Interface)는 터미널에서 Firebase 프로젝트를 관리하는 도구입니다.',
    slug: 'firebase-functions-테스트하기',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/add12962d791a57d136d164603301554e9874c46-4752x3168.jpg?w=800',
    tags: ['back-end', 'firebase'],
    updatedAt: '2023-05-20T07:30:24Z',
    commentsLength: 0,
    title: 'firebase functions 테스트하기 ',
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
    commentsLength: 0,
    title: 'TypeORM: getting started',
    slug: 'typeorm-getting-started',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/964d2bbb3aff12fcaec5e6dc66f8ede201fbfa85-4928x3264.jpg?w=800',
    tags: ['TypeORM', 'back-end'],
    description:
      'TypeORM`은 NodeJS, 브라우저, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, Electron 플랫폼에서 실행할 수 있으며 TypeScript 및 JavaScript (ES5, ES6, ES7, ES8)와 함께 사용할 수 있는 ORM입니다.',
    postId: '12ffc6ee-e4d2-45f9-a3e5-607643a822c8',
    createdAt: '2023-05-10T10:51:11Z',
    updatedAt: '2023-05-20T07:29:47Z',
  },
  {
    commentsLength: 1,
    title: 'NextJS : font 최적화',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/2918ba293a774cf9506ae23642e7abfdc594d936-5184x3888.jpg?w=800',
    tags: ['nextjs', 'font', 'optimization'],
    postId: 'drafts.f4e25414-7269-4430-84ff-810d882d2e6d',
    slug: 'nextjs-font-최적화',
    description:
      'next/font`는 사용자 정의 폰트를 포함하여 모든 폰트 파일을 자동으로 최적화하고 개인 정보 보호와 성능 향상을 위해 외부 네트워크 요청을 제거합니다.  > 🎥 영상 보기: `next/font` 사용 방법 알아보기 → [YouTube (6분)](https://www.youtube.com/watch?v=L8_98i_bMMA&ab_channel=LeeRobinson).',
    createdAt: '2023-05-05T09:43:10Z',
    updatedAt: '2023-05-20T07:30:45Z',
  },
  {
    title: 'NextJS : font 최적화',
    slug: 'nextjs-font-최적화',
    commentsLength: 1,
    postImage: null,
    description:
      'next/font`는 사용자 정의 폰트를 포함하여 모든 폰트 파일을 자동으로 최적화하고 개인 정보 보호와 성능 향상을 위해 외부 네트워크 요청을 제거합니다.  > 🎥 영상 보기: `next/font` 사용 방법 알아보기 → [YouTube (6분)](https://www.youtube.com/watch?v=L8_98i_bMMA&ab_channel=LeeRobinson).',
    tags: ['nextjs', 'font', 'optimization'],
    postId: 'f4e25414-7269-4430-84ff-810d882d2e6d',
    createdAt: '2023-05-05T09:43:10Z',
    updatedAt: '2023-05-20T06:55:42Z',
  },
  {
    title: 'Text content does not match server-rendered HTML',
    commentsLength: 2,
    updatedAt: '2023-05-20T07:32:04Z',
    slug: 'text-content-does-not-match-server-rendered-html',
    postImage:
      'https://cdn.sanity.io/images/6n5ee0tc/production/278a0a6a6c3a8b98263903f793a4dd8fab474b4e-3377x2782.jpg?w=800',
    description:
      '애플리케이션을 렌더링하는 동안, 서버 사이드 렌더링(SSR/SSG)된 `React` 트리와 브라우저에서 첫 렌더링 시 렌더링된 `React` 트리 간에 차이가 있었습니다. 첫 번째 렌더링은 `React`의 `Hydration` 기능 중 하나입니다.',
    tags: ['nextjs', 'front-end', 'error'],
    postId: 'da44669e-9ec1-4f25-828c-5dd2956b1143',
    createdAt: '2023-05-05T09:38:16Z',
  },
];
