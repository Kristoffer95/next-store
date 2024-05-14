'use client';

function Signin({ signIn }: { signIn: () => void }) {
  return <button onClick={() => signIn()}>Sign in with Github</button>;
}

export default Signin;
