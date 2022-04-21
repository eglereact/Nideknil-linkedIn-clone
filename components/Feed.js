import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "./../atoms/postAtom";

function Feed({ posts }) {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      setRealtimePosts(false);
    };
    fetchPost();
  }, [handlePost]);
  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
    </div>
  );
}

export default Feed;
