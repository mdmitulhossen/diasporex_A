const CircleProgress = ({
  trackColor,
  strokeColor,
  parcentage,
}: {
  trackColor: string;
  strokeColor: string;
  parcentage: number;
}) => {
  return (
    <>
      <div className="relative size-[50px]">
        <svg
          className="size-full"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            style={{ stroke: trackColor, color: trackColor }}
            strokeWidth="2"
          ></circle>

          <g className="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              style={{ stroke: strokeColor, color: strokeColor }}
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - parcentage}
            ></circle>
          </g>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span
            style={{ color: strokeColor }}
            className="text-center text-xs font-[500]"
          >
            {parcentage}%
          </span>
        </div>
      </div>
    </>
  );
};

export default CircleProgress;
