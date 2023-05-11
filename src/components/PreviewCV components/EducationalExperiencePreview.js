export function EducationalExperiencePreview({ edExpValues }) {
  let title =
    edExpValues.length >= 1 ? (
      <p className="titles">Educational Experience</p>
    ) : (
      <></>
    );

  console.log(edExpValues);
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
