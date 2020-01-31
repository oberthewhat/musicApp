import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  card: {
    minWidth: 230,
    margin: 8,
    paddingLeft: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    width: 200,
  }
});

const VolumeCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Master Volume
        </Typography>
      </CardContent>
      <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Volume
      </Typography>
      <Slider
        onChange={props.handleSlider}
        defaultValue={50}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
    
    </div>
    </Card>
  );
}

export default VolumeCard