import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Bengali",
    value: "bn",
  },
  {
    label: "Hindi",
    value: "hi",
  },

  {
    label: "Marathi",
    value: "mr",
  },
  {
    label: "Malayalam",
    value: "ml",
  },
  {
    label: "Gujarati",
    value: "gu",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form ">
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h2 className="ui header">Output</h2>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
