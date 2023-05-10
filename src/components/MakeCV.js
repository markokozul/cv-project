import React from "react";
import { GeneralInfo } from "./MakeCV components/GeneralInfo";
import "../styles/MakeCV.css";
import { EducationalExperience } from "./MakeCV components/EducationalExperience";
import { PracticalExperience } from "./MakeCV components/PracticalExperience";

export function MakeCV({
  onGeneralInfoValues,
  onEdExpValues,
  edExpValues,
  onPractExpValues,
  practExpValues,
}) {
  return (
    <div className="main-container">
      <GeneralInfo onGeneralInfoValues={onGeneralInfoValues} />
      <EducationalExperience
        onEdExpValues={onEdExpValues}
        edExpValues={edExpValues}
      />
      <PracticalExperience
        onPractExpValues={onPractExpValues}
        practExpValues={practExpValues}
      />
    </div>
  );
}
