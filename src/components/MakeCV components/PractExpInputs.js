export function PractExpInputs({ index, onPractExpValues, practExpValues }) {
  console.log(index);
  const handleInput = (e) => {
    onPractExpValues((practExpValues) => {
      return practExpValues.map((item) => {
        console.log(item.id, index);
        if (item.id === index) {
          return { ...item, [e.target.name]: e.target.value };
        } else {
          return item;
        }
      });
    });
  };

  const removeSection = () => {
    onPractExpValues((practExpValues) =>
      practExpValues.filter((item) => item.id !== index)
    );
  };

  return (
    <>
      <label>Position Title:</label>
      <input name="job" onInput={handleInput}></input>
      <label>Company name:</label>
      <input name="company" onInput={handleInput}></input>
      <label>Short job description: </label>
      <input name="jobDesc" onInput={handleInput}></input>
      <label>Date(from-until when): </label>
      <input name="date" type="date" onInput={handleInput}></input>
      <button className="remove-btn" onClick={removeSection}>
        Remove
      </button>
    </>
  );
}
