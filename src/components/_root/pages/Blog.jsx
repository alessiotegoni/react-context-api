import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api, baseURL } from "../../../config/apiConfig";

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blogPost, setBlogPost] = useState(null);
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

  const handleDeletePost = async () => {
    try {
      const { data } = await api.delete(`/posts/${id}`);

      if (data.hasPosts) {
        navigate(`/blog/${cursors.nextCursor || cursors.prevCursor}`);
      } else {
        setBlogPost(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
      <div className="card">
        <img
          src={`${baseURL}/${blogPost?.image}`}
          className="card-img-top"
          alt={blogPost.title}
        />
        <div className="card-body">
          <h5 className="card-title">{blogPost.title}</h5>
          <p className="card-text">{blogPost.content}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-danger"
              onClick={() => id && handleDeletePost(id)}
            >
              Elimina post
            </button>
          </div>
        </div>
      </div>
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
