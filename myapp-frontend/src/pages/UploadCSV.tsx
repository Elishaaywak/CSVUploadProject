import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

export default function UploadCSV() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a CSV file");

    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csvData = Papa.parse(target?.result as string, { header: true }).data;
      await axios.post("http://localhost:8000/api/upload", { data: csvData });
      alert("CSV uploaded successfully");
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mt-5">
      <h2>Upload CSV</h2>
      <input type="file" accept=".csv" className="form-control" 
        onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="btn btn-primary mt-3">Upload</button>
    </div>
  );
}
