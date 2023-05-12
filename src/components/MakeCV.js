import React from "react";
import { GeneralInfo } from "./MakeCV components/GeneralInfo";
import "../styles/MakeCV.css";
import { EducationalExperience } from "./MakeCV components/EducationalExperience";
import { PracticalExperience } from "./MakeCV components/PracticalExperience";

export function MakeCV() {
  return (
    <div className="main-container">
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}
