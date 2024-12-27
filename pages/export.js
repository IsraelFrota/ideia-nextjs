import { useRef, useState } from "react";
import { jsPDF } from "jspdf";

import AuditInfo from "../components/report/AuditInfo";
import Seiri from "../components/report/Seiri";
import Seiton from "../components/report/Seiton";
import Seiso from "../components/report/Seiso";
import Seiketsu from "../components/report/Seiketsu";
import Shitsuke from "../components/report/Shitsuke";
import Result from "../components/report/Result";

import Button from "../components/Button";

import style from "../style/style.module.css";

function ExportDocument() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const contentRef = useRef();

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

  const handleExport = () => {
    const doc = new jsPDF();

    doc.html(contentRef.current, {
      callback: function (doc) {
        doc.save("relatorio.pdf");
      },
      margin: [10, 10, 10, 10],
      x: 10,
      y: 10,
      width: 180,
      windowWidth: 800,
    });
  };

  return (
    <div className={style.report_container}>
      <div className={style.report_content}>
        <div className={style.search_area}>
          <input 
            type="text"
            name={"search"}
            value={query}
            placeholder="Pequise pelo nome"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            label={loading ? 'Buscando...' : 'Buscar'}
            handleChange={searchAudited}
            disabled={loading}
          />
        </div>
        <div className={style.report} ref={contentRef}>
          {result.length > 0 ? 
            <>
              <h1>Relatório da auditória</h1>
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
        <div className={style.export_area}>
          <Button
            label={"Exportar"} 
            handleChange={handleExport} 
          />
        </div>
      </div>
    </div>
  );
}

export default ExportDocument;