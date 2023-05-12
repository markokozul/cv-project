import React, { createContext, useState } from "react";
import "./App.css";
import { MakeCV } from "./components/MakeCV";
import { PreviewCV } from "./components/PreviewCV";

export const Context = createContext(" ");

function App() {
  const [generalInfoValues, setGeneralInfoValues] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [edExpValues, setEdExpValues] = useState([]);

  const [practExpValues, setPractExpValues] = useState([]);

  return (
    <div className="content">
      <Context.Provider
        value={{
          edExpValues,
          setEdExpValues,
          practExpValues,
          setPractExpValues,
          generalInfoValues,
          setGeneralInfoValues,
        }}
      >
        <MakeCV />
        <PreviewCV />
      </Context.Provider>
    </div>
  );
}

export default App;
