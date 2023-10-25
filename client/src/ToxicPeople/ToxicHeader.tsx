import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import React from 'react';
import DMKR from './Images/logo.png';
import FormDialog from './FormDialog';

function Header() {
  return (
    <div
      className="flex w-full"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'center',
        background: 'gray',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
      }}
    >
      <div
        className="Pokemon"
        style={{
          marginLeft: '10px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div
          className="flex items-center p-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '200px',
          }}
        >
          <Link to="/toxic">
            <img
              src={DMKR}
              alt="AirBnB Logo"
              className="w-1/6 h-auto logo"
              width="w00px"
              height="75px"
            />
          </Link>
        </div>
      </div>
      <div
        className="Pokemon"
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <FormDialog Title="ADD" />
        <Button
          variant="contained"
          sx={{
            marginRight: '20px',
            height: '40px',
            fontSize: '20px',
            padding: '25px',
            backgroundColor: 'maroon',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default Header;
