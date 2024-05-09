import { auth } from '@/auth';

async function Profile() {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {/* <Image
        src={session?.user?.image || '/vercel.svg'}
        alt='Vercel Logo'
        width={300}
        height={300}
      /> */}
    </div>
  );
}

export default Profile;
