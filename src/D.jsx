import {useContext} from "react";
import {countContext} from "./A"
let D=()=>{
    const countObject = useContext(countContext)
    return (
      <>
      {countObject.count}
      <button onClick={()=>{
          countObject.setCount(countObject.count+1);
      }}> + </button>
      </>
    );
  }
  
  export default D;
  