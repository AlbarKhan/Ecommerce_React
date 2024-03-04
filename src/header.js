import { useState } from "react";

export function Header({ currentUser, admin }) {
  const [dashBoard, setDAshboard] = useState(admin);
  const [dashBoardVisibility, setDashBoardVisibility] = useState(true);
  // console.log(admin);
  return (
    <header>
      <nav style={{ paddingBottom: dashBoard ? "35px" : "15px" }}>
        <div className="logo">
          <img
            src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design3.jpg"
            alt="logo"
            className="logo"
          ></img>
        </div>
        {/* <div className="searchBar">
          <input type="text"></input>
          <button className="searchIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> */}
        <div className="title">E-commerce</div>
        <div
          className="userIcon"
          onMouseEnter={() => setDashBoardVisibility(true)}
          onMouseLeave={() => setDashBoardVisibility(false)}
        >
          <span onMouseEnter={() => console.log("enter")}>
            {currentUser.username}
          </span>
          <i className="fa-solid fa-user"></i>
          {dashBoard && dashBoardVisibility ? (
            <span
              className="dashbord"
              onClick={() => console.log("dash click")}
            >
              Dashboard
            </span>
          ) : (
            ""
          )}
        </div>
        {/* <span>Dashboard</span> */}
      </nav>
      <div className="searchBar">
        <input type="text"></input>
        <button className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </header>
  );
}
