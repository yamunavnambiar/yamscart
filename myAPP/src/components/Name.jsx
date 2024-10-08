import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [name, Setname] = useState()

    const X = () => {
        Setname("SAFLA")
    }
    const Y = () => {
        Setname("MUFI")
    }
    const Z = () => {
        Setname("ASNA")
    }
    useEffect( () => { X()},[] )
  return (
      <div>
          <Typography variant='h3'>NAME :{name}</Typography>
          <Button variant="contained" onClick={X} >SAFLA</Button > 
          <Button variant="contained" onClick={Y} >MUFI</Button > 
          <Button variant="contained" onClick={Z} >ASNA</Button > 
    </div>
  )
}

export default Name