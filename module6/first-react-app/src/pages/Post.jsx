import { useParams } from "react-router-dom";
import { useData } from "../hooks/BitcoinSync";

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..." //when post is not defined it says loading text, or you could use loading symbol...
      )}
    </div>
  );
}
