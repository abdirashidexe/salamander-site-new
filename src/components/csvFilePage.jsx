"use client";
import { useSearchParams } from "next/navigation";

export default function CsvFilePage() {
  const params = useSearchParams();
  const csvPath = params.get("file"); // may be /server/processor/target/<filename>.csv

  if (!csvPath) {
    return (
      <div className="csv-container">
        <h2 className="csv-title">No CSV available</h2>
        <p>Please process a video first to generate a CSV.</p>
      </div>
    );
  }

  // Extract only the filename from the path
  const fileName = csvPath.split("/").pop(); // eb3257ec-614a-4f94-99f4-dc180fd4b24e.csv

  // Construct the URL that actually works with your backend static /results folder
  const csvUrl = `http://localhost:3000/results/${fileName}`;

  return (
    <div className="csv-container">
      <h2 className="csv-title">⬇️ Your CSV is ready to download! ⬇️</h2>
      <a
        href={csvUrl}
        download
        className="csv-download-btn"
      >
        Download
      </a>
    </div>
  );
}
