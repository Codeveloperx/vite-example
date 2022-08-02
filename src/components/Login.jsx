import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

  return (
    <div>
      <span>Click para ir al home</span>
      <Link to={'/home'}>
        <button>Login</button>
      </Link>
    </div>
  )
}

export default Login