import React from 'react'
import './About.css'
export default function About(){
return(
    <div className='about'>
        <h1>    Who are we ? </h1>
        <div className='about-board'>
        <div className='about-div about-div-image'></div>
        <div className='about-div about-div-text'>
            <h4>A community of pets lovers </h4>
            <p>
            We come from a wide variety of backgrounds; students and teachers, clubs and civic leaders, young and old. And, we have one thing in common: a commitment to saving pets from being homeless.So we came out with the idea of creating a pet adoptionplatform.We are 100% volunteers and 100% pet lovers
            </p>
            <h4> What do we provide ?</h4>
                <p>

                You know that Each year, a great nulber of  dogs and cats are killed every year because shelters are too full and there aren’t enough adoptive homes.
                So we came with this idea of aplattforms that provides connection between pets owners who doesn't wnat to keep their pets and people who want to adopt them : instead of putting their pets in the street or giving it to a shelter , the owner can donate his pet for adoption .He simply should full a form and we will take the responsibility to post it .Meanwile , an adopter can pick up one of them to take care of it .
                </p>
        </div>
        </div>


    </div>
);
}