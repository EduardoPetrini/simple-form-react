import { useState } from "react";

function ViewEntries(props) {
  const { entries = [], removeEntry } = props;
  const [query, setQuery] = useState("");

  const filteredEntries = entries.filter(({ firstName, lastName, email }) => {
    const singleString = `${firstName} ${lastName} ${email}`;

    return singleString.includes(query);
  });

  const clickRemoveEntry = (e, id) => {
    removeEntry(id);
  };

  return (
    <div>
      <p>Number of entries: {entries.length}</p>
      <div hidden={!entries.length ? true : false}>
        <input type="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.firstName}</td>
                <td>{entry.lastName}</td>
                <td>{entry.email}</td>
                <td className="remove" onClick={(e) => clickRemoveEntry(e, entry.id)}>
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewEntries;
