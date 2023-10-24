import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ScreenGrid from '../components/ScreenGrid';
import Header from './ToxicHeader';
import ToxicCard from './ToxicCard';
import Dhruv from './Images/Dhruv.png';
import Kevin from './Images/Kevin.png';
import Matt from './Images/Matt.png';
import Mo from './Images/Mo.jpg';

type ToxicCardProps = {
  name: string;
  toxicFact: string;
  toxicTraits: string;
  imagePath: string;
};

function ToxicTraitsPage({
  name,
  toxicFact,
  toxicTraits,
  imagePath,
}: ToxicCardProps) {
  return (
    <div className="App">
      <Header />
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'left',
          flexWrap: 'wrap',
          backgroundColor: 'white',
          marginTop: '20px',
        }}
      >
        <img src={imagePath} width="30%" alt="Toxic Person" />
        <Box
          sx={{
            width: '70%',
            padding: '30px',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="maroon"
            fontWeight="bold"
            fontSize="40px"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="maroon"
            fontWeight="bold"
            fontSize="20px"
          >
            {name}&apos;s most concerning toxic trait is: {toxicFact}
          </Typography>
          <Typography variant="body2" color="maroon">
            However, you should also be worried when hanging out with this
            person because: {toxicTraits}
          </Typography>
          <Box marginTop="60px">
            <Typography
              variant="h5"
              component="div"
              color="maroon"
              fontWeight="bold"
              fontSize="20px"
            >
              DMK&apos;s Tips on Dealing with Toxic People
            </Typography>
            <Typography variant="body2" color="maroon">
              1. If you see a toxic person walking around, DO NOT approach them
            </Typography>
            <Typography variant="body2" color="maroon">
              2. Call the police immediately and perhaps order some tazers to
              Amazon Commons
            </Typography>
            <Typography variant="body2" color="maroon">
              3. If that toxic person is cute though you could totally go talk
              to them
            </Typography>
            <Typography variant="body2" color="maroon">
              4. Be prepared for what you are getting yourself into!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ToxicTraitsPage;
