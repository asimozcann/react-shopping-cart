import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShow}) => {
  return (
    <div className="lg:px-0 px-4 bg-opacity-10 bg-white shadow-lg">
      <div className="flex justify-between h-[70px] items-center text-xl text-white my-0 mx-auto max-w-[1200px]">
        <h1 className="text-[#F75550] ">Alışveriş Uygulaması</h1>
        <HeaderCartButton onShow={onShow}/>
      </div>
    </div>
  );
};

export default Header;
