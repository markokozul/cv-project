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
      <label>School name:</label>
      <input name="school" onInput={handleInput}></input>
      <label>Title of study:</label>
      <input name="study" onInput={handleInput}></input>
      <label>Date of study:</label>
      <input name="date" onInput={handleInput}></input>
      <button onClick={removeSection}>Remove</button>
    </>
  );
}
