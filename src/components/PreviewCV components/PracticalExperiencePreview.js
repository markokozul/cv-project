import { useContext } from "react";
import { Context } from "../../App";

export function PracticalExperiencePreview() {
  const { practExpValues } = useContext(Context);

  let content =
    practExpValues.length >= 1 ? (
      <p className="titles">Practical Experience</p>
    ) : (
      <></>
    );

  return (
    <div className="practical-experience-preview-container">
      {content}
      <div className="items">
        {practExpValues.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <p>
                <strong>{item.job}</strong>
              </p>
            </div>

            <div>
              {" "}
              <p>{item.company}</p>
            </div>
            <div>
              <p>{item.jobDesc}</p>
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
