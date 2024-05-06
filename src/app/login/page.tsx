'use client';

// import { AuthError } from 'next-auth';
// import { signIn } from 'next-auth/react';
// import { signIn } from '@/auth';
import { useFormState, useFormStatus } from 'react-dom';

// async function authenticate(prevState: string | undefined, formData: FormData) {
//   'use server';

//   try {
//     // @ts-ignore
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials';
//         default:
//           return 'something went wrong';
//       }
//       // return error.message;
//     }

//     throw error;
//   }
// }

// components
// function LoginButton() {
//   const { pending } = useFormStatus();

//   return <button aria-disabled={pending}>Login</button>;
// }

function LoginPage() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div>
      login page
      {/* <form action={dispatch}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          className='block'
        />
        <input type='password' placeholder='password' className='block' />
        <LoginButton />

        <div>{errorMessage}</div>
      </form> */}
    </div>
  );
}

export default LoginPage;
