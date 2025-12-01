import "./Button.css";

const Button = ({ text, size, type = "button", onClick}) => (
  <button type={type} className={size} onClick={onClick}>
    {text}
  </button>
);

export default Button;
