import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const GlobalShopContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    qty > 1 && setQty((prevQty) => prevQty - 1);
  };

  // Add product to cart
  const onAdd = (product, quantity) => {
    // Increase total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);
    // Increase total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);
    // Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug ? { ...exist, quantity: exist.quantity + quantity } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product, quantity = 1) => {
    // Decrease total price
    setTotalPrice((prevTotal) => prevTotal - product.price * quantity);
    // Decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal - quantity);
    // Check if the product is already in the cart
    const exist = cartItems.find((item) => {
      return item.slug === product.slug;
    });

    if (exist.quantity - quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug ? { ...exist, quantity: exist.quantity - quantity } : item,
        ),
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        showHeader,
        setShowHeader,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useGlobalShopContext = () => useContext(ShopContext);
