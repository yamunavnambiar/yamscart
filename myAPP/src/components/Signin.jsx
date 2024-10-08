import { TextField,Button } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <div>
          <h1>SIGNIN PAGE</h1>
          <TextField label="NAME" variant='outlined' /><br/>
          <TextField label="AGE" variant='outlined' /><br />
          <TextField label="EMAIL ID" variant='outlined' /><br />
          <TextField label="PLACE" variant='outlined' /><br />
          <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Signin
   