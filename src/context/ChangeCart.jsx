import React, { createContext, useState } from 'react'
import useGet from '../hooks/useGet';

export const CartContext = createContext();

const ChangeCart = ({children}) => {
  const [cart, setCart] = useState([]);
  const {data:products} = useGet("products");

  function addToCart(id) {
    let cartItem = products.find((el) => el.id === id);
    console.log(cartItem);

    setCart((perv) => {
      return [...perv, { ...cartItem, qty: 1 }]
    })
  }
  function increase(id) {
    setCart((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return { ...el, qty: el.qty + 1 }
        } else {
          return el
        }
      })
    })
  }
  function decrease(id) {
    setCart((prev) => {
      let cartItem = prev.find((el) => el.id === id);
      if (cartItem.qty > 1) {
        return prev.map((el) => {
          if (el)
            if (el.id === id) {
              return { ...el, qty: el.qty - 1 }
            } else {
              return el
            }
        })
      } else {
        return prev.filter((el) => el.id !== id)
      }
    })
  }

  return (
    <CartContext.Provider value={{cart, setCart , increase, decrease, addToCart}}>
      {children}
      </CartContext.Provider>
  )
}

export default ChangeCart