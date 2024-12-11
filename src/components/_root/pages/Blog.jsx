import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api, baseURL } from "../../../config/apiConfig";
import BlogPost from "../../BlogPosts/BlogPost";
import { usePosts } from "../../../context/PostsContext";

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();

  const [blogPost, setBlogPost] = useState(
    posts.find((post) => post.id === id)
  );
  const [cursors, setCursors] = useState(null);

  const getBlogsPost = async () => {
    if (!id) return;

    try {
      const {
        data: { post, prevCursor, nextCursor },
      } = await api.get(`/posts/${id}`);
      if (post) {
        setBlogPost(post);
        setCursors({ prevCursor, nextCursor });
      }
    } catch (err) {
      navigate(`/blog/${cursors.nextCursor || cursors.prevCursor}`);
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogsPost();
  }, [id]);

  return blogPost ? (
    <div className="d-flex align-items-center gap-3">
      {!!cursors.prevCursor && (
        <Link
          to={`/blog/${cursors.prevCursor}`}
          className="btn rounded-full bg-primary"
        >
          ⬅️
        </Link>
      )}
      <BlogPost {...blogPost} setPost={setBlogPost} />
      {!!cursors.nextCursor && (
        <Link
          to={`/blog/${cursors.nextCursor}`}
          className="btn rounded-full bg-primary"
        >
          ➡️
        </Link>
      )}
    </div>
  ) : (
    <h2>Post non trovato</h2>
  );
}
