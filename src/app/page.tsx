import { prisma } from '@/utils/prisma';

// export const revalidate = 20;
// export const dynamic = 'auto';

export default async function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
