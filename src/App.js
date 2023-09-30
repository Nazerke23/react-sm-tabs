import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [currentEx, setCurrentEx] = useState("");

  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setData(data);
      setCurrentEx(data[0]);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(currentEx);

  useEffect(function () {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item, index) => (
        <button onClick={() => setCurrentEx(item)} key={index}>
          {item.company}
        </button>
      ))}
      <br />
      <Experience item={currentEx} />
    </div>
  );
}

export default App;

function Experience({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <h3>{item.dates}</h3>
      <p>{item.duties}</p>
    </div>
  );
}
