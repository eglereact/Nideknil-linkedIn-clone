import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import logo from "./../images/logo.png";
import {
  MdGroup,
  MdOutlineExplore,
  MdOndemandVideo,
  MdBusinessCenter,
} from "react-icons/md";

function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
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
          <div className="pl-4 ">
            <button
              className="w-24 text-[#0073B0] font-semibold rounded-full border border-[#0073B0] px-5 py-1.5
              transition duration-150 ease-in-out hover:bg-[#EAF4FE] hover:border-2"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
