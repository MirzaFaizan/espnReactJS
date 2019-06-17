import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop:'2%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  console.log(props.from)
  return (
    <form className={classes.container} noValidate >
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue={props.from}
        className={classes.textField}
        helperText="Please select From Date"
        variant='outlined'
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e=>props.setFrom(new Date(e.target.value))}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue={props.to}
        variant='outlined'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        helperText="Please select To Date"
        onChange={e=>props.setTo(new Date(e.target.value))}
      />
    
    </form>
  );
}
