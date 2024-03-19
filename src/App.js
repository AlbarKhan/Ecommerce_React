import { useState } from "react";
import "./App.css";
import { Header } from "./header";
import { Login } from "./login";
import { ProductsList } from "./product_list";
import { Dashboard } from "./Dashboard";
import { products } from "./products_data";
import { AddProductsCategory } from "./AddProducts_category";

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [dashBoardOpen, setDashBoardOpen] = useState(false);
  const [productsList, setProductsList] = useState(products);
  return (
    <div className="App">
      {islogin ? (
        <>
          {dashBoardOpen ? (
            <Dashboard
              onClickDashBoard={setDashBoardOpen}
              setIsLogin={setIsLogin}
            >
              <AddProductsCategory setProductsList={setProductsList} />
            </Dashboard>
          ) : (
            <div>
              <Header
                currentUser={currentUser}
                admin={currentUser.admin}
                onClickDashBoard={setDashBoardOpen}
              />
              <MainWrapper>
                <ProductsList productsList={productsList} />
              </MainWrapper>
            </div>
          )}
        </>
      ) : (
        <Login setLogin={setIsLogin} setCurrentUser={setCurrentUser} />
      )}
      {/* <Hedaer /> */}
    </div>
  );
}

export default App;

export function MainWrapper({ children }) {
  return <div className="main-wrapper">{children}</div>;
}

// export function ProductsList() {
//   return (
//     <div className="product-list">
//       {products.map((product, index) => {
//         return (
//           <Product
//             key={index}
//             name={product.productName}
//             original_price={product.original_price}
//             price={product.price}
//             image={require(`${product.img}`).default}
//             category={product.category}
//           />
//         );
//       })}
//       {/* <Product /> */}
//     </div>
//   );
// }

// ProductsList.js
