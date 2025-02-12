import { useState, useEffect } from "react";
import axios from "axios";

interface DataRow {
  [key: string]: string | number;
}

export default function Dashboard() {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/data")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>CSV Data</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((col) => (
              <th key={col}>{col.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
