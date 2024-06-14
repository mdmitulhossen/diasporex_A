const DashboardCounterCardBtn = ({
  color,
  countItems,
  name,
}: {
  color: string;
  countItems: number;
  name: string;
}) => {
  return (
    <>
      <button
        style={{ color: color, borderColor: color }}
        className={`text-[8px] py-[3px] px-[12px] flex justify-center items-center rounded-[10px] outline-0 border-[0.5px] font-[500]`}
      >
        {name} {countItems}
      </button>
    </>
  );
};

export default DashboardCounterCardBtn;
