import { Inter, Noto_Serif_Display } from 'next/font/google';

export const primaryFont = Inter({ subsets: ['latin'], variable: '--default' });

export const accentFont = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--accent',
});
