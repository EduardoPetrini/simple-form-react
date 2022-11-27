import Form from "./components/Form";
import ViewEntries from "./components/ViewEntries";
import "./App.css"
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);

  const saveFormEntry = (entry) => {
    setEntries((current) => [...current, entry]);
  }

  const removeEntry = (index) => {
    setEntries(current => {
      return [...current.slice(0, index), ...current.slice(index + 1)]
    })
  }
  return (
    <div id="simple-form">
      <Form saveFormEntry={saveFormEntry}></Form>
      <hr />
      <ViewEntries entries={entries} removeEntry={removeEntry}></ViewEntries>
    </div>
  );
}

export default App;
