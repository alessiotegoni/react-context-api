import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../config/apiConfig";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getBlogsPosts = async () => {
    try {
      const { data } = await api.get("/posts");
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogsPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, getBlogsPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
export default PostsProvider;

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("usePosts must be used inside PostsProvider");

  return context;
};
