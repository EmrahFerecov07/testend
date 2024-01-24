import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./index.scss"

const HomePage = () => {
  const [product, setproduct] = useState();
  const { addToWishlist } = useContext(WishlistContext);

  async function getproducts() {
    const res = await axios.get(`http://localhost:3000/products`);
    setproduct(res.data);
  }

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:3000/products/${productId}`);
    getproducts();
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="home">
        {product &&
          product.map((item) => (
            <div key={item._id}>
              <ul>
                 <img src={item.image} alt="" />
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li>{item.info}</li>
              </ul>
              <button onClick={() => addToWishlist(item)}>
                Wishliste elave et
              </button>
              <Link to={`/detail/${item._id}`}>See details</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
