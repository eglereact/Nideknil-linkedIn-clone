import { AnimatePresence } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ posts }) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
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
            <Sidebar />
            <Feed posts={posts} />
          </div>
          {/* widges */}
          <AnimatePresence>
            {modalOpen && (
              <Modal handleClose={() => setModalOpen(false)} type={modalType} />
            )}
          </AnimatePresence>
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

  //get post on SSR
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  return {
    props: {
      session,
      posts: posts.map((post) => ({
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImage: post.userImage,
        createdAt: post.createdAt,
      })),
    },
  };
}
