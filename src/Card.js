import React,{useState} from 'react';
import Btn from './Btn.js';
import './Card.css'



export default function Card(props){
    
    // console.log(`localhost:7000/${props.img}`)
    return(
        <div className='card'>
            <img src={props.img}alt={props.name}/>
           <div className='info'>
                <h3 className='info-text'>
                    {props.name}
                </h3>
                <h3 >
                    Age : {props.age}
                </h3>
                <h3 >
                    Status : {props.item.status}
                </h3>
                
           </div>

      
            <div className='buttons'>
            <Btn
            item={props.item}
            img={props.img}
            image={props.image}
            text="Details"
            className="btn-details"
            />
             <Btn
            item={props.item}
            img={props.img}
            image={props.image}
            text="Adopt"
            className="btn-adopt"
            />
            </div>
        </div>
    );
}
