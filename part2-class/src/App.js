import Note from "./components/note";
import {useState} from 'react'

function App({props}) {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNoteChange = (event) => {
    
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        { notes.map(note => 

          <Note key={note.id} note = {note} />

        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}></input>
          <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
