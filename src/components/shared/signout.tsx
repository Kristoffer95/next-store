'use client';

import { Button } from '../ui/button';

function Signout({ signOut }: { signOut: () => void }) {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}

export default Signout;
