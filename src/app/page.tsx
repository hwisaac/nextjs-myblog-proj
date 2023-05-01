import { IPost } from '@/components/LatestArticlesBlock';
import PostCard from '@/components/PostCard';

const posts: IPost[] = [
  {
    title: 'The spectacle before us was indeed sublime',
    date: '2019-01-01',
    comments: 2,
    likes: 1082,
    description:
      'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar with everything in no time. This is the first one!…',
    categories: ['lifestyle', 'music'],
    image: '',
  },
  {
    title: 'The meaning of health has evolved over time',
    date: 'July 26, 2019',
    comments: 1,
    likes: 946,
    description:
      'In keeping with the biomedical perspective, early definitions of health focused on the theme of the body’s ability to function; health was seen as a state of normal function that could be disrupted from time to time by disease. An…',
    categories: ['health', 'travel'],
    image: '',
  },
  {
    title: 'A small dog named Duden flows by their place',
    date: 'July 25, 2019',
    comments: 0,
    likes: 831,
    description:
      'The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page. Access the post settings menu in the top right…',
    categories: ['travel'],
    image: '',
  },
  {
    title: '5 Spanish Cities that will make you fall in Love',
    date: 'July 25, 2019',
    comments: 0,
    likes: 940,
    description:
      'Spain is home to some of the most stunning architecture in Europe, known throughout the world for its distinguishable form and famous historical monuments. With influences from the Romans to the Moors, you’ll find each city has a unique architectural…',
    categories: ['travel'],
    image: '',
  },
  {
    title: '3 ideas to keep you healthy and strong',
    date: 'July 25, 2019',
    comments: 0,
    likes: 730,
    description:
      'Achieving and maintaining health is an ongoing process, shaped by both the evolution of health care knowledge and practices as well as personal strategies and organized interventions for staying healthy. Diet An important way to maintain your personal health is to have…',
    categories: ['travel'],
    image: '',
  },
  {
    title: 'These Are The 10 Best Restaurants in The World',
    date: 'July 25, 2169',
    comments: 0,
    likes: 730,
    description:
      'Each year, fine diners, restaurateurs and food writers—I’m in the last group—try to read the annual World’s 50 Best Restaurant list like tea leaves, searching for trends, or at the very least, a coherent theme. But as in previous years,…',
    categories: ['lifestyle'],
    image: '',
  },
  {
    title: 'Top 10 old rock songs from the 80’s',
    date: 'June 25, 2019',
    comments: 0,
    likes: 780,
    description:
      'Music is an art form and cultural activity whose medium is sound organized in time. General definitions of music include common elements such as pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics…',
    categories: ['lifestyle', 'music'],
    image: '',
  },
];

export default function HomePage() {
  return (
    <section>
      <PostCard post={posts[0]} />
    </section>
  );
}
