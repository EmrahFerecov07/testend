import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("Wishlist")
      ? JSON.parse(localStorage.getItem("Wishlist"))
      : []
  );

  localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  
  const addToWishlist = (item) => {
    const existedProduct = wishlist.find((x) => x._id === item._id);
    if (!existedProduct) {
      setWishlist([...wishlist, item]);
      return;
    }
  };

  const deleteFormWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  const data = { wishlist, setWishlist, addToWishlist, deleteFormWishlist };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
};

export default WishlistProvider;
