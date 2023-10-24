import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

type ToxicCardProps = {
  name: string;
  toxicFact: string;
  toxicTraits: string;
  imagePath: string;
};
export default function ToxicCard({
  name,
  toxicFact,
  toxicTraits,
  imagePath,
}: ToxicCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'black',
        width: '400px',
        marginBottom: '20px',
      }}
    >
      <CardActionArea href={`/${name}`}>
        <CardMedia
          component="img"
          height="300px"
          width="300px"
          image={imagePath}
          alt="horribly toxic individual"
        />
        <CardContent>
          <Box>
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
              fontSize="14px"
            >
              {toxicFact}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
