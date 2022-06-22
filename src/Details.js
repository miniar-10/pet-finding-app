import React from "react";
import phone from './stories/assets/phone-icon.png'
import mail from './stories/assets/mail-icon.png'
import './Details.css'

function Attributes(props){
   // console.log(props.item.house_trained)
        return(
        <div className="attribute-item">
            {/* <h3>Attributes :</h3> */}
             <h4 className="h4">
                declawed : {(props.item.declawed? 'yes' :'no')} 
            </h4>
            <h4 className="h4">
                house_trained :{(props.item.house_trained? 'yes' : 'no ')} 
            </h4> 
            <h4 className="h4">
                shots_current :{(props.item.shots_current? 'yes' : 'no ')} 
            </h4>
           <h4 className="h4">
                spayed_neutered :{(props.item.spayed_neutered? 'yes' : 'no ')} 
            </h4> 
           
             <h4 className="h4">
                special_needs :{(props.item.special_needs? 'yes' : 'no ')} 
            </h4> 
           
           
           
        </div>);

}
function Contact(props){
    return(
        <div className='contact'>
            <img src={props.image} alt=""></img>
            <h3>{props.text}</h3>
        </div>
    )
    }
export default  function Details(props){
    // console.log(props.item.attributes)
return(
        <div className="details-pop-up">
            <div className="properties">
                <div className="txt-properties">
                    <h2>{props.item.name}</h2>
                    <h4 className="h4">Age : {props.item.age}</h4>
                    <h4 className="h4">Gender : {props.item.gender}</h4>
                    <h4 className="h4">Status : {props.item.status}</h4>
                    <Attributes
                        item ={props.item.attributes}
                    />
                </div>  
                <Contact
                    image={phone}
                    text={props.item.contact.phone}
                />
                <Contact
                    image={mail}
                    text={props.item.contact.email}
                />  
                <button>Adopt</button>
            </div>
            <img className="details-image" src={props.img} alt={props.item.name}></img> 
        </div>
)
}