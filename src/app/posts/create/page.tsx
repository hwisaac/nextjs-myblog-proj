import CreatePostForm from '@/components/post-write/CreatePostForm';

export default function WritePage() {
  return (
    <section className='flex flex-col bg-white shadow-lg space-y-4 px-10 py-14'>
      <h1 className='text-uPrimary font-bold text-4xl mb-10'>Create a Post</h1>
      <CreatePostForm />
    </section>
  );
}
