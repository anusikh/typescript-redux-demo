import React from "react";
import { NoteInput } from "./component/NoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./redux/notesReducer";
import { addNote } from "./redux/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAdd = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NoteInput addNote={onAdd} />
      <hr />
      <ol>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
