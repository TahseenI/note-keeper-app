import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddingArea from "./AddingArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header /> 
      <AddingArea onAdd={addNote}/>
      { notes.map((item,index) => {
        return (
            <Note
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                onDelete={deleteNote}
            /> 
            );
          })} 
      <Footer />
    </div>
  );
}

export default App;