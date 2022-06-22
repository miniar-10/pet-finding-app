import React,{useState ,useEffect} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Pets.css'


export default function Question(props){
  //console.log(props)
  const [value, setValue] = React.useState('');
 
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const calcScore=(question_number,pet)=>{
    if(question_number===0&&value!==pet.pet.species){
      props.setScore(props.score-1)
    }else  if(question_number===1 &&value==="My family" && !pet.pet.attributes.house_trained){
      props.setScore(props.score-1)
    }else  if(question_number===3 &&value!==pet.pet.gender){
      props.setScore(props.score-1)
    }else if(question_number===4 &&value==="No"&&!pet.pet.attributes.special_needs){
      props.setScore(props.score-1)

    }
    console.log(props.score)

  }



    return(
      
      <div className="question quiz-card">
          <FormControl>
            <FormLabel >{props.question.question}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue=""
              name="radio-buttons-group"
              onChange={handleChange}
            >
              {props.question.choices.map((item)=>{
                const key=item
                return(<FormControlLabel value={item} control={
                  <Radio
                  sx={{
                    color: '#17122d',
                    '&.Mui-checked': {
                      color: '#17122d',
                    }}}
                  
                  />} label={item} />);
              })
            }
            </RadioGroup>
          </FormControl>
          <button className="card-btn" onClick={()=>{
            if(value!==''){
              console.log(value);

              props.setCurrentQuestion(props.currentQuestion+1)
              console.log(props.currentQuestion)
              calcScore(props.currentQuestion,props.pet)
              setValue('');

            } else{
            }
          }}
            >
              Submit</button>
    </div>

);
}