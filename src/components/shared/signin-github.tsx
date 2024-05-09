'use client';

import { Button } from '../ui/button';

function Signin({ signIn }: { signIn: () => void }) {
  return <Button onClick={() => signIn()}>Sign In Github</Button>;
}

export default Signin;
