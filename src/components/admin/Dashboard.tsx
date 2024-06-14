import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <Navbar />

        {/* Right Content Area */}
        <main className="flex-1 bg-adminBackground min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
