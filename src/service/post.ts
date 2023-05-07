import { readFile } from 'fs/promises';
import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { IUser } from './user';

export interface IPost {
  title: string;
  description: string;
  username?: string;
  createdAt: string;
  likes: number;
  image: string;
  comments: number;
  tags: string[];
  postId: string;
}

export interface IComment {
  username: string;
  email: string;
  password: string;
  content: string;
  createdAt: string;
}

export interface IPostData {
  author: IUser;
  title: string;
  createdAt: string;
  content: any;
  tags: string[];
  comments: IComment[];
  description: string;
}
export const dummyComment: IComment = {
  username: '유저네임',
  email: 'abcd@naver.com',
  password: '123123',
  content: 'content ttttasdfasdf',
  createdAt: '3232-32-32',
};

const posts: IPost[] = [
  {
    title: 'The spectacle before us was indeed sublime',
    createdAt: '2019-01-01',
    comments: 2,
    likes: 1082,
    description:
      'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar with everything in no time. This is the first one!…',
    tags: ['lifestyle', 'music'],
    image: '',
    postId: 'post01',
  },
  {
    title: 'The meaning of health has evolved over time',
    createdAt: 'July 26, 2019',
    comments: 1,
    likes: 946,
    description:
      'In keeping with the biomedical perspective, early definitions of health focused on the theme of the body’s ability to function; health was seen as a state of normal function that could be disrupted from time to time by disease. An…',
    tags: ['health', 'travel'],
    image: '',
    postId: 'post02',
  },
  {
    title: 'A small dog named Duden flows by their place',
    createdAt: 'July 25, 2019',
    comments: 0,
    likes: 831,
    description:
      'The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page. Access the post settings menu in the top right…',
    tags: ['travel'],
    image: '',
    postId: 'post03',
  },
  {
    title: '5 Spanish Cities that will make you fall in Love',
    createdAt: 'July 25, 2019',
    comments: 0,
    likes: 940,
    description:
      'Spain is home to some of the most stunning architecture in Europe, known throughout the world for its distinguishable form and famous historical monuments. With influences from the Romans to the Moors, you’ll find each city has a unique architectural…',
    tags: ['travel'],
    image: '',
    postId: 'post04',
  },
  {
    title: '3 ideas to keep you healthy and strong',
    createdAt: 'July 25, 2019',
    comments: 0,
    likes: 730,
    description:
      'Achieving and maintaining health is an ongoing process, shaped by both the evolution of health care knowledge and practices as well as personal strategies and organized interventions for staying healthy. Diet An important way to maintain your personal health is to have…',
    tags: ['travel'],
    image: '',
    postId: 'post05',
  },
  {
    title: 'These Are The 10 Best Restaurants in The World',
    createdAt: 'July 25, 2169',
    comments: 0,
    likes: 730,
    description:
      'Each year, fine diners, restaurateurs and food writers—I’m in the last group—try to read the annual World’s 50 Best Restaurant list like tea leaves, searching for trends, or at the very least, a coherent theme. But as in previous years,…',
    tags: ['lifestyle'],
    image: '',
    postId: 'post06',
  },
  {
    title: 'Top 10 old rock songs from the 80’s',
    createdAt: 'June 25, 2019',
    comments: 0,
    likes: 780,
    description:
      'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
    tags: ['lifestyle', 'music'],
    image: '',
    postId: 'post07',
  },
];

export const dummyPost: IPost = {
  title: 'Top 10 old rock songs from the 80’s',
  createdAt: 'June 25, 2019',
  comments: 0,
  likes: 780,
  description:
    'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
  tags: ['lifestyle', 'music'],
  image: '',
  postId: 'post07',
};

export async function getAllPosts(): Promise<IPost[]> {
  return posts;
}
export async function getNicoPostData(postId: string): Promise<IPostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', 'testMd.md');
  const content = await readFile(filePath, 'utf-8');

  const { value: html } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    author: {
      username: 'hwisaac',
      name: '이삭',
      email: 'abcd@naver.com',
      image: '/',
      posts: [],
    },
    title: 'NextJS: 폰트 최적화',
    createdAt: '1234-12-34',
    content: html,
    tags: ['nextjs', 'font', 'optimization'],
    comments: [dummyComment],
    description: 'description',
  };
}

export async function getPostData(postId: string): Promise<IPostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', 'testMd.md');
  const content = await readFile(filePath, 'utf-8');

  return {
    author: {
      username: 'hwisaac',
      name: '이삭',
      email: 'abcd@naver.com',
      image: '',
      posts: [],
    },
    title: 'NextJS: 폰트 최적화',
    createdAt: '1234-12-34',
    content,
    tags: ['nextjs', 'font', 'optimization'],
    comments: [dummyComment],
    description: 'description',
  };
}
