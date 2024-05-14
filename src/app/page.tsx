import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <div className='container py-10'>
      <h1>Home Page</h1>
    </div>
  );
}
