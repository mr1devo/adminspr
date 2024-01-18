import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {Buffer} from 'buffer';
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Hotel from './Hotel';

const HotelView = () => {
    var [hotel,setHotel] = useState([]);
    var[selected,setSelected] = useState();
    var [update,setUpdate] =useState(false)
    useEffect(()=>{
    axios.get("http://localhost:4005/hview")
    .then(response =>{
    console.log(response.data)
    setHotel(response.data) })
    .catch(err=>console.log(err))
    },[])

    //delete
    const deleteValues=(id)=>{
        console.log("deleted",id)
        axios.delete("http://localhost:4005/hremove/"+id)
        .then((response)=>{
            alert("Deleted")
            //to reload window
            window.location.reload(false);
        })
    }

      
    //update
    const updateValues = (value) =>{
        console.log("updated:",value)
        setSelected(value);
        setUpdate(true);
        }

var result=
    <div>
    <Typography variant='h5'>Hotel
    Details</Typography><br></br>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
    <TableRow>
    <TableCell>Hotel Name</TableCell>
    <TableCell>Things to see</TableCell>
    <TableCell>Photo</TableCell>
    <TableCell>Location</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {hotel.map((value,index)=>{
    return(
    <TableRow key={index}>
    <TableCell>{value.hotelname}</TableCell>
    <TableCell>{value.htsee}</TableCell>
    <TableCell>  <img src={`data:image/jpeg;base64,${Buffer.from(value.hotelphoto.data)}`} width="50" height="50" alt='Error' />   </TableCell>
    <TableCell>{value.hlocation}</TableCell>
    <TableCell><ModeEditIcon color='success' onClick={()=>updateValues(value)}/></TableCell>
    <TableCell><DeleteForeverIcon color='error' onClick={()=>deleteValues(value.id)}/></TableCell>
    </TableRow>
    )
    })}
    </TableBody>
    </Table>
    </TableContainer>
    </div>

 
if(update){
    result=<Hotel data={selected} method='put'/>}
  return (result)
   
}

 

export default HotelView