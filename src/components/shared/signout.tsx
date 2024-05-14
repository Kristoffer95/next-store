'use client';

import { Button } from '../ui/button';

function Signout({ signOut }: { signOut: () => void }) {
  return <button onClick={() => signOut()}>Sign Out</button>;
}

export default Signout;
