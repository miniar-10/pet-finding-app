import React,{useState, useEffect}  from 'react';
import {BrowserRouter  ,Routes ,Route,Link}from 'react-router-dom'
import HomePage from './Home'
import Pets from '../components/Pets';
import './App.css';
import AddPet from '../pages/AddPets';
import logo from '../stories/assets/logo.png'
import facebook from '../stories/assets/facebook-icon.png'
import twitter from '../stories/assets/linkedin-icon.png'
import linkedin from '../stories/assets/twitter-icon.png'
import About from '../components/About';
import QuizStart from '../components/QuizStart';
import Question from '../components/Question';
import Footer from '../components/Footer';

/*
To get a token from Petfinder api:
  curl -d "grant_type=client_credentials&client_id=7a3rV63q8zXxXUoheRb42GXgDd1FU7r07UznLcjwOSiRapPsbP&client_secret=KfIfirN6hgXkVV1msv2NZqB35g7l5maHxM1EFZr0" https://api.petfinder.com/v2/oauth2/token
*/

function Navbar(){
  const [Mobile,setMobile]=useState(false);
    return(
      <BrowserRouter>
        <div className='my-app'>
          <nav className="nav-bar">
          <img src={logo} alt="logo"></img>
          <ul className={Mobile?'list-for-mobile':'list-for-web'}onClick={()=>setMobile(false)}>
            <li ><Link to="/">Home</Link ></li>
            <li><Link to="/pets">Pets</Link></li>
            <li><Link to="/addPet">Add pet</Link></li>
            <li><Link to="/about">About </Link></li>
          </ul>
          <button className='toggle-btn' onClick={()=>setMobile(!Mobile)}>
                    {Mobile?<i class="fa fa-times" aria-hidden="true"></i>:<i class="fa fa-bars" aria-hidden="true"></i>}
          </button>
          <div>
            <button className='log login-btn'>Login</button>
            <button className='log'>Sign in</button>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/pets' element={<Pets/>}></Route>
          <Route exact path='/addPet' element={<AddPet/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/question' element={<Question/>}></Route>


        </Routes>

      </div>
    </BrowserRouter>
  );
}

// function Footer(){
//   return(
//     <div className='footer'>
//           <div className='social-media'>
//               <img src={facebook} alt='facebook'/>
//               <img src={linkedin} alt='linkedin'/>
//               <img src={twitter} alt='twitter'/>

//           </div>
//           <p className='copy-rights'>&copy; PetLovers all rights reserved </p>
//     </div>
//   );
// }


function App() {
  return (  
    <div className="App">
      <Navbar/>
      <Footer/>

    </div>
  );
}

export default App;
