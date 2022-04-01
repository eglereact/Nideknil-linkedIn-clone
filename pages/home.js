import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import logo from "./../images/logo.png";
import homeImage from "./../images/home.svg";
import { getProviders, signIn } from "next-auth/react";

import {
  MdGroup,
  MdOutlineExplore,
  MdOndemandVideo,
  MdBusinessCenter,
} from "react-icons/md";
import { BsChevronCompactRight } from "react-icons/bs";
import Head from "next/head";

function Home({ providers }) {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>Nideknil: Login</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <header className="flex justify-between items-center py-4 max-w-screen-lg mx-auto">
        <div className="relative w-36 h-10">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-[24px]">
            <HeaderLink Icon={MdOutlineExplore} text="Discover" />
            <HeaderLink Icon={MdGroup} text="People" />
            <HeaderLink Icon={MdOndemandVideo} text="Learning" />
            <HeaderLink Icon={MdBusinessCenter} text="Jobs" />
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4 ">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="w-24 text-[#0073B0] font-semibold rounded-full border border-[#0073B0] px-5 py-1.5
                transition duration-150 ease-in-out hover:bg-[#EAF4FE] hover:border-2"
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-[#976557] max-w-xl !leading-snug pl-4 xl:pl-0 font-thin">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="home-suggestions">
              <h2 className="text-xl text-[#925BD2]">Search for a job</h2>
              <BsChevronCompactRight className="text-gray-700" />
            </div>
            <div className="home-suggestions">
              <h2 className="text-xl">Find a person you know</h2>
              <BsChevronCompactRight className="text-gray-700" />
            </div>
            <div className="home-suggestions">
              <h2 className="text-xl">Learn a new skill</h2>
              <BsChevronCompactRight className="text-gray-700" />
            </div>
          </div>
        </div>
        {/* <div className="relative xl:absolute  w-80 h-80 xl:w-[650px] xl:h-[650px] xl:left-1/2">
          <Image src={homeImage} layout="fill" priority />
        </div> */}
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
