import { useState } from "react";
import Cart from "./components/Cart/Cart"
import CartProvider from "./components/Context/CartProvider"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"


function App() {

  const [showCart, setShowCart] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false)
  }
  const showCartHandler = () => {
    setShowCart(true)
  }


  return (
   <CartProvider>
    {showCart && <Cart onClose={hideCartHandler} />}

    <Header onShow={showCartHandler} />
    < Products />
   </CartProvider>
  )
}

export default App
