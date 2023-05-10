import React, { useState } from "react";
import "./App.css";
import { MakeCV } from "./components/MakeCV";
import { PreviewCV } from "./components/PreviewCV";

function App() {
  const [generalInfoValues, setGeneralInfoValues] = useState({
    name: "",
    email: "",
    number: "",
    adress: "",
  });
  const [edExpValues, setEdExpValues] = useState([]);

  const [practExpValues, setPractExpValues] = useState([]);

  return (
    <div className="content">
      <MakeCV
        onGeneralInfoValues={setGeneralInfoValues}
        onEdExpValues={setEdExpValues}
        edExpValues={edExpValues}
        onPractExpValues={setPractExpValues}
        practExpValues={practExpValues}
      />
      <PreviewCV
        generalInfoValues={generalInfoValues}
        edExpValues={edExpValues}
        practExpValues={practExpValues}
      />
    </div>
  );
}

export default App;
