import React from "react";
import { EducationalExperiencePreview } from "./PreviewCV components/EducationalExperiencePreview";
import { GeneralInfoPreview } from "./PreviewCV components/GeneralInfoPreview";
import { PracticalExperiencePreview } from "./PreviewCV components/PracticalExperiencePreview";
import "../styles/PreviewCV.css";

export function PreviewCV({
  generalInfoValues,
  edExpValues,
  practExpValues,
  state,
}) {
  return (
    <div className="main-previewcv-container">
      <div className="previewcv-content">
        <GeneralInfoPreview generalInfoValues={generalInfoValues} />
        <EducationalExperiencePreview edExpValues={edExpValues} />
        <PracticalExperiencePreview practExpValues={practExpValues} />
      </div>
    </div>
  );
}
