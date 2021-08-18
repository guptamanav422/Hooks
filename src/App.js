import {useState,useEffect} from "react";

let App=()=>{
  const [count, setCount] = useState(0);

  let [process,setProcess]=useState("running");
  console.log("render was called");
  
  // case 1 
  // useEffect(() => {
  //   console.log("use Effect was called");
  // },[])

  // case 2 
  // useEffect(() => {
  //   console.log("use Effect case2 was called");
  // })

  useEffect(()=>{
    let arr=process.split("i");
    console.log(arr);
  },[process])

  return (
    <>
    <button onClick={()=>{
      setCount(count+1);
    }}> + </button>

    {count}

    <button onClick={()=>{
      setCount(count-1);
    }}> -</button>

    <p>{process}</p>
    <button onClick={()=>{
      setProcess("stop");
    }}>Kill Process</button>
    </>
  );
}

export default App;
