import { category } from "./products_data";
export function AddProducts() {
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
          {category.map((cat) => {
            return <option>{cat}</option>;
          })}
        </select>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <form className="add-category-form">
        <div className="add-title">
          <h2>Add Category</h2>
        </div>
        <input type="text" placeholder="Add caterory"></input>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <div className="existing-Category">
          <h3>Existing Category</h3>
          <p>sports</p>
          <p>Electronics</p>
        </div>
      </form>
    </div>
  );
}
