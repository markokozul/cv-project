import { useState, createContext, useContext } from "react";
import { Context } from "../../App";
import { EdExpInputs } from "./EdExpInputs";
import uniqueId from "lodash/uniqueId";
export function EducationalExperience() {
  const { edExpValues, setEdExpValues } = useContext(Context);
  return (
    <div className="educational-experience-container">
      <h2>Educational Experience</h2>
      {edExpValues.map((item) => (
        <EdExpInputs key={item.id} index={item.id} />
      ))}

      <button
        className="add-button"
        onClick={() =>
          setEdExpValues((oldArr) => [
            ...oldArr,
            { school: "", study: "", date: "", id: uniqueId() },
          ])
        }
      >
        Add
      </button>
    </div>
  );
}
