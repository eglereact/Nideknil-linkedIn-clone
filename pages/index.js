import { signOut } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nideknil</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div
        className="bg-[#f3f2ef] dark:bg-black dark:text-white h-screen overflow-y-scroll
      md:space-y-6"
      >
        <Header />
        <main className="flex justify-center gap-x-4 px-4 sm:px-12">
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              <Sidebar />
              {/* feed */}
            </div>
            {/* widges */}
          </div>
        </main>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  );
}
