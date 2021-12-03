import { forwardRef } from "react";
import "./card.css";

const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="card">
      <div className="firstQuote"></div>
      <div className="sentence">{props.text.quote}</div>
      <div className="secondQuote"></div>
      <div className="author">{props.text.author}</div>
    </div>
  );
});

export default Card;
