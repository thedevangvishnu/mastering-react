// Use useEffect to fetch data

import { useState, useEffect } from "react";
import axios from "axios";

const HookFetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const allPosts = await response.data;
    setPosts(allPosts);
  };

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{ border: "1px solid gray", padding: "0.5rem 1rem" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HookFetchData;
