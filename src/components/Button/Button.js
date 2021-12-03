import "./button.css";

export default function Button(props) {
  return (
    <button onClick={props.click} className="btn">
      {props.text}
    </button>
  );
}
