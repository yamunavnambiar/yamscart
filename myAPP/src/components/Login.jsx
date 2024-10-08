import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <TextField label="NAME" variant='outlined' /><br />
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Login
