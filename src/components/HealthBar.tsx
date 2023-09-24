interface HealthBarProps {
  health: number;
}

const HealthBar = ({ health }: HealthBarProps) => {
  return (
    <div className="w-full bg-red-200 h-2.5">
      <div className="bg-red-600 h-2.5" style={{ width: `${health}%` }}></div>
    </div>
  );
};

export default HealthBar;
