// Use useEffect to fetch a particular post based on its id

import { useState, useEffect } from "react";
import axios from "axios";

const HookFetchData = () => {
  const [post, setPost] = useState({});
  const [inputId, setInputId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  useEffect(() => {
    getPost();
  }, [buttonId]);

  const getPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${buttonId}`
    );

    const post = await response.data;
    setPost(post);
  };

  const onInputChange = (event) => {
    setInputId(event.target.value);
  };

  const handleClick = () => {
    setButtonId(inputId);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          style={{ padding: "0.75rem" }}
          type="text"
          placeholder="Enter post id"
          value={inputId}
          onChange={onInputChange}
        />
        <button onClick={handleClick}>FETCH POST</button>
      </div>
      <div
        key={post.id}
        style={{
          border: "1px solid gray",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
        }}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default HookFetchData;
