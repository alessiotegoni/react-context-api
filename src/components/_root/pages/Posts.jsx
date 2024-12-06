import { posts } from "../../constants";

const Posts = () => {
  return (
    <>
      <h1 className="mb-3">I nostri post</h1>
      <div className="row g-2">
        {posts.map((post) => (
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Posts;
