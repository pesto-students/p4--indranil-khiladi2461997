import React from "react";
import "../css/InputField.css";

export default function InputField(props) {
  return (
    <div>
      <div className="shortnerInput">
        <input
          placeholder="Shorten a link here..."
          value={props.userInput}
          onChange={(e) => {
            props.setUserInput(e.target.value);
          }}
        />
        <button className="shortButton" onClick={()=>props.fetchData()}>Shorten it</button>
      </div>
      <div className="shortenDisplay">
        <div>
          <span>
            {props.userInput}
          </span>
          <div>
            <span>{props.shortenedLink}</span>
            <button className="copyButton">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
