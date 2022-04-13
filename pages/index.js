import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    //The user not authenticated on client side
    onUnauthenticated() {
      router.push("/home");
    },
  });
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
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //The user not authenticated on server side
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
