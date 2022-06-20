import  Radio  from "@material-ui/core/Radio";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from "react";
import './AddPets.css'
export default function addPet(){
return(
    // <div style={{
    //     margin: 'auto',
    //     display: 'block',
    //     width: 'fit-content'
    //   }}>
    //     <h3>How to use Radio Component in ReactJS?</h3>
    //     <FormControl component="fieldset">
    //     <FormLabel component="legend">Select Your Gender</FormLabel>
    //     <RadioGroup aria-label="gender" name="gender1">
    //       <FormControlLabel value="male" control={<Radio />} label="Male" />
    //       <FormControlLabel value="female" control={<Radio />} label="Female" />
    //       <FormControlLabel value="other" control={<Radio />} label="Other" />
    //     </RadioGroup>
    //   </FormControl>
    //   </div>
   // <div className="add-pet">
   //    <h1>
   //       Add a pet 
   //    </h1>
   //    <h4>
   //       People want to know somethings about the pets they want to adopt ,So please fill this form in order to help them pick up a pet
   //    </h4>
   //    <form>   
   //       <h3>About the pet :</h3>          
   //    <div className="form-group">
      
   //    <label>Name :</label>
   //    <input type="text" name="name" />
   //    </div>
   //    <div className="form-group">
   //    <label>Age :</label>
   //    <input type="text" name="name" />
   //    </div>
   //    <div className="form-group">
   //    <label>Gender :</label>
   //    <input type="text" name="name" />
   //    </div>
   //    <div className="form-group">
   //    <label>declawed ?</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>house_trained ?</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>Shots_current? </label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>spayed_neutered?</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>pecial_needs ?</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>Upload a photo for your pet  :</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <h3>About you</h3>
   //    <div className="form-group">
   //    <label>Name :</label>
   //    <input type="text" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>Phone number :</label>
   //    <input type="phone" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>email :</label>
   //    <input type="email" name="name" />
   //    </div>  
   //    <div className="form-group">
   //    <label>Physical adress :</label>
   //    <input type="text" name="name" />
   //    </div>  
      
      
      
   //    <div>
     
   //    </div>
   //    <button className="submit-btn">Submit</button>
 
   //  </form>
   // </div>
   <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to use Radio Component in ReactJS?</h3>
      <FormControl component="fieldset">
      <FormLabel component="legend">Select Your Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>

);
}