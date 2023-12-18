import { Stack } from '@mui/material';
import {Link} from 'react-router-dom'; 
import React from 'react'
import {logo} from '../utils/constants';
import {SearchBar} from './index';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={1} sx={{position:'sticky', backgroundColor:'#000',top:0, justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar