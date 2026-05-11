import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
 const RemoteDashboard = React.lazy(() => import("dashboard/DashboardApp"));
 const RemoteOrders = React.lazy(() => import("orders/OrdersApp"));

function Dashboard() {
  return <h2>Dashboard Micro App</h2>;
}

function Orders() {
  return <h2>Orders Micro App</h2>;
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
 

  const handleLogin = () => {
    dispatch(login("Mayra"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div>
        <h3>Auth Demo</h3>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User: {user || "Not logged in"}</p>

        <nav style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/orders">Orders</Link>
        </nav>

        <Routes>
          <Route
  path="/dashboard"
  element={
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteDashboard />
    </React.Suspense>
  }
/>
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route
  path="/orders"
  element={
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteOrders />
    </React.Suspense>
  }
/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;