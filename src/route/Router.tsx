import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import DashboardPage from "../pages/dashboard/DashboardPage";
import SetupCurrencyPage from "../pages/setupCurrency/SetupCurrencyPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/setup-currency",
        element: <SetupCurrencyPage />,
      },
      {
        path: "/fee-charge",
        element: <h1>fee-charge</h1>,
      },
      {
        path: "/coupons",
        element: <h1>coupons</h1>,
      },
    ],
  },
]);

export default Router;
