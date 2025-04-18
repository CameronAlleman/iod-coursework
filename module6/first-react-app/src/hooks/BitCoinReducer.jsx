import { useReducer } from "react";

export function bitcoinReducer(state, action) {
  switch (action.type) {
    case "Fetch_Success":
      return { loading: false, posts: action.payload, error: "" };
    case "Fetch_Error":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}
