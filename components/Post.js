import { MdMoreHoriz, MdClose } from "react-icons/md";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { useState } from "react";
import { getPostState } from "../atoms/postAtom";

function Post({ post, modalPost }) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [postState, setPostState] = useRecoilState(getPostState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [showInput, setShowInput] = useState(false);

  const truncate = (text, number) =>
    text?.length > number ? text.substr(0, number - 1) + "... See more" : text;
  return (
    <div
      className={`bg-white dark:bg-[#1d2226] ${
        modalPost ? "rounded-r-lg" : "rounded-lg"
      } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
    >
      <div className="flex items-center px-2.5 cursor-pointer">
        <img src={post.userImage} alt="" className="h-10 w-10 rounded-full" />
        <div className="mr-auto ml-2 leading-none">
          <h6 className="font-medium hover:text-blue-500 hover:underline">
            {post.username}
          </h6>
          <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
        </div>
        {modalPost ? (
          <button
            onClick={() => setModalOpen(false)}
            className="dark:hover:bg-white/20 hover:bg-black/10 h-7 w-7 flex items-center justify-center rounded-full"
          >
            <MdClose className="dark:text-white/75 text-lg" />
          </button>
        ) : (
          <button className="dark:hover:bg-white/20 hover:bg-black/10 h-7 w-7 flex items-center justify-center rounded-full">
            <MdMoreHoriz className="dark:text-white/75 text-lg" />
          </button>
        )}
      </div>
      {post.input && (
        <div className="px-2.5 break-all md:break-normal">
          {modalPost || showInput ? (
            <p onClick={() => setShowInput(false)}>{post.input}</p>
          ) : (
            <p onClick={() => setShowInput(true)}>
              {truncate(post.input, 150)}
            </p>
          )}
        </div>
      )}
      {post.photoUrl && !modalPost && (
        <img
          src={post.photoUrl}
          alt=""
          className="w-full cursor-pointer"
          onClick={() => {
            setModalOpen(true);
            setModalType("gifYouUp");
            setPostState(post);
          }}
        />
      )}
    </div>
  );
}

export default Post;
