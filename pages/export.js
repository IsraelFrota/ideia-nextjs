import { useState } from "react";

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

  const AuditInfo = ({ data }) => {
    const { date, nameAuditor, nameAudited, sector } = data.auditInfo;
    
    return (
      <div className={style.report_data}>
        <div className={style.report_title}>
          <h3>Informações da Auditoria</h3>
        </div>
        <div className={style.report_row}>
          <div className={style.report_cell}>
            <p className={style.report_item}>
              <span>Auditor: </span> {nameAuditor}
            </p>
            <p className={style.report_item}>
              <span>Auditado: </span> {nameAudited}
            </p>
          </div>
          <div className={style.report_cell}>
            <p className={style.report_item}>
              <span>Data da auditoria:</span> {date}
            </p>
            <p className={style.report_item}>
              <span>Setor do profissional:</span> {sector}
            </p>
          </div>
        </div>
      </div>
    );
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
        <div>
          <h1>Relatório da auditória</h1>
          {result.length > 0 ? <AuditInfo data={result[0]} /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default ExportDocument;
