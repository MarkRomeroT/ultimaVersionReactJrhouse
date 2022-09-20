import { useEffect, useState } from "react";
import { getWebsites } from "../../firebase/api";
import CardHistorico  from "./CardHistorico";
import OptionsHistorico from "../../components/OptionsNav/OptionsHistorico";

 const Historico = () => {

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const date = hoy.toISOString().substring(0,10);

  const [websites, setWebsites] = useState([]);
  const [total, setTotal] = useState(0);
  // const [fechaInp, setFechaInp] = useState(null);

  const getLinks = async (fechaInput) => {
    const querySnapshot = await getWebsites();
    const docs = [];
    let docsTotal = 0;
    querySnapshot.forEach((doc) => {
      const activo = doc._document.data.value.mapValue.fields.activo.booleanValue;
      const fecha = doc._document.data.value.mapValue.fields.fecha.stringValue;
      // console.log("Fecha de la consulta: "+fecha);
      // console.log("Fecha del imput: "+fechaInput);
      if(activo === false && fecha === fechaInput){
        docs.push({ ...doc.data(), id: doc.id });
        docsTotal = (docsTotal + parseInt(doc._document.data.value.mapValue.fields.total.stringValue));
      }
    });
    setWebsites(docs);
    setTotal(docsTotal);
  };

  useEffect(() => {
    getLinks(date);
  }, []);


  function onChangeDate()
  {
    const fechaInput = document.getElementById('fechaInput').value;
    // console.log(fechaInput);
    // setFechaInp(fechaInput);
    getLinks(fechaInput);
  }

  
  return (
    <>
    <div className="m-3">
        <input
            id="fechaInput"
            type="date"
            className="form-control mb-2"
            name="total"
            onChange={onChangeDate}
          />
    </div>
     <div style={{ marginBottom: "80px"}}>
      
     
      {websites.map((link) => (
          
          <div className="col-md-4" key={link.id}>
            <CardHistorico link={link} />
          </div>
          
      ))}

      </div>
      <OptionsHistorico total={total}/>
    </>
  );
};

export default Historico;