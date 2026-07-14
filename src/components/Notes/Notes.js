import "./Notes.css";

import Note from "./Note";

const Notes = (props) => {
  const { notes } = props;
  // console.log('props', notes);
  return (
    <div className="notes">
      {notes.length === 0 && <p>Notes you add appear here.</p>}
      {notes.length !== 0 && notes.map((note, index) => (
          <Note key={index} id={note.id} title={note.title} text={note.text} />
        ))}
      {/* {
        notes.length === 0 ? <p>Notes you add appear here.</p> :
        notes.map((note, index) => (
          <Note key={index} id={note.id} title={note.title} text={note.text} />))
      } */}
    </div>
  );
}

export default Notes;
