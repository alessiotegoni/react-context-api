import { usePosts } from "../../context/PostsContext";
import BlogPost from "./BlogPost";

export default function BlogPostsList() {
  const { posts } = usePosts();

  return posts.length ? (
    <div className="row g-2">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  ) : (
    <h2>Non hai nessun post</h2>
  );
}
