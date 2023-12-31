import "./checkbox-input.styles.css";

const CheckboxInput = ({ label, htmlFor, id, ...otherProps }) => {
  return (
    <div className="checkbox__container">
      <input type="checkbox" id={id} {...otherProps} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default CheckboxInput;
