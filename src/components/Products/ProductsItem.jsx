import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import Button from "../UI/Button";

const ProductsItem = ({ product }) => {
  const { img, name, price } = product;
  const { addItem } = useContext(CartContext);
 

  return (
   <li className="my-4 mx-auto w-full max-w-[300px]  p-4 hover:scale-[1.01] transition-all duration-300">
  <div className="bg-[#F75550] bg-opacity-20 p-4 rounded-b-none rounded-lg h-[250px] flex items-center justify-center">
    <img className="w-full max-w-[150px] object-contain" src={img} alt={name} />
  </div>
  <div className="bg-opacity-20 flex flex-col items-center bg-black shadow-lg p-4 text-white rounded-t-none rounded-lg">
    <h1 className="text-base sm:text-lg font-semibold text-center">{name}</h1>
    <span className="text-sm sm:text-base">{price}₺</span>
    <Button onClick={() => addItem(product)} className="mt-2 hover:bg-[#f7565044] transition-all duration-200">
      <i className="fa-solid fa-cart-plus mr-2"></i>Sepete Ekle
    </Button>
  </div>
</li>

  );
};

export default ProductsItem;
