// import React from 'react';
// import './Main.css';
// import { Olog } from './Olog';
// import { Reg } from './Reg';

// import CollapsibleExample from './CollapsibleExample';
// export const Main = ({ login, Setlogin }) => {
//   const x=()=>{
//     console.log("hello")
//   }
//   return (
    // <div className='main'>
    //   <div className='astro'></div>
     
    //   <CollapsibleExample login={login} Setlogin={Setlogin}/>
    //   <button onClick={x}>
    //     hello
    //   </button>
    // </div>
//   );
// };
import React from 'react'
import CollapsibleExample from './CollapsibleExample';
import "./Main.css"
export const Main = ({ login, Setlogin }) => {
 
  return (
    <div className='main'>
      <div className='astro'></div>
     
      <CollapsibleExample  className="cool" login={login} Setlogin={Setlogin}/>
    
    </div>
  )
}
