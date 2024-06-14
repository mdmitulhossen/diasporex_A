import RemittanceChart from "../../components/charts/RemittanceChart";
import DashboardCounterCard from "../../components/common/card/DashboardCounterCard";
import Topbar from "../../components/common/topbar/Topbar";

// Dummy data for Dashboard Counter Cards
const dashboardCounterCardItems = [
  {
    id: 1,
    title: "Review Payment Remittance",
    strokeColor: "#5d5dfc",
    trackColor: "#B0DDFA",
    parcentage: 5,
    amount: 0,
    btnName1: "HOLD",
    btnName2: "FAILED",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
  {
    id: 2,
    title: "Pending Remittance",
    strokeColor: "#FFBD4A",
    trackColor: "#FFE8BF",
    parcentage: 50,
    amount: 3,
    btnName1: "In Progress",
    btnName2: "Settled",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 1,
    countItems2: 0,
  },
  {
    id: 3,
    title: "Complete Remittance",
    strokeColor: "#FF8ACC",
    trackColor: "#FFD6ED",
    parcentage: 33,
    amount: 2,
    btnName1: "Cancel",
    btnName2: "Refund",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
  {
    id: 4,
    title: "Total Remittance",
    strokeColor: "#8376f2",
    trackColor: "#CEC9FA",
    parcentage: 0,
    amount: 6,
    btnName1: "Complete",
    btnName2: "Cancel",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 2,
    countItems2: 0,
  },
  {
    id: 5,
    title: "Total Users",
    strokeColor: "#FF8ACC",
    trackColor: "#FFD6ED",
    parcentage: 33,
    amount: 2,
    btnName1: "Cancel",
    btnName2: "Refund",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
  {
    id: 6,
    title: "Total Remittance Bank",
    strokeColor: "#FF8ACC",
    trackColor: "#FFD6ED",
    parcentage: 33,
    amount: 10,
    btnName1: "Cancel",
    btnName2: "Refund",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
  {
    id: 7,
    title: "Total Mobile Method",
    strokeColor: "#FF8ACC",
    trackColor: "#FFD6ED",
    parcentage: 33,
    amount: 5,
    btnName1: "Cancel",
    btnName2: "Refund",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
  {
    id: 8,
    title: "Total Support Ticket",
    strokeColor: "#FF8ACC",
    trackColor: "#FFD6ED",
    parcentage: 33,
    amount: 2,
    btnName1: "Cancel",
    btnName2: "Refund",
    btnColor1: "#1E9FF2",
    btnColor2: "#FFA753",
    countItems1: 0,
    countItems2: 0,
  },
];

const DashboardPage = () => {
  return (
    <div className="h-full">
      <Topbar>Dashboard</Topbar>
      <div className="lg:pl-5 lg:pr-7 px-2 w-full">
        <div className="h-auto w-full mt-[-40px]">
          {/* Dashboard Counter Cards */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {dashboardCounterCardItems.map((item) => (
              <DashboardCounterCard
                key={item.id}
                title={item.title}
                strokeColor={item.strokeColor}
                trackColor={item.trackColor}
                parcentage={item.parcentage}
                amount={item.amount}
                btnName1={item.btnName1}
                btnName2={item.btnName2}
                btnColor1={item.btnColor1}
                btnColor2={item.btnColor2}
                countItems1={item.countItems1}
                countItems2={item.countItems2}
              />
            ))}
          </div>
        </div>

        {/* graph Chart */}
        <div className="pt-[10px] flex">
          <div className="px-[10px] py-[15px] bg-white rounded-[10px] shrink-0 w-1/2">
            <p className="font-[500] text-sm text-adminTitle-200">
              Remittance Analytics
            </p>
            <div>
              <RemittanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
