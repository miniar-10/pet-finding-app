import React,{useState} from "react";
import phone from './stories/assets/phone-icon.png'
import mail from './stories/assets/mail-icon.png'
import seeMoreIcon from './stories/assets/more.png'
import seeLessIcon from './stories/assets/less.png'

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
    const[seeMore, setSeeMore]=useState(false);
if(!seeMore)
return( 
   
        <div className="details-pop-up first">
            {/* <div className="properties"> */}
            <img src={seeLessIcon} className="see-less see"
                    alt='see less'></img>
                <div className="txt-properties">
                    <img className="details-image" src={props.img} alt={props.item.name}></img> 

                    <h2 className="details-pet-name dtls">{props.item.name}</h2>
                    <h4 className="h4 dtls">Age : {props.item.age}</h4>
                    <h4 className="h4 dtls">Gender : {props.item.gender}</h4>
                    <h4 className="h4 dtls">Status : {props.item.status}</h4>
                  
                {/* </div>   */}
                    {/* <Contact
                        image={phone}
                        text={props.item.contact.phone}
                    />
                    <Contact
                        image={mail}
                        text={props.item.contact.email}
                    />   */}
                </div>
                <img src={seeMoreIcon} className="see-more see"
                    onClick={()=>{setSeeMore(true)}} alt='see more'></img>
            {/* <button>Adopt</button> */}

        </div>
)
else return(
    <div className="details-pop-up second">
        <img src={seeLessIcon} className="see-less see"
                    onClick={()=>{setSeeMore(false)}} alt='see less'></img>
        <div className="txt-properties">
            <Attributes
                        item ={props.item.attributes}
            /> 
            <Contact
                    image={phone}
                    text={props.item.contact.phone}
            />
            <Contact
                image={mail}
                text={props.item.contact.email}
            />  
            <button className="card-btn details-btn">Adopt</button>
        </div>
        <img src={seeMoreIcon} className="see-more see" alt='see more'></img>
    </div>
    
);
}