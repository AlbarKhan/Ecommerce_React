import { useState } from "react";

export function AddCategory({ categories, setcategory }) {
  const [newCategory, setNewCategory] = useState("");

  function handleAddCategory(e) {
    e.preventDefault();
    console.log("text");
    if (!newCategory) return;
    const existingCategory = categories.includes(newCategory);

    if (existingCategory) {
      alert("Category Already Exists");
      return;
    }
    setcategory((categories) => [...categories, newCategory]);
    setNewCategory("");
  }

  function handleDeleteCategory(id) {
    setcategory((categories) =>
      categories.filter((cat, index) => index !== id)
    );
  }
  return (
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
  );
}
