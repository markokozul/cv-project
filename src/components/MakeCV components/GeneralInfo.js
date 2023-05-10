export function GeneralInfo({ onGeneralInfoValues }) {
  const handleInput = (e) => {
    onGeneralInfoValues((generalInfoValues) => {
      return { ...generalInfoValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="general-info-container">
      <h2>General Info</h2>
      <label>Full name:</label>
      <input name="name" onInput={handleInput}></input>
      <label>E-mail:</label>
      <input name="email" onInput={handleInput}></input>
      <label>Phone number</label>
      <input name="number" onInput={handleInput}></input>
      <label>Adress</label>
      <input name="adress" onInput={handleInput}></input>
    </div>
  );
}
