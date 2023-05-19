import PostsSection from '@/components/PostsSection';
import SliderWithPortal from '@/components/SliderWithPortal';

export default async function HomePage() {
  return (
    <section className='flex flex-col p-10 gap-14'>
      <SliderWithPortal />
      <PostsSection />
    </section>
  );
}
