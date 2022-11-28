import Form from "./components/Form";
import ViewEntries from "./components/ViewEntries";
import "./App.css";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);

  const saveFormEntry = (entry) => {
    const id = Math.round(Math.random() * 100000);

    console.log(`Add: ${id}`);
    setEntries((current) => [...current, { ...entry, id }]);
  };

  const removeEntry = (id) => {
    console.log(`Remove: ${id}`);
    setEntries((current) => {
      const newEntries = current.reduce((newEntries, entry) => {
        if (entry.id !== id) {
          return [...newEntries, entry];
        }

        return newEntries;
      }, []);

      return newEntries;
    });
  };
  return (
    <div id="simple-form">
      <Form saveFormEntry={saveFormEntry}></Form>
      <hr />
      <ViewEntries entries={entries} removeEntry={removeEntry}></ViewEntries>
    </div>
  );
}

export default App;

