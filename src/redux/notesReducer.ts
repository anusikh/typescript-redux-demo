import { Action } from "./actions";

export interface NotesState {
  notes: string[];
  clicked: number;
}

const initialState = {
  notes: [],
  clicked: -1,
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "DEL_NOTE": {
      const no = state.notes.filter((note, i) => i !== action.payload);
      return { ...state, notes: no };
    }
    case "SET_CLICKED": {
      return { ...state, clicked: action.payload };
    }
    default:
      return state;
  }
};
