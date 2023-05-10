export function EducationalExperiencePreview({ edExpValues }) {
  let content =
    edExpValues.length >= 1 ? <h2>Educational Experience</h2> : <></>;

  console.log(edExpValues);
  return (
    <div className="educational-experience-container">
      {content}
      {edExpValues.map((item) => (
        <div key={item.id}>
          <p>{item.school}</p>
          <p>{item.study}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
