import TestComp from '@/components/home/testComp';

export default async function Home() {
  return (
    <div className='container py-10'>
      <h1>Home Page</h1>
      <TestComp />
    </div>
  );
}
