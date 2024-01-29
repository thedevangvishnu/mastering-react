// Use useEffect to fetch data

import { Component } from "react";
import axios from "axios";

class ClassFetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const allPosts = response.data;
    this.setState({ posts: allPosts });
  };

  render() {
    const { posts } = this.state;
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
  }
}

export default ClassFetchData;
