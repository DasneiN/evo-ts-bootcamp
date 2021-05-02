import { createStore, compose, Store, Reducer } from "redux";
import logo from "./logo.svg";
import "./App.css";

export enum ActionType {
  UpdateBalance = "UPDATE_BALANCE",
  Debit = "DEBIT",
  Credit = "CREDIT",
  SetBalanceWithTax = "SET_BALANCE_WITH_TAX",
}

interface IUpdateBalanceAction {
  type: ActionType.UpdateBalance;
  payload: number;
}

interface IDebitAction {
  type: ActionType.Debit;
  payload: number;
}

interface ICreditAction {
  type: ActionType.Credit;
  payload: number;
}

interface ISetBalanceWithTaxAction {
  type: ActionType.SetBalanceWithTax;
  payload: number;
}

export type ActionTypes =
  | IUpdateBalanceAction
  | IDebitAction
  | ICreditAction
  | ISetBalanceWithTaxAction;

const initialState = 0;

export const reducer: Reducer<number, ActionTypes> = (
  state: number = initialState,
  action: ActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UpdateBalance:
      return payload;

    case ActionType.Credit:
      return state - payload;

    case ActionType.Debit:
      return state + payload;

    case ActionType.SetBalanceWithTax:
      return (state * (100 - payload)) / 100;

    default:
      return initialState;
  }
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store: Store<number, ActionTypes> = createStore(
  reducer,
  composeEnhancers()
);

const actions: Array<ActionTypes> = [
  { type: ActionType.UpdateBalance, payload: 1000.0 },
  { type: ActionType.Credit, payload: 200.0 },
  { type: ActionType.Credit, payload: 100.0 },
  { type: ActionType.SetBalanceWithTax, payload: 14.0 },
  { type: ActionType.Debit, payload: 250.0 },
  { type: ActionType.UpdateBalance, payload: 1000.0 },
];

actions.forEach((action) => store.dispatch(action));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
