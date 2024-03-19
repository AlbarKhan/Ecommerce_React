import { useEffect, useRef, useState } from "react";

export function Header({ currentUser, admin, onClickDashBoard }) {
  const [dashBoard, setDAshboard] = useState(admin);
  const [dashBoardVisibility, setDashBoardVisibility] = useState(true);
  const [search, setSearch] = useState("");
  const searchElement = useRef(null);
  // console.log(admin);
  useEffect(function () {
    searchElement.current.focus();
  }, []);
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
              onClick={() => {
                onClickDashBoard(true);
              }}
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
        <input
          type="text"
          ref={searchElement}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </header>
  );
}
