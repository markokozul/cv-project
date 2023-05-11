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
      <input name="name" type="text" onInput={handleInput}></input>
      <label>E-mail:</label>
      <input name="email" type="email" onInput={handleInput}></input>
      <label>Phone number</label>
      <input name="number" type="tel" onInput={handleInput}></input>
      <label>Address</label>
      <input name="address" type="text" onInput={handleInput}></input>
    </div>
  );
}
