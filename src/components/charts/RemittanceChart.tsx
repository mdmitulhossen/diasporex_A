import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RemittanceChart = () => {
  const [series] = useState([
    {
      name: "Pending",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Complete",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 300,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: ["#5A5278", "#6F6593"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      //   title: {
      //     text: "$ (thousands)",
      //   },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  });

  return (
    <div className="w-full overflow-hidden">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
};

export default RemittanceChart;
