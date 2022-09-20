import { useEffect, useState } from "react";
import { getProductos } from "../../firebase/api";
import CardProdcutos  from "./CardProductos";


 const Productos = () => {

  const [websites, setWebsites] = useState([]);
  const getLinks = async () => {
    const querySnapshot = await getProductos();
    const docs = [];
    querySnapshot.forEach((doc) => {
    
        docs.push({ ...doc.data(), id: doc.id });

    });
    setWebsites(docs);
  };
  useEffect(() => {
    getLinks();
  }, []);

  
  return (
    <>

     <div style={{ marginBottom: "80px", marginTop: "15px"}}>
      
      {websites.map((link) => (
          <div className="col-md-4" key={link.id}>
            <CardProdcutos link={link} />
          </div>  
      ))}

      </div>
    </>
  );
};

export default Productos;