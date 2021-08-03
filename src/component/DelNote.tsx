import React from "react";

interface DelNoteProps {
  delNote(n: number): void;
  i: number;
}

export const DelNote: React.FC<DelNoteProps> = ({ delNote, i }) => {
  return (
    <div
      className="DelNote"
      onClick={() => {
        delNote(i);
      }}
    >
      x
    </div>
  );
};
