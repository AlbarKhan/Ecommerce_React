import { useState } from "react";
import { category } from "./products_data";
import { AddCategory } from "./AddCategory";
import { AddProduct } from "./addProduct";
export function AddProductsCategory({ setProductsList }) {
  const [categories, setcategory] = useState(category);
  return (
    <div className="AddProducts">
      <AddProduct categories={categories} setProductsList={setProductsList} />
      <AddCategory categories={categories} setcategory={setcategory} />
    </div>
  );
}
