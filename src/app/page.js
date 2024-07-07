import { db } from '@/app/lib/db';

export default async function Home() {
  const counter = await db.incr('counter');

  return (
    <main>
      <h1>Hello World {counter}</h1>
    </main>
  );
}
