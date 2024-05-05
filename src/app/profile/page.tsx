import Image from 'next/image';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

async function Profile() {
  const session = await auth();

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Image
        src={session?.user?.image || '/vercel.svg'}
        alt='Vercel Logo'
        width={300}
        height={300}
      />
    </div>
  );
}

export default Profile;
