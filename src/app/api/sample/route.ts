import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  console.log('Hello World');

  // let response = NextResponse.json({ message: 'Hello World' });

  // response.cookies.set('test', '2');

  // return response;

  return NextResponse.json({ message: 'Hello World' });
}
