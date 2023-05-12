import { useContext } from "react";
import { Context } from "../../App";

export function EdExpInputs({ index }) {
  const { setEdExpValues } = useContext(Context);

  console.log(index);
  const handleInput = (e) => {
    setEdExpValues((edExpValues) => {
      return edExpValues.map((item) => {
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
    setEdExpValues((edExpValues) =>
      edExpValues.filter((item) => item.id !== index)
    );
  };

  return (
    <>
      <label>Title of study:</label>
      <input name="study" onInput={handleInput}></input>
      <label>School name:</label>
      <input name="school" onInput={handleInput}></input>
      <label>Date of study:</label>
      <input name="date" type="date" onInput={handleInput}></input>
      <button className="remove-btn" onClick={removeSection}>
        Remove Section
      </button>
    </>
  );
}
