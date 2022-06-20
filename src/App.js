import React  from 'react';
import {BrowserRouter  ,Routes ,Route,Link}from 'react-router-dom'
import HomePage from './Home'
import Pets from './Pets';
import './App.css';
import AddPet from './AddPets';
import logo from './stories/assets/logo.png'

/*
To get a token from Petfinder api:
  curl -d "grant_type=client_credentials&client_id=7a3rV63q8zXxXUoheRb42GXgDd1FU7r07UznLcjwOSiRapPsbP&client_secret=KfIfirN6hgXkVV1msv2NZqB35g7l5maHxM1EFZr0" https://api.petfinder.com/v2/oauth2/token
*/

function Navbar(){
    return(
      <BrowserRouter>
        <div className='my-app'>
          <nav className="nav-bar">
          <img src={logo} alt="logo"></img>
          <ul>
            <li ><Link to="/">Home</Link ></li>
            <li><Link to="/pets">Pets</Link></li>
            <li><Link to="/addPet">Add pet</Link></li>
            <li><a href="about">About</a></li>
          </ul>
          <div>
            <button>Login</button>
            <button>Sign in</button>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/pets' element={<Pets/>}></Route>
          <Route exact path='/addPet' element={<AddPet/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (  
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
