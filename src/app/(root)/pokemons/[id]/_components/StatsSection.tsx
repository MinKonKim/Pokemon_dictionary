const StatsSection = ({
  height,
  weight,
}: {
  height: number;
  weight: number;
}) => (
  <div className="mb-3 flex flex-col gap-1 font-semibold text-xl">
    <div className="flex gap-3">
      <div>키: {height / 10}m</div>
      <div>
        무게: <span>{weight}kg</span>
      </div>
    </div>
  </div>
);

export default StatsSection;
