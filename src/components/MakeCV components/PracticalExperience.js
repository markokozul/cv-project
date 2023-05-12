import { useContext } from "react";
import { Context } from "../../App";
import uniqueId from "lodash/uniqueId";
import { PractExpInputs } from "./PractExpInputs";
export function PracticalExperience() {
  const { practExpValues, setPractExpValues } = useContext(Context);
  return (
    <div className="practical-experience-container">
      <h2>Practical Experience</h2>
      {practExpValues.map((item) => (
        <PractExpInputs key={item.id} index={item.id} />
      ))}

      <button
        className="add-button"
        onClick={() =>
          setPractExpValues((oldArr) => [
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
