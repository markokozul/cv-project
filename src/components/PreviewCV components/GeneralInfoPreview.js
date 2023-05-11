export function GeneralInfoPreview({ generalInfoValues }) {
  let name = generalInfoValues.name !== "" ? generalInfoValues.name : "Name";
  return (
    <div className="general-info-preview-container">
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="contact-info">
        <p>
          <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
          {generalInfoValues.email}mkozul589@gmail.com
        </p>
        <p>
          <i class="fa fa-phone-square" aria-hidden="true"></i>{" "}
          {generalInfoValues.number}+38763 840 414
        </p>
        <p>
          <i class="fa fa-location-arrow" aria-hidden="true"></i>{" "}
          {generalInfoValues.address}Turcinovici bb.
        </p>
      </div>
    </div>
  );
}
