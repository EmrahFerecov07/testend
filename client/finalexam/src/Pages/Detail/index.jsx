import axios from "axios";
import "./index.scss"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Detail = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();
  async function getproducts() {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    setproduct(res.data);
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <section>
      <Helmet>
    <title>Detail</title>
    </Helmet>


    <div className="detail">
    {product ? (
        <div className="card">
          
          <h3>{product.title}</h3>
          <h2>{product.price}</h2>
          <div className="">
            <img src={product.image} alt="" />
          </div>
          <p>{product.info}</p>
        </div>
      ) : (
        ""
      )}
      
    </div>
      
   
    </section>
  );
};

export default Detail;
