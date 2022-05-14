import React from "react";
import { useState } from "react";


export default function Body() {
  const [count, setCount] = useState(null);
  const [frequency, setFrequency] = useState(null);


  const onChange = (value) => {
    setCount(value.target.value);

  };

  function freq(str) {
    console.log(str)
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] += 1;
      }
    }
    setFrequency(JSON.stringify(obj));
  }



  return (
    <div>
      <input type="text" placeholder="Enter name" onChange={onChange} />
      <h3>
        {count === null ? count : count === "" ? 0 : count.split(" ").length}
      </h3>
      <br />
      <p>
      {count === null ? count : count === "" ? 0 : freq(count)}
      {/* {frequency===null ? "nothing":frequency} */}
      </p>
    </div>
  );
}
