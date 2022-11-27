function ViewEntries(props) {
  const { entries = [], removeEntry } = props;

  const clickRemoveEntry = (e, index) =>{
    removeEntry(index);
  }

  return (
    <div>
      <p>Number of entries: {entries.length}</p>
      <table hidden={!entries.length ? true : false} >
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
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.firstName}</td>
              <td>{entry.lastName}</td>
              <td>{entry.email}</td>
              <td className="remove" onClick={(e) => clickRemoveEntry(e, index)}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEntries;
