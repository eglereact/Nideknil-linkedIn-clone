import { signOut } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nideknil</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div>
        <Header />
        <h1 className="text-red-500">Hello World</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
}
