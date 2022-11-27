import { useRef } from "react";

function Form(props) {
  const { saveFormEntry } = props;

  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");

  const save = (e) => {
    e.preventDefault();

    const formEntry = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
    };

    saveFormEntry({ ...formEntry });

    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
  };

  return (
    <div>
      <h2 className="header">Register Today</h2>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" ref={firstName} />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" ref={lastName} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={email} />

        <button type="submit" onClick={(e) => save(e)} >Save</button>
      </form>
    </div>
  );
}

export default Form;
