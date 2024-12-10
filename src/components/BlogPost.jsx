import { useNavigate } from "react-router-dom";
import { baseURL } from "../config/apiConfig";

export default function BlogPost({ id, title, content, image, slug, tags }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 col-xl-4">
      <div className="card cursor-pointer" onClick={() => navigate(id.toString())}>
        <img src={`${baseURL}/${image}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}
