import {useState} from "react";

let App=()=>{
  const [count, setCount] = useState(0);
  return (
    <>
    <button onClick={()=>{
      setCount(count+1);
    }}> + </button>

    {count}

    <button onClick={()=>{
      setCount(count-1);
    }}> -</button>
    </>
  );
}

export default App;
