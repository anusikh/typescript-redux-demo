import React from "react";
import { NoteInput } from "./component/NoteInput";
import { DelNote } from "./component/DelNote";
import { EditNote } from "./component/EditNote";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./redux/notesReducer";
import { addNote, delNote, setClicked } from "./redux/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const clicked = useSelector<NotesState, NotesState["clicked"]>(
    (state) => state.clicked
  );

  const dispatch = useDispatch();

  const onAdd = (note: string) => {
    dispatch(addNote(note));
  };

  const onDel = (num: number) => {
    dispatch(delNote(num));
  };

  const onSel = (num: number) => {
    dispatch(setClicked(num));
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
              <EditNote setClicked={onSel} i={idx} />
              <button
                onClick={() => {
                  console.log(clicked);
                  console.log(notes[clicked]);
                }}
              >
                Click
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
