const CartItem = ({ product, removeItem }) => {
  const { img, name, price, amount,id } = product;
  return (
    <li className="flex justify-between items-center p-2 border-b-[1px] border-black">
      <div className="w-16">
        <img src={img} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <h1 className="font-medium">{name}</h1>
          <div className="flex justify-end text-[16px] gap-1">
            <span>{price}</span>x
            <span className="text-[#F75550]">{amount}</span>
          </div>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            removeItem(id);
          }}
          href="/"
          className=" text-red-600 text-2xl"
        >
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
