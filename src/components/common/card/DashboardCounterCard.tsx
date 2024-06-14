import DashboardCounterCardBtn from "../button/DashboardCounterCardBtn";
import CircleProgress from "../progress/CircleProgress";

interface DashboardCounterCardProps {
  title: string;
  strokeColor: string;
  trackColor: string;
  parcentage: number;
  amount: number;
  btnName1: string;
  btnName2: string;
  btnColor1: string;
  btnColor2: string;
  countItems1: number;
  countItems2: number;
}

const DashboardCounterCard = ({
  title,
  strokeColor,
  trackColor,
  parcentage,
  amount,
  btnName1,
  btnName2,
  btnColor1,
  btnColor2,
  countItems1,
  countItems2,
}: DashboardCounterCardProps) => {
  return (
    <div className="w-full bg-white rounded-[10px] px-[10px] py-5 space-y-1">
      <p className="font-[500] text-[#5A5278] text-[10px]">{title}</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-[#3C4248] font-[500]">{amount}</p>
        <CircleProgress
          strokeColor={strokeColor}
          trackColor={trackColor}
          parcentage={parcentage}
        />
      </div>
      <div className="flex gap-2">
        <DashboardCounterCardBtn
          name={btnName1}
          color={btnColor1}
          countItems={countItems1}
        />
        <DashboardCounterCardBtn
          name={btnName2}
          color={btnColor2}
          countItems={countItems2}
        />
      </div>
    </div>
  );
};

export default DashboardCounterCard;
