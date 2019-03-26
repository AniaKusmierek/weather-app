import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        placeholder="Wpisz miasto"
        onChange={props.change}
        value={props.value}
      />
      <button>Wyszukaj miasto</button>
    </form>
  );
};

export default Form;
