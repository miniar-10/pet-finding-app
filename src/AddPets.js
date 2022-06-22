// import  Radio  from "@material-ui/core/Radio";
// import * as React from 'react';
import Button from '@mui/material/Button';
import Radio from "@mui/material/Radio";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import { pink } from '@mui/material/colors';
import React from "react";
import './AddPets.css'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


 function PetsCheckBox() {
   
   const properties =['house trained','declawed','shots_current','spayed_neutered','special_needs']
   
   return (
      
       <div>
         <FormGroup className='pets-check-box'>
         {properties.map((item)=>{
           return <FormControlLabel className='one-check-box'  control={<Checkbox  sx={{
               color: '#efdccb', '&.Mui-checked': {
               color: '#efdccb',
             },}}/>} label={item} 
           />
         })
      }
      {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
      
    </FormGroup>
      </div>
     );
   }



export default function addPet(){
   const genderOptions = ['Male' , 'Female'];
   const ageOptions = ['Baby', 'Young' , 'Adult'];

return(  
   <div className="add-pet">
      <h1 className='form-title' >
         Add a pet 
      </h1>
      <p className='form-description'>
         People want to know somethings about the pets they want to adopt ,So please fill this form in order to help them pick up a pet
      </p>
      <form className='add-pet-form-container'>
   <div className='add-pet-form'>
   
           
         <div className='abt abt-the-pet'>
         <h3>About the pet :</h3>          
      <div className="form-group">      
            <label>Name :</label>
            <input type="text" name="name" />
      </div>
      <Autocomplete className='auto-complete'
            disablePortal
            id="combo-box-"
            options={ageOptions}
            sx={{ width: 300 }}
            renderInput={(params) =>
                <TextField {...params} label="Age" 
                margin="normal"
                //variant="outlined"
                variant="standard"
                />}
      />
      <Autocomplete className='auto-complete'
            disablePortal
            id="combo-box-"
            options={genderOptions}
            sx={{ width: 300 }}
            renderInput={(params) =>
                <TextField {...params} label="Gender" 
                margin="normal"
               //  variant="outlined"
                variant="standard"
                />}
      />
      <PetsCheckBox
      />
      
  
      {/* <div className="form-group">
            <label>Age :</label>
            <input type="text" name="name" />
      </div>
      <div className="form-group">
            <label>Gender :</label>
            <input type="text" name="name" />
      </div> */}
      {/* <div className="form-group">
      <label>declawed ?</label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>house_trained ?</label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>Shots_current? </label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>spayed_neutered?</label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>pecial_needs ?</label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>Upload a photo for your pet  :</label>
      <input type="text" name="name" />
</div> */}
      </div>  
      <div className='abt abt-you'>


      <h3>About you</h3>
      <div className="form-group">
      <label>Name :</label>
      <input type="text" name="name" />
      </div>  
      <div className="form-group">
      <label>Phone number :</label>
      <input type="phone" name="name" />
      </div>  
      <div className="form-group">
      <label>email :</label>
      <input type="email" name="name" />
      </div>  
      <div className="form-group">
      <label>Physical adress :</label>
      <input type="text" name="name" />
      </div>  
      </div>
   </div>
   <button className='btn-search'>Submit</button>
 
    </form>
   </div>
   // <div style={{
   //    margin: 'auto',
   //    display: 'block',
   //    width: 'fit-content'
   //  }}>
   //    <h3>How to use Radio Component in ReactJS?</h3>
   //    <FormControl component="fieldset">
   //    <FormLabel component="legend">Select Your Gender</FormLabel>
   //    <RadioGroup aria-label="gender" name="gender1">
   //      <FormControlLabel value="male" control={<Radio />} label="Male" />
   //      <FormControlLabel value="female" control={<Radio />} label="Female" />
   //      <FormControlLabel value="other" control={<Radio />} label="Other" />
   //    </RadioGroup>
   //  </FormControl>
   //  </div>

);
}