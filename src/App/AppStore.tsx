import React, { createContext, useReducer } from "react";
import { Experiment, ExperimentAction } from "../@types/Experiment";

interface AppState {
  experiments: Experiment[];
}

const DEFAULT_EXPERIMENT = {
  slug: "new-experiment",
  name: "Search CFR",
  description: "A Test CFR",
  metric: "active_hours",
  secondary_metric: "navigation.search",
  design: "",
  tags: "",
  channel: "",
};

const initialState: AppState = {
  experiments: [DEFAULT_EXPERIMENT],
};

const Reducer = (state: AppState, action: ExperimentAction) => {
  switch (action.type) {
    case "ADD_EXPERIMENT":
      return {
        ...state,
        experiments: [...state.experiments, action.data],
      };
    case "UPDATE_EXPERIMENT":
      return {
        ...state,
        experiments: state.experiments.map((item) =>
          item.slug !== action.slug ? item : { ...item, ...action.data }
        ),
      };

    default:
      return state;
  }
};

const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext<
  [AppState, React.Dispatch<ExperimentAction>]
>([initialState, () => null]);

export default Store;
