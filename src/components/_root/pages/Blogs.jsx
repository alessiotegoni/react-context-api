import { useEffect, useState } from "react";
import { api } from "../../../config/apiConfig.js";
import BlogPost from "../../BlogPost.jsx";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogsPosts = async () => {
    try {
      const { data } = await api.get("/posts");
      setBlogPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogsPosts();
  }, []);

  return (
    <>
      <h1 className="mb-3">I nostri post</h1>
      <div className="row g-2">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
export default Blogs;
