// Login.jsx
import React, { useState } from 'react';
//import FormControl from "@mui/material/FormControl";
import { 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  IconButton, 
  InputAdornment 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log(formData);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='L-MainContainer'>
        <div className='L-LeftContainer'>
        <h2 className='mainLoginTitle'>INVOIXPRO</h2>
        <img src="https://logistifie.com/assets/static/img/invoice1.jpg" alt="System" className='LoginSystemImage' />
        </div>
    <div className="L-RightContainer">
      <div className="LoginForm">
      <h2 className="Login">Login</h2>

        <form onSubmit={handleSubmit} >

         <div className="LoginInnerContainer">
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="login-input"
          />
          
          
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="login-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          
          
          <FormControl fullWidth margin="normal" className="login-input">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              label="Role"
                size="small"
              onChange={handleChange}
            >
              <MenuItem value="owner">Owner</MenuItem>
              <MenuItem value="accountant">Accountant</MenuItem>
              
            </Select>
          </FormControl>
          
          <Button
        style={{ 
            
    backgroundColor:'#2D5852' ,
    color:' white',
    borderRadius:' 8px'
    
             }}

            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="login-button"
          >
            Log In
          </Button>
          </div>
          <div className="signup-link">
          <p>Don't you have an Account? </p>
   
                                
                                <a href="/">Forgot Password?</a>
                                

          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;