const statuses = ["empty", "typing", "submitting", "success", "error"];

const Forms = () => {
  return (
    <div className="forms">
      {statuses.map((status) => {
        return (
          <div className="form__container">
            <h3 className="form__status">Form: {status.toLocaleUpperCase()}</h3>
            <Form status={status} />
          </div>
        );
      })}
    </div>
  );
};

const Form = ({ status }) => {
  if (status === "success") {
    return <h2>Thank you! You response is successfully sent.</h2>;
  }
  return (
    <form className="form">
      <input disabled={status === "submitting"} type="text" />
      <button disabled={status === "empty" || status === "submitting"}>
        Submit
      </button>
      {status === "error" && <p className="error">Wrong answer! Try again.</p>}
    </form>
  );
};

export default Forms;
