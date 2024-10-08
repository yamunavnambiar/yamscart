import { Button,  Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [value, Setvalue] = useState(0)
    

    const X = () => {
        Setvalue(value +1)

    }
    const Y = () => {
        Setvalue(value - 1)

    }
    
    return (
        <div>
            <Typography variant='h3'>Counter {value}</Typography>
            
            <Button variant="contained" onClick={X} >+</Button > &nbsp;&nbsp;
            <Button variant="contained" onClick={Y} >-</Button>

        </div>
    )
}

export default Counter
