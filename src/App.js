import React, {useState} from "react";
import "./style.css";

export default function App() {

  let[counter,setCounter] = useState(0);
  return (
    <div>
      <button> + </button>
      <p>{counter}</p>
      <button> - </button>
    </div>
  );
}
