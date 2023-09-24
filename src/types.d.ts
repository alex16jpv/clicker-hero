export enum RewardTypes {
  GOLD = "GOLD",
}

export interface Enemy {
  name: string;
  health: number;
  maxHealth: number;
  reward: {
    type: RewardTypes;
    amount: number;
  };
}

export interface Stats {
  clickDamage: number;
  clickMultiplier: number;
  autoClickDamage: number;
  autoClickDamageInterval: number;
  autoClickMultiplier: number;
  idleDamageMultiplier: number;
  globalMultiplier: number;
}

export interface State {
  currentEnemy: Enemy;
  stats: Stats;
  clickDamage: number;
  autoClickDamage: number;
  gold: number;
}

export enum ActionTypes {
  // Set Enemy
  SET_CURRENT_ENEMY = "SET_CURRENT_ENEMY",
  SET_ENEMY_HEALTH = "SET_ENEMY_HEALTH",

  // Increment Stats
  INCREMENT_CLICK_DAMAGE = "INCREMENT_CLICK_DAMAGE",
  INCREMENT_CLICK_MULTIPLIER = "INCREMENT_CLICK_MULTIPLIER",

  INCREMENT_AUTO_CLICK_DAMAGE = "INCREMENT_AUTO_CLICK_DAMAGE",
  INCREMENT_AUTO_CLICK_DAMAGE_INTERVAL = "INCREMENT_AUTO_CLICK_DAMAGE_INTERVAL",
  INCREMENT_AUTO_CLICK_MULTIPLIER = "INCREMENT_AUTO_CLICK_MULTIPLIER",

  INCREMENT_IDLE_DAMAGE_MULTIPLIER = "INCREMENT_IDLE_DAMAGE_MULTIPLIER",

  // Global
  INCREMENT_GLOBAL_MULTIPLIER = "INCREMENT_GLOBAL_MULTIPLIER",

  // set rewards
  INCREMENT_GOLD = "INCREMENT_GOLD",
}

export type Action =
  | {
      type: ActionTypes.INCREMENT_CLICK_DAMAGE;
      payload: Stats["clickDamage"];
    }
  | {
      type: ActionTypes.INCREMENT_CLICK_MULTIPLIER;
      payload: Stats["clickMultiplier"];
    }
  | {
      type: ActionTypes.INCREMENT_AUTO_CLICK_DAMAGE;
      payload: Stats["autoClickDamage"];
    }
  | {
      type: ActionTypes.INCREMENT_AUTO_CLICK_MULTIPLIER;
      payload: Stats["autoClickMultiplier"];
    }
  | {
      type: ActionTypes.INCREMENT_IDLE_DAMAGE_MULTIPLIER;
      payload: Stats["idleDamageMultiplier"];
    }
  | {
      type: ActionTypes.INCREMENT_GLOBAL_MULTIPLIER;
      payload: Stats["globalMultiplier"];
    };
