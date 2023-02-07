import React, { useState } from "react";

interface Props {}

export const TaskForm: React.FC<Props> = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return (
    <form>
      <label>
        Est-ce que la tâche est terminée?
        <br />
        <input
          type="radio"
          name="isCompleted"
          checked={isCompleted}
          onChange={() => setIsCompleted(true)}
        />
        Oui
        <input
          type="radio"
          name="isCompleted"
          checked={!isCompleted}
          onChange={() => setIsCompleted(false)}
        />
        Non
      </label>
      <br />
      <p>
        {isCompleted ? "La tâche est terminée" : "La tâche n'est pas terminée"}
      </p>
    </form>
  );
};

export default TaskForm;
