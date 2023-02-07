import React from "react";
import { useState } from "react";
import "./todo.css";
import "./todo.json";

export const Todo: React.FC = () => {
  const [tache, setTache] = useState<string>("");
  const [taches, setTaches] = useState<string[]>([]);
  const [date, setDate] = useState<string>("");
  const [dates, setDates] = useState<string[]>([]);
  const [statut, setStatut] = useState(false);
  const [dateend, setDateend] = useState<string>("");
  const [dateends, setDateends] = useState<string[]>([]);
  const [results, setResults] = useState<boolean[]>([]);

  const handleTacheChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTache(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleStatutChange = () => {
    setStatut(!statut);
  };
  const handleDateEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateend(event.target.value);
  };
  const handleButtonClick = () => {
    setTaches([...taches, tache]);
    setTache("");
    setResults([...results, statut]);
    setStatut(false);
    setDates([...dates, date]);
    setDate("");
    setDateends([...dates, date]);
    setDateend("");
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div className="container">
        <p className="labelname">Nom de la tâche :</p>
        <input
          className="name__input"
          type="text"
          value={tache}
          onChange={handleTacheChange}
        />
        <p className="labeldate">Date de la tâche :</p>
        <input
          className="date__input"
          type="text"
          value={date}
          onChange={handleDateChange}
        />
        <p className="labeldateend">Fin de la tâche :</p>
        <input
          className="dateend__input"
          type="text"
          value={dateend}
          onChange={handleDateEndChange}
        />
        <p className="label_statut">La tâche est-elle fini ? </p>
        <button className="button__boolean" onClick={handleStatutChange}>
          {statut ? "oui" : "non"}
        </button>

        <button onClick={handleButtonClick} className="button-sb">
          Ajouter Tâche
        </button>
      </div>

      <div className="container__array">
        <div className="container__listename">
          <h4>Liste Des Taches</h4>
          {taches.map((listeOfTache) => (
            <div>
              <p className="liseoftache">{listeOfTache}</p>
            </div>
          ))}
        </div>
        <div className="container__listesdate">
          <h4>Date Début de Taches</h4>
          {dates.map((dateOfTache) => (
            <div>
              <p className="dateoftache">{dateOfTache}</p>
            </div>
          ))}
        </div>
        <div className="container__listesdateend">
          <h4>Date Fin De Taches</h4>
          {dateends.map((dateendOfTache) => (
            <div>
              <p className="dateoftache">{dateendOfTache}</p>
            </div>
          ))}
        </div>
        <div className="container_statut">
          <h4>Statut de la tâche</h4>
          {results.map((results, index) => (
            <p key={index} className="statutoftache">
              {results ? "La tâche est finie" : "La tâche n'est pas fini"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
