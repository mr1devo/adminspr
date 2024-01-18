import React, { useState } from 'react';
import './Restra.css'; // Import the CSS file
//import Hotel from './Hotel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const Restra = () => {
  var [inputs,setInputs]=useState({"restraname":'',"rtsee":'',"rlocation":''})
  var [selectedimage,setSelectedimage] = useState(null);
   
  const navigate = useNavigate();


  const inputHandler = (e) => {
    const {name,value}=e.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.restraphoto=file;
}

// const savedata =()=>{
//   const formdata = new FormData();
//   formdata.append('restraname',inputs.restraname);
//   formdata.append('rtsee',inputs.rtsee);
//   formdata.append('restraphoto',selectedimage);
//   formdata.append('rlocation',inputs.rlocation);

//   fetch('http://localhost:4005/Restra',
//   {method:'post',body:formdata,})
//   .then((response)=>response.json())
//   .then((data)=>{
//       alert("record saved")
//   })
//   .catch((err)=>{
//      console.log("error")
//   })
//   navigate('/RestraView')
// }


  const addHandler =() =>{
    console.log("Clicked")
    console.log(inputs)
    axios.post("http://localhost:4005/rnew",inputs)
    .then((response) =>{
      alert("record saved")
    })
    .catch(err=>console.log(err))
  }
//navigate('/PlaceView');
  // const [placename, setPlaceName] = useState('');
  // const [thingsToSee, setThingsToSee] = useState('');
   const [rphotos, setRphotos] = useState([]);
   const [rlocation, setRlocation] = useState('');
  // const [showHotel, setShowHotel] = useState(false);


  return (
    <div className='p'>
      <Typography variant='h5'>Add 
Restaurant</Typography><br></br>
<TextField id="outlined-basic" label="Restaurants"
variant="outlined"
name="restraname" value={inputs.restraname}
onChange={inputHandler} />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Things to see"
variant="outlined"
name="rtsee" value={inputs.rtsee}
onChange={inputHandler} />
<br></br>
<br></br>
{/* <TextField id="outlined-basic" label="photos"
variant="outlined"
name="photos" value={inputs.photos}
onChange={inputHandler} /> */}
<input
            type="file"
            multiple
            onChange={handleimage}
            
          />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Location"
variant="outlined" name="rlocation" value={inputs.rlocation}
onChange={inputHandler} />
<br></br>
<br></br>
<Button variant='contained' color='success'
onClick={addHandler} >NEXT</Button>
 </div>
  );
};


export default Restra
