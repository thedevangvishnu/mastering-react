import { useState } from "react";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  //   Setting multiple state variables can become complicated and harder to update.

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);

    // Here, if we forget to update setIsSending to "false" after sending the message, then setIsSending would be "true" and setIsSending would also be "true", which can never be possible. Hence, contradictions like these can introduce "impossible states." It's better to remove such contradictory state variables and use a different state structure that is easier to update
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
