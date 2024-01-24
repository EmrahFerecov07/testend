import React, { useContext } from "react";
import "./index.scss"
import {WishlistContext} from "../../Context/WishlistContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, deleteFormWishlist } = useContext(WishlistContext);
  return (
    
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className="wishlist">
      {wishlist &&
        wishlist.map((item) => (
          <div key={item._id}>
            <div>
              <h1>{item.title}</h1>
              <button onClick={() => deleteFormWishlist(item._id)}>Sil Wishlisden</button>
            </div>
          </div>
        ))}


      </div>


    
    </div>
  );
};

export default Wishlist;
