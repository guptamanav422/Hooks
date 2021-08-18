import {createContext, useState} from 'react';
import B from "./B.jsx";

let countContext=createContext()
let A=()=>{
    let[count,setCount]=useState(0);
    return (
      <>
      <countContext.Provider value={{count,setCount}}>
       <B />
      </countContext.Provider>
      </>
    );
  }
  
  export default A;
  export {countContext};