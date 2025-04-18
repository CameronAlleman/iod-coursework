import { Link, useSearchParams } from "react-router-dom";
import { useData } from "../hooks/BitcoinSync";

export function PostList() {
  // updated from slide 60, replace old version
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );
  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <div>Number of Posts</div>
      <span>Number of Posts</span>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      <select onChange={handleChangeLimit}>
        <option value={5}>5</option>
        {/* create dropdown for list number selection */}
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </>
  );
}
