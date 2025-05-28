import { useContext } from "react";
import Button from "../UI/Button";
import { CartContext } from "../Context/CartProvider";

const HeaderCartButton = ({onShow}) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);

  return (
    <Button onClick={onShow} className="gap-2 text-xl  relative hover:bg-[#f7565044] transition-all duration-200 ">
      <h1>Sepetim</h1>
      <i className="fa-solid fa-cart-shopping text-white"></i>
      <span className="absolute top-[2px] right-[4px] bg-[#F75550] w-0 h-0 p-[10px] flex justify-center items-center text-white text-lg   rounded-full ">
        {numberOfCartItems}
      </span>
    </Button>
  );
};

export default HeaderCartButton;
