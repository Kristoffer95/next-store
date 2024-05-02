import { db } from '@/db';
import Link from 'next/link';

async function getPosts() {
  return await db.query.posts.findMany();
}

export default async function Home() {
  const result = await getPosts();

  return (
    <div>
      <h1>Home Page</h1>

      <Link href='/users'>Users Page</Link>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
