import "./styles.css";

function Button({ type = "button", name = "Send", onClick }) {  
  return (
    <button onClick={onClick} type={type} className="button-component">
      {name}
    </button>
  );
}

export default Button;
