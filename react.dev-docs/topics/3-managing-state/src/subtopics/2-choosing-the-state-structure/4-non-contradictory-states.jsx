import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");
  // Setting multiple state variables can become complicated and harder to update. In stead, we can set a single state varible that takes three values: typing, sending and sent.

  // these are not state varibles. These are just variables that have been set to state variables particular value.
  const isSending = status === "sending";
  const isSent = status === "sent";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");

    // Here, updating state becomes so much easier and bug free. We are using a single state setter function and just accessing different values of the same state variable to update it. Hence, no room for contradiction or impossible states.
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>How was your stay at The Prancing Pony?</h3>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
};

// Pretend to send a message.
const sendMessage = (text) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

export default FeedbackForm;
