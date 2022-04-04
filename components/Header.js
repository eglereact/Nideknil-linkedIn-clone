import Image from "next/image";
import logoWhite from "./../images/logoMainDark.png";
import {
  MdHome,
  MdSearch,
  MdChat,
  MdNotifications,
  MdOutlineApps,
  MdGroup,
  MdBusinessCenter,
  MdWbSunny,
} from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <header
      className="flex items-center sticky top-0 bg-white dark:bg-[#1D2226] z-40 justify-around py-1.5 px-3
    focus-within:shadow-lg"
    >
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src={logoWhite} width={45} height={45} />
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <MdSearch />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70
             dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={MdHome} text="Home" feed active />
        <HeaderLink Icon={MdGroup} text="My Network" feed />
        <HeaderLink Icon={MdBusinessCenter} text="Jobs" feed hidden />
        <HeaderLink Icon={MdChat} text="Messaging" feed />
        <HeaderLink Icon={MdNotifications} text="Notifications" feed />
        <HeaderLink Icon={MdGroup} text="Me" feed avartar hidden />
        <HeaderLink Icon={MdOutlineApps} text="Work" feed hidden />
        {/* Dark mode toggle */}
        <div
          className={`bg-gray-600 flex- items-center px-1.5 rounded-full h-6 w-12 cursor-pointer 
          flex-shirk-0 relative`}
        >
          <span className="absolute left-1 text-white mt-1">
            <BsMoonFill />
          </span>
          <span className="absolute right-0.5 text-white text-xl mt-0.5">
            <MdWbSunny />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
