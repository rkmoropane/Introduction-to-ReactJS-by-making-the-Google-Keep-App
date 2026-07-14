import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [
    // {
    //   id: "a123",
    //   title: "Some title1",
    //   text: "Some text1",
    // },
    // {
    //   id: "a124",
    //   title: "Some title2",
    //   text: "Some text2",
    // },
    // {
    //   id: "a125",
    //   title: "Some title3",
    //   text: "Some text3",
    // },
    // {
    //   id: "a126",
    //   title: "Some title4",
    //   text: "Some text4",
    // }
  ];
const App = () => {
  const [notes, setNotes] = useState(NOTES);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...notes, note];
    });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} />
      <Modal /> 

    </div>
  );
}

export default App;

// use Arrow functions vs regular functions
// regular functions are calleable and constructible
// "this" inside a regular function is bound to the function
// arrow functions only one return statement