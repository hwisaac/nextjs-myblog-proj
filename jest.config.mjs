import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Next.js 앱의 경로를 제공하여 테스트 환경에서 next.config.js 및 .env 파일을 로드합니다.
  dir: './',
});

// Jest에 전달되는 사용자 정의 구성을 추가하세요
/** @type {import('jest').Config} */
const config = {
  // 각 테스트가 실행되기 전에 더 많은 설정 옵션을 추가하세요
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig는 Next.js 구성을 비동기적으로 로드할 수 있도록 이렇게 내보내야 합니다.
export default createJestConfig(config);
