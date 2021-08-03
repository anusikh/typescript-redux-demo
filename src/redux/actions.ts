export type Action =
  | { type: "ADD_NOTE"; payload: string }
  | { type: "DEL_NOTE"; payload: number }
  | { type: "SET_CLICKED"; payload: number };

export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const delNote = (num: number): Action => ({
  type: "DEL_NOTE",
  payload: num,
});

export const setClicked = (num: number): Action => ({
  type: "SET_CLICKED",
  payload: num,
});
