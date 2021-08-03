import React from "react";

interface EditNoteProps {
  setClicked(n: number): void;
  i: number;
}

export const EditNote: React.FC<EditNoteProps> = ({ setClicked, i }) => {
  return (
    <div className="EditNote">
      <button
        onClick={() => {
          setClicked(i);
        }}
      >
        Edit
      </button>
    </div>
  );
};
