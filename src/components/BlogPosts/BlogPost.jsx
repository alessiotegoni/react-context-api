import { useLocation, useNavigate } from "react-router-dom";
import { api, baseURL } from "../../config/apiConfig";
import { usePosts } from "../../context/PostsContext";

export default function BlogPost({ post, setPost = () => {}, cursors = {} }) {
  const { setPosts } = usePosts();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { id, title, content, image, slug, tags } = post;

  const handleDeletePost = async (e) => {
    e.stopPropagation();

    try {
      const { data } = await api.delete(`/posts/${id}`);

      if (data.hasPosts && pathname === `/blog/${id}`) {
        navigate(`/blog/${cursors.nextCursor || cursors.prevCursor}`);
      } else {
        setPost(null);
      }
      setPosts((posts) => posts.filter((post) => post.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-md-6 col-xl-4">
      <div
        className="card cursor-pointer"
        onClick={() =>
          (pathname === "/blog" || pathname === "/") && navigate(`/blog/${id}`)
        }
      >
        <img src={`${baseURL}/${image}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger" onClick={handleDeletePost}>
              Elimina post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
