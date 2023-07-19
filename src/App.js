import "./App.css";
import React from "react";
import MemoButton from "./MemoButton";
import { useState, useRef } from "react";
import styles from "./App.module.css"

function App() {
  let [notes, setNotes] = useState(["First Note!"]);
  let [index, setIndex] = useState(0);
  let memoArea = useRef(null);

  const saveNotes = () => {
    let note = memoArea.current.value;
    setNotes((current) => {
      let newNotes = [...current];
      console.log(note);
      newNotes[index] = note;
      return newNotes;
    });
  };

  const onAddNote = () => {
    saveNotes();
    setNotes((current) => [...current, ""]);
    setIndex(notes.length);
    memoArea.current.value = "";
  };

  const onOpenNote = (event) => {
    saveNotes();
    let i = event.target.value;
    setIndex(i);
    memoArea.current.value = notes[i];
  };

  return (
    <div className="App">
      <div className={styles.titleDiv}>
        <h1> Memos! </h1>
        <h2> A simple memo app </h2>
      </div>
      <div className={styles.textAreaDiv}>
        <textarea
          id="memoArea"
          className={styles.memoArea}
          placeholder="Enter your memo here"
          ref={memoArea}
        ></textarea>
      </div>
      <div className={styles.btnDiv}>
        <MemoButton key={-1} index={-1} onClick={onAddNote} />
        {/* btn repeat */}
        {notes.map((note, i) => {
          return (
            <MemoButton
              key={i}
              index={i}
              selected={index}
              onClick={onOpenNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
