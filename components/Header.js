import Image from "next/image";
import logoWhite from "./../images/logoMain.png";
import logoBlue from "./../images/logoMainDark.png";
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
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="flex items-center sticky top-0 bg-white dark:bg-[#1D2226] z-40 justify-around py-1.5 px-3
    focus-within:shadow-lg"
    >
      <div className="flex items-center space-x-2 w-full max-w-xs">
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image src={logoBlue} width={45} height={45} />
            ) : (
              <Image src={logoWhite} width={45} height={45} />
            )}
          </>
        )}
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <MdSearch className="text-xl" />
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
        {mounted && (
          <div
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer 
          flex-shirk-0 relative ${
            resolvedTheme === "dark" ? "justify-end" : "justify-start"
          }`}
          >
            <motion.div
              className="w-5 h-5 bg-white rounded-full"
              layout
              transition={spring}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
