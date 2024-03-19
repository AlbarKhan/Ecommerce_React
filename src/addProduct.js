import { useEffect, useRef, useState } from "react";

export function AddProduct({ categories, setProductsList }) {
  const [productName, setProductName] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState("");
  const el = useRef(null);

  useEffect(function () {
    el.current.focus();
  }, []);

  function handleAddProducts(e) {
    e.preventDefault();
    if (!productName || !originalPrice || !price) return;
    const newProduct = {
      id: Date.now(),
      productName,
      original_price: originalPrice,
      price,
      img,
      category,
    };
    setProductsList((products) => [...products, newProduct]);
    console.log(img);
    setProductName("");
    setOriginalPrice("");
    setPrice("");
    setImg(null);
    setCategory("");
  }
  return (
    <form className="add-product-form " onSubmit={(e) => handleAddProducts(e)}>
      <div className="add-title">
        <h2>Add product</h2>
      </div>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        ref={el}
        onChange={(e) => setProductName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Original Price"
        value={originalPrice}
        onChange={(e) => setOriginalPrice(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <div>
        <label style={{ marginRight: "10px" }}>Upload Image:</label>
        <input
          type="file"
          placeholder="Upload Image"
          onChange={(e) => {
            const file = e.target.files[0];
            setImg(file);
          }}
        ></input>
      </div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat, index) => {
          return <option key={index}>{cat}</option>;
        })}
      </select>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
