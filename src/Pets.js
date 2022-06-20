// import React from 'react';
import Card from './Card';
import React,{useEffect, useState} from 'react';
import { Client } from "@petfinder/petfinder-js";

import './Pets.css'

export default function Pets(){
 
  
    const secret="KfIfirN6hgXkVV1msv2NZqB35g7l5maHxM1EFZr0"
    const key="7a3rV63q8zXxXUoheRb42GXgDd1FU7r07UznLcjwOSiRapPsbP"
    const client = new Client({apiKey:key , secret: secret});
    
    const getPets  =async()=>{
            const response=await client.animal.search();
            setPets(response.data.animals  )    
            console.log(response.data.animals);
        }
    const[pets,setPets]=useState([]);
    useEffect(()=>{getPets()},[]);

    // const data=[
    //     {
    //         index : 4,
    //         age:"4 months",
    //         image:'Kitty.jpg',
    //         name:"Kitty",
    //         phone:+947630485,
    //         mail:"oscar.le.@mail.com"
    //     },
      
    //     {   index : 0,
    //         image:'Buddy.jpg',
    //         age:"4 months",

    //         name:"Buddy",
    //         phone:+9474035985,
    //         mail:"van.mosley@mail.com"
    //     },
     
    //     {
    //         index : 3,
    //         image:'Fluffy.jpg',
    //         age:"4 months",

    //         name:"Fluffy",
    //         phone:+6930554489,
    //         mail:"john.doe@mail.com"
    //     },
        
    //     {  
    //          index : 1,
    //         image:'cat.png',
    //         age:"4 months",

    //         name:"catty",
    //         phone:+25429903463,
    //         mail:"john.snow@mail.com"
    //     },
    //     {
    //         index : 5,
    //         image:'Jasper.png',
    //         name:"Jasper",
    //         age:"4 months",

    //         phone:+26897054489,
    //         mail:"janiah.olsen@gmail.com"
    //     },
    //     {
    //         index : 2,
    //         image:'Felix.jpg',
    //         age:"4 months",

    //         name:"Felix",
    //         phone:+32048304,
    //         mail:"kelton.watkins@meow.com",
       
    //     },
        
   
    // ];


        function getPetImage(p){
            if(p.primary_photo_cropped!=null){
                if(p.primary_photo_cropped.small!=null)
                    return p.primary_photo_cropped.small;
                if(p.primary_photo_cropped.medium!=null)
                    return (p.primary_photo_cropped.medium)
                if(p.primary_photo_cropped.large!=null)
                    return (p.primary_photo_cropped.large)
                if(p.primary_photo_cropped.large!=null)
                    return (p.primary_photo_cropped.full)

            }else {
                if(p.photos.length!==0){
                   
                        if(p.photos[0].small!=null)
                            return p.photos[0].small;
                        if(p.photos[0].medium!=null)
                            return (p.photos[0].medium)
                        if(p.photos[0].large!=null)
                            return (p.photos[0].large)
                        if(p.photos[0].large!=null)
                            return (p.photos[0].full)
        
                    }
                }
            }
        

    return(

        <div className='pets' id="pets">
            <h1 >Our pets</h1>

        <div className='board'>
            {pets.map((item)=>{

                // console.log(item.name);
    // console.log(item.gender)

                if(getPetImage(item)!=null){
                return( <Card
                    age={item.age}
                    img={getPetImage(item)}
                    name={item.name}
                    phone={item.phone}
                    mail={item.mail}
                    item={item}

                />);
            }}
            
            
        
            )
        }
           
        </div>
        </div>
    )
}