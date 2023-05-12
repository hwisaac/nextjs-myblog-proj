import { IPost, getAllPostsOf } from '@/service/post';
import Slider from '@/components/slider/Slider';
import PortalKV from '@/components/PortalKV';
import PostsSection from '@/components/PostsSection';
import MeWithPortal from '@/components/about/MeWithPortal';
import SliderWithPortal from '@/components/SliderWithPortal';


export default async function HomePage() {
  const posts = await getAllPostsOf(process.env.MY_EMAIL);
  return (
    <section className='flex flex-col p-10 gap-14'>
      <SliderWithPortal />
      <PostsSection posts={posts} />
    </section>
  );
}
