import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import {
  MdBusinessCenter,
  MdArticle,
  MdVideoCameraBack,
  MdInsertPhoto,
} from "react-icons/md";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "./../atoms/modalAtom";

function Input() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  return (
    <div
      className="bg-white dark:bg-[#1D2226] rounded-lg p-3 space-y-3 border border-gray-300
     dark:border-none"
    >
      <div className="flex items-center space-x-2">
        <img
          src={session?.user?.image}
          className="h-10 w-10 cursor-pointer rounded-full"
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-full border-gray-400 border py-2.5 px-3 opacity-100 font-medium w-full text-left"
          onClick={() => {
            setModalOpen(true);
            setModalType("dropIn");
          }}
        >
          Start a post
        </motion.button>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10">
        <button className="inputButton group">
          <MdInsertPhoto className="text-blue-400 text-lg" />
          <h4 className="opacity-80 group-hover:opacity-100">Photo</h4>
        </button>
        <button className="inputButton group">
          <MdVideoCameraBack className="text-green-400 text-lg" />
          <h4 className="opacity-80 group-hover:opacity-100">Video</h4>
        </button>
        <button className="inputButton group">
          <MdBusinessCenter className="text-blue-300 text-lg" />
          <h4 className="opacity-80 group-hover:opacity-100">Job</h4>
        </button>
        <button className="inputButton group ">
          <MdArticle className="text-red-400 text-lg" />
          <h4 className="opacity-80 group-hover:opacity-100">Write Article</h4>
        </button>
      </div>
    </div>
  );
}

export default Input;
