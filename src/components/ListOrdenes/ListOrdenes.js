import { useEffect, useState } from "react";
import { getWebsites } from "../../firebase/api";
import { CardOrdenes } from "../CardOrders/CardOrdenes";

export const ListOrdenes = () => {
  const [websites, setWebsites] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      const activo = doc._document.data.value.mapValue.fields.activo.booleanValue;
      if(activo){
        docs.push({ ...doc.data(), id: doc.id });
      }
    });
    setWebsites(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
     <div style={{ marginBottom: "80px"}}>
      
     
      {websites.map((link) => (
          
          <div className="col-md-4" key={link.id}>
            <CardOrdenes link={link} />
          </div>

      ))}
      </div>
    </>
  );
};