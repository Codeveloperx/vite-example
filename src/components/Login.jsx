import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


const Login = () => {

  const [state, setState] = useState(false);

  const handleOnclick = () =>{
    setTimeout(()=>{
      setState(true)
    },2000)
  }

  return (
    <div>
      {state? <Navigate to={'/home'}/>:
        <button onClick={handleOnclick}>Click at home</button>
      }
    </div>
  )
}

export default Login