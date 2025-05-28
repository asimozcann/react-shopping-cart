import Button from "../UI/Button";
import CartItem from "./CartItem";
import { CartContext } from "../Context/CartProvider";
import { useContext } from "react";
import Offcanvas from "../UI/Offcanvas";
const Cart = ({ onClose }) => {
  const { items,totalAmount ,removeItem,clearItem} = useContext(CartContext);
  const hasItems = items.length > 0;
  const cartItems = (
    <ul>
      {items.map((product) => (
        <CartItem key={product.id} product={product} removeItem={removeItem}/>
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={onClose}>
      <div className="flex items-center  justify-between text-2xl border-b-[1px] border-black">
        <h1 className="mb-2">Sepetim</h1>
        <i onClick={onClose} className="fa-solid fa-x mb-2 cursor-pointer"></i>
      </div>
      {cartItems}
      <div className="flex justify-between items-center text-xl">
        <span>Toplam Fiyat</span>
       <span>{totalAmount.toFixed(2)}₺</span>

      </div>
      {hasItems && < div className="flex flex-col gap-4 ">
        <Button className="w-full text-black p-3 justify-center">
          Sipariş Ver
        </Button>

        <Button onClick={clearItem} className="w-full bg-red-600 text-white p-3 justify-center">
          Temizle
        </Button>
      </div>}
    </Offcanvas>
  );
};

export default Cart;
