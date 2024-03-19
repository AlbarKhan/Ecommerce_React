// import { AddProducts } from "./AddProducts";

export function Dashboard({ onClickDashBoard, setIsLogin, children }) {
  function handleDashboard() {
    onClickDashBoard(false);
  }
  return (
    <div className="dashboard">
      <div className="dash-body">
        <div className="dashBoard-Panel">
          <p>Products</p>
          <p>Category</p>
        </div>
        <div className="dash-content">
          <div className="dash-head">
            <h2>Welcome to Dashboard</h2>
            <div>
              <span style={{ cursor: "pointer" }} onClick={handleDashboard}>
                Home
              </span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
