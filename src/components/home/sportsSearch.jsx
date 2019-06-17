import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const eventType = [
    {
        value: 'ALL',
        label: 'ALL',
    },
    {
      value: 'NFL',
      label: 'NFL',
    },
    {
        value: 'MLB',
        label: 'MLB',
      },
  ];
  
  
export default class SportsSearch extends React.Component{
    render() {
        return(
            <TextField
            id="outlined-select-currency"
            select
            label="Select"
            // className={classes.textField}
            value={this.props.values}
            onChange={(e)=>{this.props.setValues(e.target.value)}}
            // SelectProps={{
            //   MenuProps: {
            //     className: classes.menu,
            //   },
            // }}
            helperText="Please select Event Type"
            margin="normal"
            variant="outlined"
          >
            {eventType.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )
    }
}