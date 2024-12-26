import { useState } from "react";

import AuditInfo from "../components/report/AuditInfo";
import Seiri from "../components/report/Seiri";
import Seiton from "../components/report/Seiton";
import Seiso from "../components/report/Seiso";
import Seiketsu from "../components/report/Seiketsu";
import Shitsuke from "../components/report/Shitsuke";
import Result from "../components/report/Result";

import style from "../style/style.module.css";

function ExportDocument() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchAudited = async () => {
    if (!query) {
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch(`/api/_api?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
    } 
		catch (error) {
      console.error('Error fetching data: ', error);
    } 
		finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.report_container}>
      <div className={style.report_content}>
        <div className={style.search_area}>
          <input 
            type="text"
            name={"search"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={searchAudited}
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        <div className={style.report}>
          <h1>Relatório da auditória</h1>
          {result.length > 0 ? 
            <>
              <AuditInfo data={result[0]} />
              <Seiri data={result[0]} />
              <Seiton data={result[0]} />
              <Seiso data={result[0]} />
              <Seiketsu data={result[0]} />
              <Shitsuke data={result[0]} />
              <Result data={result[0]} />
            </> : 
            <></>
          }
        </div>
      </div>
    </div>
  );
}

export default ExportDocument;
