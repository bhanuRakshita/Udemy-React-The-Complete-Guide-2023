import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const user = {
      name: name,
      age: age,
    };
    if (name.trim().length === 0 || age.trim().length === 0) {
      console.log("pls enter a name and age");
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
    } else if (age < 0) {
      console.log("pls enter a valid age");
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
    } else {
      props.onAddUser(user);
      setAge("");
      setName("");
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
        {error && (
            <ErrorModal 
                message={error.message}
                title={error.title}
                onConfirm={errorHandler}
            />
        )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            onChange={nameChangeHandler}
            type="text"
            value={name}
          ></input>
          <br />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            onChange={ageChangeHandler}
            type="number"
            value={age}
          ></input>
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
