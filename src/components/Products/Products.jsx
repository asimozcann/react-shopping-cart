import { products } from "../../productsData";
import ProductsItem from "./ProductsItem";

const Products = () => {
  const productsList = products.map((product) => (
    <ProductsItem key={product.id} product={product} />
  ));
  return (
    <main className="my-4 mx-auto max-w-[1200px] ">
      <h1 className="text-center text-white text-3xl">Ürünler</h1>
      <ul className="grid grid-auto-fill gap-4 ">{productsList}</ul>
    </main>
  );
};

export default Products;
