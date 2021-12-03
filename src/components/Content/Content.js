import { useState, useEffect, useRef } from "react";
import "./content.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

export default function Content(props) {
  const apiURL =
    "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

  const [data, setData] = useState();
  const [text, setText] = useState({});
  const [previousTexts, setPreviousTexts] = useState([]);

  const card = useRef(null);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const loadText = () => {
    card.current.style.transform = "translateY(0)";
    card.current.style.animation = "fadeIn 1s both";
    const index = Math.floor(Math.random() * data.length);
    setText(data[index]);
    const oldTexts = previousTexts;
    const updatedPreviousTexts = [...oldTexts, text];
    setPreviousTexts(updatedPreviousTexts);
  };

  const loadPreviousText = () => {
    const prevTexts = [...previousTexts];
    if (prevTexts.length > 1) {
      setText(prevTexts[prevTexts.length - 1]);
      prevTexts.pop();
      setPreviousTexts(prevTexts);
    } else alert("there`s no previous quotes");
  };

  return (
    <div className="content">
      <div className="container">
        <Button click={loadText} text="show quote" />
        <Button click={loadPreviousText} text="show previous quote" />
        <Card ref={card} text={text} />
      </div>
    </div>
  );
}
