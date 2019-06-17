import React, {useState,useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import ticketmaster from 'ticketmaster';
import Date from './components/home/dateSearch.jsx';
import SportsSearch from './components/home/sportsSearch.jsx';
import { Button } from '@material-ui/core';

export default function App(props) {

  const[loading,loadingSet] = useState(false);
  const[data,dataSet] = useState();
  const [fromDate,fromDateSet] = useState('none');
  const [toDate, toDateSet] = useState('none');
  const [values, setValues] = useState('ALL');
  const [search,setSearch] = useState('Sports')

  function SearchbyDate() {
    setValues('ALL');
    setSearch('Date')  
  }

  function SearchbySports() {
    fromDateSet('none');
    toDateSet('none')
    setSearch('Sports')  
  }
  

  useEffect(() => {
    ticketmaster('Z2PpOOA2YCQTrLHneGGBLTT8cOKhGBBy').discovery.v2.event.all()
    .then(res=>{
      // console.log(res.items)
      if(res){
        dataSet(res.items)
        loadingSet(true);
        
      }
      else{
        console.log('else')
      }
    })
  },[]);

// console.log(data)

  // componentDidMount() {
    // ticketmaster('Z2PpOOA2YCQTrLHneGGBLTT8cOKhGBBy').discovery.v2.event.all()
    // .then(res=>{
      
    //   if(res){
     
    //     loadingSet(true);
    //     dataSet(res.items)
    //   }
    //   else{
    //     console.log('else')
    //   }
    // })
  // }



    if(loading===false){
      return(
        <div>
          <Navbar name='Loading'/>
          <h1>Loading...</h1>
        </div>
      )
    }
    else{
      if(search==='Sports'){
        return(
          <div>
            <Navbar name='Home'/>
              <div style={{padding:'5%'}}>
              <Button onClick={()=>SearchbyDate()} variant='contained'>Search by Date</Button><br/>
              <SportsSearch setValues={setValues} values={values}/>
               <Home data={data} from={fromDate} to={toDate} values={values}/>
              </div>
          </div>
        )
      }
      else{
        return(
          <div>
            <Navbar name='Home'/>
              <div style={{padding:'5%'}}>
              <Button onClick={()=>SearchbySports()}  variant='contained'>Search by Sport</Button><br/>
              <Date from={fromDate} setFrom={fromDateSet} to={toDate} setTo={toDateSet} />
               <Home data={data} from={fromDate} to={toDate} values={values}/>
              </div>
          </div>
        )
      }
    }
}

