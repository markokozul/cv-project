export function PracticalExperiencePreview({ practExpValues }) {
  let content =
    practExpValues.length >= 1 ? <h2>Practical Experience</h2> : <></>;

  return (
    <div className="educational-experience-container">
      {content}
      {practExpValues.map((item) => (
        <div key={item.id}>
          <p>{item.school}</p>
          <p>{item.study}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
