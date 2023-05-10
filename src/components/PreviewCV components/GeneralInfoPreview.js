export function GeneralInfoPreview({ generalInfoValues }) {
  return (
    <div className="general-info-preview">
      <p>{generalInfoValues.name}</p>
      <p>{generalInfoValues.email}</p>
      <p>{generalInfoValues.number}</p>
      <p>{generalInfoValues.adress}</p>
    </div>
  );
}
