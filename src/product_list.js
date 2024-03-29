import { Product } from "./product";
export function ProductsList({ productsList }) {
  return (
    <div className="product-list">
      {productsList.map((product, index) => (
        <Product
          key={index}
          name={product.productName}
          original_price={product.original_price}
          price={product.price}
          image={product.img} // Pass the image path as a prop
          category={product.category}
        />
      ))}
    </div>
  );
}
