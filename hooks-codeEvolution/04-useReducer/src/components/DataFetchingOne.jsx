import { useState, useEffect } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const post = await response.json();
        setPost(post);
        setLoading(false);
      } catch (error) {
        setPost({});
        setLoading(false);
        setError("Something went wrong");
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      <div>{loading ? "Loading..." : <h3>{post.title}</h3>}</div>
      {error ? error : null}
    </>
  );
};

export default DataFetchingOne;
