import { useState } from "react";
import "./App.css";
import { Header } from "./header";
import { Login } from "./login";
import { ProductsList } from "./product_list";

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="App">
      {islogin ? (
        <>
          <Header currentUser={currentUser} admin={currentUser.admin} />
          <MainWrapper />
        </>
      ) : (
        <Login setLogin={setIsLogin} setCurrentUser={setCurrentUser} />
      )}
      {/* <Hedaer /> */}
    </div>
  );
}

export default App;

export function MainWrapper() {
  return (
    <div className="main-wrapper">
      <ProductsList />
    </div>
  );
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
