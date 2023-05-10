import { EdExpInputs } from "./EdExpInputs";
import uniqueId from "lodash/uniqueId";
export function EducationalExperience({ onEdExpValues, edExpValues }) {
  return (
    <div className="educational-experience-container">
      <h2>Educational Experience</h2>
      {edExpValues.map((item) => (
        <EdExpInputs
          key={item.id}
          index={item.id}
          onEdExpValues={onEdExpValues}
          edExpValues={edExpValues}
        />
      ))}

      <button
        onClick={() =>
          onEdExpValues((oldArr) => [
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
