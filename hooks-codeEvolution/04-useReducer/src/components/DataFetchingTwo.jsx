import { useReducer, useEffect } from "react";

const initialState = {
  isLoading: true,
  post: {},
  error: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "success":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "failure":
      return {
        isLoading: false,
        post: {},
        error: "Something went wrong",
      };

    default:
      return currentState;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/4"
        );

        const post = await response.json();
        dispatch({ type: "success", payload: post });
      } catch (error) {
        dispatch({ type: "failure" });
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        {state.isLoading ? "Loading..." : <h3>{state.post.title}</h3>}
        {state.error ? state.error : null}
      </div>
    </>
  );
};

export default DataFetchingTwo;
