import { useContext } from "react";
import { Context } from "../../App";

export function EducationalExperiencePreview() {
  const { edExpValues } = useContext(Context);
  let title =
    edExpValues.length >= 1 ? (
      <p className="titles">Educational Experience</p>
    ) : (
      <></>
    );

  return (
    <div className="educational-experience-preview-container">
      {title}
      <div className="items">
        {edExpValues.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <p>
                <strong>{item.study}</strong>
              </p>
            </div>
            <div>
              <p>{item.school}</p>
            </div>
            <div>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
