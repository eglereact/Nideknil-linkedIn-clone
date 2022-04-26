import {
  MdMoreHoriz,
  MdClose,
  MdOutlineComment,
  MdThumbUpOffAlt,
  MdThumbUp,
  MdDeleteOutline,
  MdReply,
} from "react-icons/md";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { useState } from "react";
import { getPostState, handlePostState } from "../atoms/postAtom";
import { useSession } from "next-auth/react";
import TimeAgo from "timeago-react";

function Post({ post, modalPost }) {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [postState, setPostState] = useRecoilState(getPostState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [showInput, setShowInput] = useState(false);
  const [liked, setLiked] = useState(false);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);

  const truncate = (text, number) =>
    text?.length > number ? text.substr(0, number - 1) + "... See more" : text;

  const deletePost = async () => {
    const response = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setHandlePost(true);
    setModalOpen(false);
  };

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
          <TimeAgo
            datetime={post.createdAt}
            className="text-sm dark:text-white/75 opacity-80"
          />
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

      <div
        className="flex justify-evenly items-center dark:border-t border-gray-600/80 mx-2.5
      pt-2 text-black/60 dark:text-white/75"
      >
        {modalPost ? (
          <button className="postBtn">
            <MdOutlineComment />
            <h4>Comment</h4>
          </button>
        ) : (
          <button
            className={`postBtn ${liked && "text-blue-500"}`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? <MdThumbUp /> : <MdThumbUpOffAlt />}

            <h4>Like</h4>
          </button>
        )}
        {session?.user?.email === post.email ? (
          <button className="postBtn focus:text-red-400" onClick={deletePost}>
            <MdDeleteOutline />
            <h4>Delete Post</h4>
          </button>
        ) : (
          <button className="postBtn">
            <MdReply className="-scale-x-100" />
            <h4>Share</h4>
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
