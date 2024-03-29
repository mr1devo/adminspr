import { TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';

const Studentview = () => {
    var[students,setstudents]= useState([]);
    var[selected,setSelected]= useState();
    var[update,setUpdate]= useState(false);


  useEffect(()=>{
    axios.get("http://localhost:4005/sview")
    .then(response =>{
        console.log(response.data)
        setstudents(response.data)
    })
    .catch(err=>console.log(err))
  },[])


const deletevalues =(id)=>{
     console.log("deleted",id)
     axios.put("http://localhost:4005/updatestatus/"+id)
     .then((response)=>{
        alert("DELETED")
        window.location.reload(false);
     })

    }
const updatevalues =(value)=>{
      console.log("Updated",value); 
      setSelected(value);
      setUpdate(true); 
}





var result=
<div>
<Typography>TOURIST PLACES</Typography><br/>
<TableContainer>
  <table>
      <TableHead>
          <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
              
          </TableRow>
      </TableHead>
      <TableBody>
          {students.map((value,index)=>{
              return(
                  <TableRow key={index}>
                      <TableCell></TableCell>
                      <TableCell>{value.Admno}</TableCell>
                      <TableCell>{value.Sname}</TableCell>
                      <TableCell>{value.Age}</TableCell>
                      <TableCell>{value.Status}</TableCell>
                      <TableCell><EditIcon color='success' onClick={()=>updatevalues(value)}></EditIcon></TableCell>
                      <TableCell><DeleteIcon color='error' onClick={()=>deletevalues(value._id)}></DeleteIcon></TableCell>
                      
                  </TableRow>
              )
          })
          }
      </TableBody>
  </table>
</TableContainer>
</div>

if (update) {
  result=<Studentedit data={selected} method='put'/>
}
  
  return (result)
}

export default Studentview

