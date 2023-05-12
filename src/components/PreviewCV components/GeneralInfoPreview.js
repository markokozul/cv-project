import { useContext } from "react";
import { Context } from "../../App";

export function GeneralInfoPreview() {
  const { generalInfoValues } = useContext(Context);

  let name = generalInfoValues.name !== "" ? generalInfoValues.name : "Name";
  return (
    <div className="general-info-preview-container">
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="contact-info">
        <p>
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          {generalInfoValues.email}
        </p>
        <p>
          <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
          {generalInfoValues.number}
        </p>
        <p>
          <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
          {generalInfoValues.address}
        </p>
      </div>
    </div>
  );
}
