import React, { useEffect, useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import ScreenGrid from '../components/ScreenGrid';
import Header from './ToxicHeader';
import ToxicCard from './ToxicCard';
import Dhruv from './Images/Dhruv.png';
import Kevin from './Images/Kevin.png';
import Matt from './Images/Matt.png';
import Mo from './Images/Mo.jpg';
import { type } from 'os';

function ToxicTraitsPage() {


  type ToxicPerson = {
    firstName: string;
    lastName: string;
    toxicTraits: string[];
    imagePath: string;
  };

  const [toxics, setToxics] = useState<ToxicPerson[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/api/toxicperson/all',
        );
        const jsonData = await response.json();
        setToxics(jsonData);
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      }
    };
    fetchData();
  }, []);

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
        {toxics.map((person) => (
          <ToxicCard
            name={person.firstName+" "+person.lastName}
            toxicTraits={person.toxicTraits}
            imagePath={person.imagePath}
          />
        ))}
      </Box>
    </div>
  );
}

export default ToxicTraitsPage;
