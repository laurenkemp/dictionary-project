import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>
      <br />
      <Example examples={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
