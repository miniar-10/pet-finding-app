import React from "react";
import './Pets.css'


function PetImage({image}){
    return<img className="pet-image-quiz-result" src={image} alt="the pet"></img>
}

export default function QuizResult({score,name,nb_questions,image}){
    console.log(name)
    switch(nb_questions-score-1){
        case 0:
            return<div>
                    <PetImage
                    image={image}
                    />
                    <h1>
                        It seems {name} is the right one for you !
                    </h1>
                    <h5>
                        Congrats , he is your new best friend now
                    </h5>
                    <h5>
                        We will call you in few hours for confirmation
                    </h5>

                </div>
        case 1:
            return<div>
                 <PetImage
                    image={image}
                    />
                    <h1>
                        It seems you and {name} magically match !
                    </h1>
                    <h5>
                        Congrats , he is your new best friend now
                    </h5>
                    <h5>
                        We will call you in few hours for confirmation
                    </h5>

                </div>
        case 2:
            return<div>
                     <PetImage
                    image={image}
                    />
                    <h1>
                        It seems you and {name} match !
                    </h1>
                    <h5>
                        Congrats , he is your new best friend now
                    </h5>
                    <h5>
                        We will call you in few hours for confirmation
                    </h5>

                </div>
        default :
            return<div>
                <PetImage
                    image={image}
                />
                <h1>
                    It seems {name} is not the right one for you !
                </h1>
                <h5>We're sorry ,but for safety reasons , you can't adopt it</h5>
                <h5>It will be better for you both to pick up another pet</h5>

            </div>
    }
    
}