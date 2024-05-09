import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{session?.user?.name}</pre>
    </div>
  );
}
