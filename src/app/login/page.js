import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/dashboard');
  }

  return (
    <main>
      <h1>Login</h1>
    </main>
  );
}
