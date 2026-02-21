import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const username = "zee";
  let [Counter ,setCounter ]=useState(0);
  const addValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
      setCounter((prevCounter) => {
        return prevCounter + 1;
      })
      setCounter(counter => counter + 1);
    }
  }
  const removeValue = () => {
    if (Counter > 0) {
      setCounter(Counter - 1)
    }
}


  const defObject = {
    title: "superman",
    discription:"superhero"
  }
  const newArray = [1, 2, 3];
  return (
    <>
      <h2>hello {username}
        {/* here {} is called evaluated expression, we can put any js expression inside {} and it will be evaluated and the result will be rendered we can not put statements like if else or for loop inside {} but we can use ternary operator and logical operator to achieve the same result as if else statement and for loop */}
      </h2>
      <h3>counter :{Counter}</h3>
      <button onClick={addValue}
      >add value</button>
      <button onClick={removeValue}
      >remove value</button>


      <Card title="superman" />
      <Card />
      <Card myArray={newArray} myObject={defObject} />
    </>
  )
}

export default App
