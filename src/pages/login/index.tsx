
import { useState } from 'react';

import Box from '@mui/material/Box';
import { FormControl, IconButton, OutlinedInput,InputLabel, InputAdornment, Button} from '@mui/material';
import {Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';

import './styles.css'


export function Login(){
  const [passwrord, setPassword] = useState('')
  const [userText, setUserText] = useState('')
  const [ showPassword, setShowPassword ] = useState(false)
  return(
    <div className="centered-div">
      <Box
        width={400}
        height={400}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={4}
        p={2}
        bgcolor={"#d6d6d6"}
        sx={{ border: '2px solid grey' }}
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-user">Nome</InputLabel>
              <OutlinedInput
                id="outlined-adornment-user"
                type={'text'}
                value={userText} 
                onChange={(e) => setUserText(e.target.value)}  
                endAdornment={
                    <InputAdornment position="end">
                      <AccountCircle/>
                    </InputAdornment>
                  }
                label="Usuario"
              />
        </FormControl>  
       <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={passwrord} 
                onChange={(e) => setPassword(e.target.value)}  
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                          aria-label="toggle password visibility"
                          onClick={()=> {setShowPassword(!showPassword)}}
                          edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>  
        <Button >Entrar</Button>
      </Box>
    </div>
  )
}