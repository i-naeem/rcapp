import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const GET = async request => {
  const session = await getServerSession(authOptions);

  if (session) {
    return NextResponse.json({
      content: 'This is protected content. You can access this content because you are signed in.',
    });
  } else {
    return NextResponse.json({
      error: 'You must be signed in to view the protected content on this page.',
    });
  }
};
