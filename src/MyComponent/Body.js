import React from "react";
import { useState } from "react";


export default function Body() {
  const [text, setText] = useState('');
  const [count, setCount] = useState('Hi');
  const [frequency, setFrequency] = useState(null);


  const onChange = (value) => {
    setText(() => { return value});
    console.log(value ,text);
    setCount(text.trim().split(/\s+/).length);
    freq(value)
  };

  function freq(str){
    // var str = text;
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      console.log(i);
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] += 1;
      }
      // break;
    }
    setFrequency(JSON.stringify(obj));
    return "Hi0;"
  }



  return (
    <div>

      <input type="text" placeholder="Enter name" onChange={e => {onChange(e.target.value)}} />
      {text} - {frequency}
      <h3>
        {/* {count === null ? count : count === "" ? 0 : count.split(" ").length} */}
      </h3>
      <br />
      <p>
      {/* {count === null ? count : count === "" ? 0 : freq(count)} */}
      {/* {frequency===null ? "nothing":frequency} */}
      </p>
    </div>
  );
}
