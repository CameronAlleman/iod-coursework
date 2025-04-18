import { useEffect, useReducer } from "react"; // continued on next slide
import axios from "axios"; // first do 'npm install axios' - alternative to fetch
import { PostListReducer } from "./PostListReducer.js";

export default function PostList() {
  const [postsResult, dispatch] = useReducer(PostListReducer, {
    // initial state for postsResult state variable
    loading: true, // true when loading and no data in posts
    posts: [], // empty until data is fetched
    error: "", // empty unless there was an error
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // modify this URL to test the error case
      .then((response) => {
        // object passed to dispatch holds all data needed for updating state: both type of update and associated data
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // dispatch calls reducer function and triggers re-render
      })

      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); // lets us handle different types of state changes differently
      });
  }, []);

  // returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message
  return (
    <div className="PostList componentBox">
      {postsResult.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsResult.posts.map(
          (
            post // list of posts is just one of the things stored in the postsResult state object
          ) => (
            <div className="post" key={post.id}>
              <h3>
                Post #{post.id}: {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          )
        )
      )}
      <div className="error">{postsResult.error}</div>
    </div>
  );
}
