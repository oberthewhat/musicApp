import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme=> ({
  card: {
    minWidth: 230,
    margin: 8,
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const QualityCard = (props) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);



  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sound Quality
        </Typography>
        <Typography variant="body2" component="p">
          Manually control the sound quality when you have poor internet service
        </Typography>
      </CardContent>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Quality
        </InputLabel>
        <Select
          labelWidth={labelWidth}
          onChange={props.handleQuality}
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
}

export default QualityCard
