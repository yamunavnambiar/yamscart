import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar >
              <Toolbar variant="dense">
                
                  <Typography>
                      myAPP
                      <Link to='/menu'>
                          <Button variant="contained" color='success'>menu</Button>
                      </Link>
                      <Link to='/log'>
                          <Button variant="contained" color='success'>login</Button>
                      </Link>
                      <Link to='/sign'>
                      <Button variant="contained" color='success'>signin</Button>
                      </Link>
                      <Link to='/state'>
                          <Button variant="contained" color='success'>state</Button>
                      </Link>
                      <Link to='/count'>
                          <Button variant="contained" color='success'>counter</Button>
                      </Link>
                      <Link to='/name'>
                          <Button variant="contained" color='success'>name</Button>
                      </Link>
                      <Link to='/api'>
                          <Button variant="contained" color='success'>api</Button>
                      </Link>
                      <Link to='/poke'>
                          <Button variant="contained" color='success'>Pokemon</Button>
                      </Link>
                  </Typography>
    </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
