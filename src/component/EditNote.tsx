import React from "react";

interface EditNoteProps {
  setClicked(n: number): void;
  updNote(x: string): void;
  i: number;
}

export const EditNote: React.FC<EditNoteProps> = ({
  setClicked,
  updNote,
  i,
}) => {
  return (
    <div className="EditNote">
      <button
        onClick={() => {
          setClicked(i);
          updNote("Hello");
        }}
      >
        Edit
      </button>
    </div>
  );
};
