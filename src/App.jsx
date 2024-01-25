import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    Email_id: "",
    textarea: "",
    isvisible: true,
    mode: "online",
    select: "",
  });
  console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <form action="" onSubmit={handler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstname"
          value={formData.firstname}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastname"
          value={formData.lastname}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your Email id"
          onChange={changeHandler}
          name="Email_id"
          value={formData.Email_id}
        />
        <br />
        <br />
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          onChange={changeHandler}
          placeholder="Enter your comments here:"
          value={formData.textarea}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          name="isvisible"
          id="isvisible"
          onChange={changeHandler}
          checked={formData.isvisible}
        />
        <label htmlFor="isvisible">Are You Visible:</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            name="mode"
            type="radio"
            onChange={changeHandler}
            value="online"
            id="mode"
            checked={formData.mode === "online"}
          />
          <label htmlFor="mode">Online</label>
          <br />
          <input
            name="mode"
            type="radio"
            onChange={changeHandler}
            value="offline"
            id="mode"
            checked={formData.mode === "offline"}
          />
          <label htmlFor="mode">Offline</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor="select">Choose Your Favourite Color: </label>
        <select
          id="select"
          onChange={changeHandler}
          value={formData.select}
          name="select"
        >
          <option value="red">red</option>
          <option value="pink">pink</option>
          <option value="orange">orange</option>
          <option value="green">green</option>
        </select>
        <br />
        <br />
        <button>Submit Now</button>
      </form>
    </>
  );
}

export default App;
