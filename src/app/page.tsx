import { getProducts } from '@/services//users';
import Link from 'next/link';

export const revalidate = 20;
// export const dynamic = 'auto';

export default async function Home() {
  const data = await getProducts();

  return (
    <div>
      <h1>Home Page</h1>

      <Link href='/users'>Users Page</Link>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
