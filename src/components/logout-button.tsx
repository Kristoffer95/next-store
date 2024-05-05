'use client';

type Props = {
  signOut: () => void;
};

function LogoutButton({ signOut }: Props) {
  return (
    <button className='px-4 py-2 border rounded' onClick={() => signOut()}>
      Logout
    </button>
  );
}

export default LogoutButton;
