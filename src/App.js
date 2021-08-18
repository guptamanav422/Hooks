import {useState,useEffect} from "react";

let App=()=>{
  const [count, setCount] = useState(0);

  console.log("render was called");
  
  // useEffect(() => {
  //   console.log("use Effect was called");
  // },[])

  useEffect(() => {
    console.log("use Effect case2 was called");
  })

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
