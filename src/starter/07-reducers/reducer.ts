export type CounterState = {
  count: number;
  status: string;
};

export const initialState = {
  count: 0,
  status: "Pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type CountAction = UpdateCountAction | SetStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CountAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...initialState };
    case "setStatus":
      return { ...state, status: action.payload };

    default:
      const unhandledActionType: never = action;
      throw new Error(
        `Unexpected action type: ${unhandledActionType}. Please double the counter reducer.`
      );
  }
};
