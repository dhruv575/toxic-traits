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
import toxics from './toxics.json';

function ToxicTraitsPage() {
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
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}
      >
        <ToxicCard
          name="Dhruv"
          toxicFact="Favorite game was Pokemon Planet"
          toxicTraits="Fanatical Arsenal fan, Sleeps at 11:30, Collects books as room decorations, Never has breakfast"
          imagePath={Dhruv}
        />
        <ToxicCard
          name="Kevin"
          toxicFact="Goes to Farmer's Markets"
          toxicTraits="Took a gap semester, Probably not an alcoholic, Seems very nice idk what to put here tbh"
          imagePath={Kevin}
        />
        <ToxicCard
          name="Matt"
          toxicFact="Makes Margaritas"
          toxicTraits="Drinks vodka like its water, loses a ton of money in poker, doing job interviews, used to TA ESE 1110"
          imagePath={Matt}
        />
        <ToxicCard
          name="Mohamed"
          toxicFact="Used to be a Goalkeeper"
          toxicTraits="Very tall, Atletico Madrid fan, Teaches a class here, Is a senior, Hasn't gone to class in 3 years"
          imagePath={Mo}
        />
        <ToxicCard
          name="Mohamed"
          toxicFact="Used to be a Goalkeeper"
          toxicTraits="Very tall, Atletico Madrid fan, Teaches a class here, Is a senior, Hasn't gone to class in 3 years"
          imagePath={Mo}
        />
      </Box>
    </div>
  );
}

export default ToxicTraitsPage;
