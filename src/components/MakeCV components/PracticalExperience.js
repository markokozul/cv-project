import uniqueId from "lodash/uniqueId";
import { PractExpInputs } from "./PractExpInputs";
export function PracticalExperience({ onPractExpValues, practExpValues }) {
  return (
    <div className="practical-experience-container">
      <h2>Practical Experience</h2>
      {practExpValues.map((item) => (
        <PractExpInputs
          key={item.id}
          index={item.id}
          onPractExpValues={onPractExpValues}
          practExpValues={practExpValues}
        />
      ))}

      <button
        onClick={() =>
          onPractExpValues((oldArr) => [
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
