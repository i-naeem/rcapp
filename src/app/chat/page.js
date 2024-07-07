import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Chat() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }

  return (
    <main>
      <h1>Chat</h1>
    </main>
  );
}
