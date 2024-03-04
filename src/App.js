import { useState } from "react";
import "./App.css";
import { Header } from "./header";
import { Login } from "./login";

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="App">
      {islogin ? (
        <Header currentUser={currentUser} admin={currentUser.admin} />
      ) : (
        <Login setLogin={setIsLogin} setCurrentUser={setCurrentUser} />
      )}
      {/* <Hedaer /> */}
    </div>
  );
}

export default App;
