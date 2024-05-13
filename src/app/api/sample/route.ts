import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  console.log('Hello World');

  return NextResponse.json({ message: 'Hello World' });
}
