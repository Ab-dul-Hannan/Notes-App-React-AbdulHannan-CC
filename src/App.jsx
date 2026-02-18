import React, { useState, useEffect } from 'react'
import Header from './components/header.jsx'

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [notes, setNotes] = useState( () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const HandleFrom = (e) => {
    e.preventDefault();
    const newNotes = [...notes, { title, description }];
    setNotes(newNotes);
    setTitle("");
    setDescription("");
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const delNote = (index) => {
    const newNotes = notes.filter((noteArray, i) => i !== index);
    setNotes(newNotes);
  }

  return (<>
    <Header />

    <form className='notesForm' onSubmit={HandleFrom}>
      <input type="text" className='title' placeholder='Add Note Title'
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className='description' placeholder='Add Note Description'
        value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='addNote'>Add Note</button>
    </form>
    <div className='notesBox'>
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h3 className='noteTitle'>{note.title}</h3>
          <p className='noteDescription'>{note.description}</p>
          <button className='deleteNote' onClick={() => delNote(index)}>Delete Note</button>
        </div>
       )
      )}
    </div>
  </>
  )
}

export default App