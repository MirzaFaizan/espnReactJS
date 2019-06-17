import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import SportsSearch from './sportsSearch.jsx';
// import DateSearch from './dateSearch.jsx';

import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
      },
  table: {
    minWidth: 750,
  },
}));


function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };


export default function CustomizedTables(props) {
  const classes = useStyles();

// console.log(new Date(props.data[0].dates.start.dateTime))
// console.log(props.data[0].dates.start.localDate)
// if(props.from <= props.data[0].dates.start.localDate || props.to >=props.data[0].dates.start.localDate){
//     console.log('FOUND')
// }
// console.log(props.to)
console.log(new Date(props.data[0].dates.start.dateTime))
// // console.log(props.from - (new Date(props.data[0].dates.start.localDate)))
// console.log(props.to - (new Date(props.data[0].dates.start.localDate)))
// console.log(props.data)
  const [dataTemp] = useState(props.data)
//   const [values, setValues] = useState('ALL');


if(props.from!=='none' && props.to!=='none'){
    return(
      <Paper elevation={0}>
      <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
    <Table className={classes.table}  size="small">
      <TableHead>
        <TableRow>
          <StyledTableCell>Matchup</StyledTableCell>
          <StyledTableCell>&nbsp;</StyledTableCell>
          <StyledTableCell >Time</StyledTableCell>
          <StyledTableCell >NAT&nbsp;TV</StyledTableCell>
          <StyledTableCell >Tickets</StyledTableCell>
          <StyledTableCell >Location</StyledTableCell>
          <StyledTableCell >Buy Ticket</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataTemp.map((row,key) => {
         if((props.from-(new Date(props.data[key].dates.start.localDate)))<=0 && (props.to-(new Date(props.data[key].dates.start.localDate))))
         {
        return(
          <StyledTableRow key={key}>
          <StyledTableCell>
           <Typography variant='caption'> {row.name} </Typography>
          </StyledTableCell>
          <StyledTableCell >
          <Typography variant='caption'> <b>at</b> &nbsp; {row.dates.timezone} </Typography>
          </StyledTableCell>
          <StyledTableCell > <Typography variant='caption'>
          {tConv24(props.data[key].dates.start.localTime)}
          </Typography>
          </StyledTableCell>
          <StyledTableCell >&nbsp;</StyledTableCell>
          <StyledTableCell >{
               dataTemp[key].priceRanges !== undefined  ? (  <Typography variant='caption'> {'Tickets as Low as ' + row.priceRanges[0].min} </Typography>) : ( <Typography variant='caption'>N/A</Typography>) 
          }</StyledTableCell>
          <StyledTableCell ><Typography variant='caption'>{row._embedded.venues[0].name}</Typography></StyledTableCell>
          <StyledTableCell ><Typography variant='caption'><a href={row.url} style={{textDecoration:'none'}} >Buy</a></Typography></StyledTableCell>
        </StyledTableRow>
        )  
         } 
         else{
             return(
              <StyledTableRow key={key}></StyledTableRow>
             )
         }
         
      })}
      </TableBody>
    </Table>
  </Paper>
  </div>
  {/* </Container> */}
  </Paper>

    )
}
else{
    if(props.values==='ALL'){
        return (
            <Paper elevation={0}>
                {/* <SportsSearch setValues={props.setValues} values={props.values}/> */}
            
                <div className={classes.root}>
                <Paper className={classes.paper} elevation={0}>
              <Table className={classes.table}  size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Matchup</StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell >Time</StyledTableCell>
                    <StyledTableCell >NAT&nbsp;TV</StyledTableCell>
                    <StyledTableCell >Tickets</StyledTableCell>
                    <StyledTableCell >Location</StyledTableCell>
                    <StyledTableCell >Buy Ticket</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTemp.map((row,key) => (
                    <StyledTableRow key={key}>
                      <StyledTableCell>
                       <Typography variant='caption'> {row.name} </Typography>
                      </StyledTableCell>
                      <StyledTableCell >
                      <Typography variant='caption'> <b>at</b> &nbsp; {row.dates.timezone} </Typography>
                      </StyledTableCell>
                      <StyledTableCell > <Typography variant='caption'>
                      {tConv24(props.data[key].dates.start.localTime)}
                      </Typography>
                      </StyledTableCell>
                      <StyledTableCell >&nbsp;</StyledTableCell>
                      <StyledTableCell >{
                           dataTemp[key].priceRanges !== undefined  ? (  <Typography variant='caption'> {'Tickets as Low as ' + row.priceRanges[0].min} </Typography>) : ( <Typography variant='caption'>N/A</Typography>) 
                      }</StyledTableCell>
                      <StyledTableCell ><Typography variant='caption'>{row._embedded.venues[0].name}</Typography></StyledTableCell>
                      <StyledTableCell ><Typography variant='caption'><a href={row.url} style={{textDecoration:'none'}} >Buy</a></Typography></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            </div>
            {/* </Container> */}
            </Paper>
          
          );
      }
      else if(props.values==='NFL'){
        return (
            <Paper elevation={0}>
            {/* <SportsSearch setValues={props.setValues} values={props.values}/> */}
           
                {/* <Container> */}
                <div className={classes.root}>
                <Paper className={classes.paper} elevation={0}>
              <Table className={classes.table}  size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Matchup</StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell >Time</StyledTableCell>
                    <StyledTableCell >NAT&nbsp;TV</StyledTableCell>
                    <StyledTableCell >Tickets</StyledTableCell>
                    <StyledTableCell >Location</StyledTableCell>
                    <StyledTableCell >Buy Ticket</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTemp.map((row,key) => {
                    //   console.log(row.classifications[0].subGenre.name)
                      if(row.classifications[0].subGenre.name==='NFL'){
                        return(
                            <StyledTableRow key={key}>
                            <StyledTableCell>
                             <Typography variant='caption'> {row.name} </Typography>
                            </StyledTableCell>
                            <StyledTableCell >
                            <Typography variant='caption'> <b>at</b> &nbsp; {row.dates.timezone} </Typography>
                            </StyledTableCell>
                            <StyledTableCell > <Typography variant='caption'>
                            {tConv24(props.data[key].dates.start.localTime)}
                            </Typography>
                            </StyledTableCell>
                            <StyledTableCell >&nbsp;</StyledTableCell>
                            <StyledTableCell >{
                                 dataTemp[key].priceRanges !== undefined  ? (  <Typography variant='caption'> {'Tickets as Low as ' + row.priceRanges[0].min} </Typography>) : ( <Typography variant='caption'>N/A</Typography>) 
                            }</StyledTableCell>
                            <StyledTableCell ><Typography variant='caption'>{row._embedded.venues[0].name}</Typography></StyledTableCell>
                            <StyledTableCell ><Typography variant='caption'><a href={row.url} style={{textDecoration:'none'}} >Buy</a></Typography></StyledTableCell>
                          </StyledTableRow>
                          )
                      }
                      else{
                          return (
                            <StyledTableRow key={key}></StyledTableRow>
                          )
                      }
                 
               
                  }
                  )}
                </TableBody>
              </Table>
            </Paper>
            </div>
            {/* </Container> */}
            </Paper>
          
          );
       
      }
      else if(props.values==='MLB'){
        return (
            <Paper elevation={0}>
          {/* <SportsSearch setValues={setValues} values={values}/> */}
        
                <div className={classes.root}>
                <Paper className={classes.paper} elevation={0}>
              <Table className={classes.table}  size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Matchup</StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell >Time</StyledTableCell>
                    <StyledTableCell >NAT&nbsp;TV</StyledTableCell>
                    <StyledTableCell >Tickets</StyledTableCell>
                    <StyledTableCell >Location</StyledTableCell>
                    <StyledTableCell >Buy Ticket</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTemp.map((row,key) => {
                      if(row.classifications[0].subGenre.name==='MLB'){
                        return(
                            <StyledTableRow key={key}>
                            <StyledTableCell>
                             <Typography variant='caption'> {row.name} </Typography>
                            </StyledTableCell>
                            <StyledTableCell >
                            <Typography variant='caption'> <b>at</b> &nbsp; {row.dates.timezone} </Typography>
                            </StyledTableCell>
                            <StyledTableCell > <Typography variant='caption'>
                            {tConv24(props.data[key].dates.start.localTime)}
                            </Typography>
                            </StyledTableCell>
                            <StyledTableCell >&nbsp;</StyledTableCell>
                            <StyledTableCell >{
                                 dataTemp[key].priceRanges !== undefined  ? (  <Typography variant='caption'> {'Tickets as Low as ' + row.priceRanges[0].min} </Typography>) : ( <Typography variant='caption'>N/A</Typography>) 
                            }</StyledTableCell>
                            <StyledTableCell ><Typography variant='caption'>{row._embedded.venues[0].name}</Typography></StyledTableCell>
                            <StyledTableCell ><Typography variant='caption'><a href={row.url} style={{textDecoration:'none'}} >Buy</a></Typography></StyledTableCell>
                          </StyledTableRow>
                          )
                      }
                      else{
                          return(
                            <StyledTableRow key={key}></StyledTableRow>
                          )
                      }
               
                  }
                  )}
                </TableBody>
              </Table>
            </Paper>
            </div>
           
            </Paper>
          
          );
      }
}
   
}
