import { useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../../config/apiConfig";
import { usePosts } from "../../context/PostsContext";

export default function BlogPost({
  id,
  title,
  content,
  image,
  slug,
  tags,
  setPost = () => {},
}) {
  const { setPosts } = usePosts();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);
  const handleDeletePost = async (e) => {
    e.stopPropagation();
    try {
      const { data } = await api.delete(`/posts/${id}`);

      if (data.hasPosts) {
        // navigate(`/blog/${cursors.nextCursor || cursors.prevCursor}`);
      } else {
        setPost(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-md-6 col-xl-4">
      <div
        className="card cursor-pointer"
        onClick={() =>
          pathname === "/blog" || (pathname === "/" && navigate(id.toString()))
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
