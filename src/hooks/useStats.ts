import { useReducer } from "react";
import {
  Action,
  ActionTypes,
  Enemy,
  RewardTypes,
  State,
  Stats,
} from "../types.d";

const defaultEnemy: Enemy = {
  name: "Goblin",
  health: 0,
  maxHealth: 100,
  reward: {
    type: RewardTypes.GOLD,
    amount: 10,
  },
};

const defaultStats: Stats = {
  clickDamage: 1,
  clickMultiplier: 1,
  // AUTO
  autoClickDamage: 0,
  autoClickDamageInterval: 1000,
  autoClickMultiplier: 1,
  // IDLE
  idleDamageMultiplier: 0,
  // Global
  globalMultiplier: 1,
};

const defaultState: State = {
  currentEnemy: defaultEnemy,
  stats: defaultStats,
  clickDamage: 1,
  autoClickDamage: 0,
  gold: 0,
};

const getClickDamage = (stats: Stats): number => {
  const { clickDamage, clickMultiplier, globalMultiplier } = stats;

  return clickDamage * clickMultiplier * globalMultiplier;
};

const getAutoClickDamage = (stats: Stats): number => {
  const {
    autoClickDamage,
    autoClickMultiplier,
    idleDamageMultiplier,
    globalMultiplier,
  } = stats;
  return (
    autoClickDamage *
    (autoClickMultiplier + idleDamageMultiplier) *
    globalMultiplier
  );
};

const reducer = (state: State, action: Action): State => {
  const { type } = action;

  if (type === ActionTypes.INCREMENT_CLICK_DAMAGE) {
    const newState = {
      ...state,
      stats: {
        ...state.stats,
        clickDamage: state.stats.clickDamage + action.payload,
      },
    };

    newState.clickDamage = getClickDamage(newState.stats);
    return newState;
  }

  if (type === ActionTypes.INCREMENT_CLICK_MULTIPLIER) {
    const newState = {
      ...state,
      stats: {
        ...state.stats,
        clickMultiplier: state.stats.clickMultiplier + action.payload,
      },
    };
    newState.clickDamage = getClickDamage(newState.stats);
    return newState;
  }

  if (type === ActionTypes.INCREMENT_GLOBAL_MULTIPLIER) {
    const newState = {
      ...state,
      stats: {
        ...state.stats,
        globalMultiplier: state.stats.globalMultiplier + action.payload,
      },
    };
    newState.clickDamage = getClickDamage(newState.stats);
    newState.autoClickDamage = getAutoClickDamage(newState.stats);
    return newState;
  }

  if (type === ActionTypes.INCREMENT_AUTO_CLICK_DAMAGE) {
    const newState = {
      ...state,
      stats: {
        ...state.stats,
        autoClickDamage: state.stats.autoClickDamage + action.payload,
      },
    };
    newState.autoClickDamage = getAutoClickDamage(newState.stats);
    return newState;
  }

  if (type === ActionTypes.INCREMENT_AUTO_CLICK_MULTIPLIER) {
    const newState = {
      ...state,
      stats: {
        ...state.stats,
        autoClickMultiplier: state.stats.autoClickMultiplier + action.payload,
      },
    };
    newState.autoClickDamage = getAutoClickDamage(newState.stats);
    return newState;
  }

  return state;
};

export const useStats = (initialState = null) => {
  const [state, dispatch] = useReducer(reducer, initialState || defaultState);

  const incrementClickDamage = (payload: Stats["clickDamage"]): void => {
    dispatch({
      type: ActionTypes.INCREMENT_CLICK_DAMAGE,
      payload,
    });
  };

  const incrementClickMultiplier = (
    payload: Stats["clickMultiplier"]
  ): void => {
    dispatch({
      type: ActionTypes.INCREMENT_CLICK_MULTIPLIER,
      payload,
    });
  };

  const incrementGlobalMultiplier = (
    payload: Stats["globalMultiplier"]
  ): void => {
    dispatch({
      type: ActionTypes.INCREMENT_GLOBAL_MULTIPLIER,
      payload,
    });
  };

  const incrementAutoClickDamage = (
    payload: Stats["autoClickDamage"]
  ): void => {
    dispatch({
      type: ActionTypes.INCREMENT_AUTO_CLICK_DAMAGE,
      payload,
    });
  };

  const incrementAutoClickMultiplier = (
    payload: Stats["autoClickMultiplier"]
  ): void => {
    dispatch({
      type: ActionTypes.INCREMENT_AUTO_CLICK_MULTIPLIER,
      payload,
    });
  };

  return {
    ...state,
    incrementClickDamage,
    incrementClickMultiplier,
    incrementGlobalMultiplier,
    incrementAutoClickDamage,
    incrementAutoClickMultiplier,
  };
};
