import { createStore, Store } from "redux";

import { reducer, ActionTypes, ActionType } from "./App";

describe("custom balance reducer", () => {
  describe("should correctly processing actions sequence #1", () => {
    const balance: Store<number, ActionTypes> = createStore(reducer);

    it.each([
      [{ type: ActionType.UpdateBalance, payload: 1000.0 }, 1000],
      [{ type: ActionType.Credit, payload: 200.0 }, 800],
      [{ type: ActionType.Debit, payload: 50.0 }, 850],
      [{ type: ActionType.SetBalanceWithTax, payload: 14.0 }, 731],
    ])("action: %p", (action, expectedBalance) => {
      balance.dispatch(action);
      expect(balance.getState()).toBe(expectedBalance);
    });
  });

  describe("should correctly processing actions sequence #2", () => {
    const balance: Store<number, ActionTypes> = createStore(reducer);

    it.each([
      [{ type: ActionType.UpdateBalance, payload: 1000.0 }, 1000],
      [{ type: ActionType.Credit, payload: 200.0 }, 800],
      [{ type: ActionType.Credit, payload: 100.0 }, 700],
      [{ type: ActionType.SetBalanceWithTax, payload: 14.0 }, 602],
      [{ type: ActionType.Debit, payload: 250.0 }, 852],
      [{ type: ActionType.UpdateBalance, payload: 1000.0 }, 1000],
    ])("action: %p", (action, expectedBalance) => {
      balance.dispatch(action);
      expect(balance.getState()).toBe(expectedBalance);
    });
  });
});
