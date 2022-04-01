import { signOut } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nideknil</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div>
        <h1 className="text-red-500">Hello World</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
}
