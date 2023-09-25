import { FC, useEffect, useState } from "react";
import { Enemy } from "../types";

interface HealthBarProps {
  health: Enemy["health"];
  maxHealth: Enemy["maxHealth"];
}

const getHealthPercentage = (
  maxHealth: Enemy["maxHealth"],
  health: Enemy["health"]
): string => {
  if (maxHealth <= 0) {
    return "0";
  }
  const healthPercentage = (health / maxHealth) * 100;

  return healthPercentage.toFixed(2);
};

const HealthBar: FC<HealthBarProps> = ({ health, maxHealth }) => {
  const [healthPercentage, setHealthPercentage] = useState("100");

  useEffect(() => {
    setHealthPercentage(getHealthPercentage(maxHealth, health));
  }, [health, maxHealth]);

  return (
    <div className="w-full bg-red-200 h-2.5">
      <div
        className="bg-red-600 h-2.5"
        style={{ width: `${healthPercentage}%` }}
      ></div>
    </div>
  );
};

export default HealthBar;
