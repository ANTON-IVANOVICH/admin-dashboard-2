import React, { FC, useState } from 'react';
import { useActions, useAppSelector } from '../../hooks/redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, TextField, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './login.scss'

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

//99c714f784e98053cb9ccfe735d0cbc017368d22cf283efca42a94629fbc01ea

const Login: FC = () => {
  const { error, isLoading } = useAppSelector(state => state.authReducer);
  const [values, setValues] = useState<State>({ username: '', password: '', showPassword: false });
  const {login} = useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(values.username, values.password);
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword, });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className='login' onSubmit={e => handleSubmit(e)}>
      {error && <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField onChange={handleChange('username')} id="input-with-sx" label="Username" variant="standard" required />
      </Box>
      <FormControl sx={{ m: 1, width: '25ch', marginBottom: '15px' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          label="Password"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <LoadingButton loading={isLoading} variant="outlined" type='submit'>Войти</LoadingButton>
    </form>
  )
}

export default Login;
