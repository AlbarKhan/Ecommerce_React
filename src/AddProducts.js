import { useState } from "react";
import { category } from "./products_data";
export function AddProducts() {
  const [categories, setcategory] = useState(category);
  const [newCategory, setNewCategory] = useState("");
  function handleAddCategory(e) {
    e.preventDefault();
    console.log("text");
    if (!newCategory) return;
    setcategory((categories) => [...categories, newCategory]);
    setNewCategory("");
  }

  function handleDeleteCategory(id) {
    setcategory((categories) =>
      categories.filter((cat, index) => index !== id)
    );
  }
  return (
    <div className="AddProducts">
      <form className="add-product-form ">
        <div className="add-title">
          <h2>Add product</h2>
        </div>
        <input type="text" placeholder="Product Name"></input>
        <input type="number" placeholder="Original Price"></input>
        <input type="number" placeholder="Price"></input>
        <div>
          <label style={{ marginRight: "10px" }}>Upload Image:</label>
          <input type="file" placeholder="Upload Image"></input>
        </div>
        <select>
          {categories.map((cat, index) => {
            return <option key={index}>{cat}</option>;
          })}
        </select>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <form
        className="add-category-form"
        onSubmit={(e) => {
          handleAddCategory(e);
        }}
      >
        <div className="add-title">
          <h2>Add Category</h2>
        </div>
        <input
          type="text"
          placeholder="Add caterory"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        ></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <div className="existing-Category">
          <h3>Existing Category</h3>
          {categories.map((cat, index) => {
            return (
              <p key={index}>
                <span>{cat} </span>
                <span onClick={() => handleDeleteCategory(index)}>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </p>
            );
          })}
        </div>
      </form>
    </div>
  );
}
