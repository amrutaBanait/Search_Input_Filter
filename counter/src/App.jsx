import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CounterValue from "./components/CounterValue";

const App = () => {
  const [loading, setloading] = useState(false);

  let [count, setCount] = useState(0);

  const getcount = async () => {
    const response = await fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
    );

    const data = await response.json();
    console.log(data);
    const number = 1;
    setCount(number);
  };

  useEffect(() => {
    getcount();
  }, []);


  const IncNum = async () => {
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: count + 1,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setCount(data));
  };

  const DncNum = async () => {
    fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: count - 1,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setCount(data));
  };

  return (
   <>
      <h1 className="heading">Hello I am Counter</h1>

      <div className="container">
        <button className="btn" onClick={DncNum}>
          -
        </button>
        <h1 className="heading1"> {count} </h1>
        <button className="btn1" onClick={IncNum}>
          +
        </button>
      </div>
     <CounterValue count= {count}/>
    </>
  );
};

export default App;
