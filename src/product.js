export function Product({ name, price, original_price, image, category }) {
  return (
    <div className="product">
      <img src={image} alt="product"></img>
      <div className="product_detail">
        <p className="product_name">{name}</p>
        <p>
          <strike>${original_price}</strike>
          <span> ${price}</span>
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
