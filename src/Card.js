import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import Details from './Details';

import './Card.css'
// import { Button } from '@material-ui/core';




function Btn(props){
    return(
        <Popup  trigger={<button className="card-btn">{props.text}</button>} position="right center">
                <Details
                item={props.item}
                img={props.img}
                />
        </Popup>
    )
}
export default function Card(props){
    
    // console.log(`localhost:7000/${props.img}`)
    return(
        <div className='card'>
            <img src={props.img}alt={props.name}/>
           <div className='info'>
                <h3 >
                    Name : {props.name}
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
