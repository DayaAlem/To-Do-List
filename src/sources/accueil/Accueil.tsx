import React, { useState } from "react";
import "../accueil/accueil.css";

interface Accueil {}

export const MyComponent: React.FC<Accueil> = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState<string[]>([]);
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleButtonClick = () => {
    setTexts([...texts, text]);
    setText("");
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Insérer Tache</button>
      <table>
        <tbody>
          {texts.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
