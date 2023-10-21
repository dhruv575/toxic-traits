import { Typography, Button } from '@mui/material';

import React from 'react';

function Header() {
  return (
    <div
      className="flex w-full"
      style={{
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'center',
        height: '60px',
        background: 'aqua',
        opacity: '80%',
      }}
    >
      <div
        className="Pokemon"
        style={{
          marginLeft: '30px',
          marginRight: '30px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '30px',
            fontFamily: 'Nunito',
          }}
        >
          DMK Toxic Traits!
        </Typography>
      </div>
      <div
        className="Pokemon"
        style={{
          marginLeft: '30px',
          marginRight: '30px',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: 'Nunito',
            color: 'black',
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default Header;
