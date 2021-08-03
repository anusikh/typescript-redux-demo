import React from "react";
import { NoteInput } from "./component/NoteInput";
import { DelNote } from "./component/DelNote";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./redux/notesReducer";
import { addNote, delNote } from "./redux/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAdd = (note: string) => {
    dispatch(addNote(note));
  };

  const onDel = (num: number) => {
    dispatch(delNote(num));
  };

  return (
    <div className="App">
      <NoteInput addNote={onAdd} />
      <hr />
      <ol>
        {notes.map((note, idx) => {
          return (
            <div>
              <li key={note}>{note}</li>
              <DelNote delNote={onDel} i={idx} />
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
