import Pets from '../components/Pets'


import  './Home.css'
import About from '../components/About';

function SearchBar  () {
    return(
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button className='btn-search' type="submit">Search</button>
    </form>
);
}
function Landing(){
    return(
        <div>
            <div className='landing'>
                <SearchBar/>
            </div>
            <Pets/>
            
        </div>
    );
}


export default function HomePage(){
    return(
        <div className='Home'>
            <Landing/>
            <About/>
        </div>
    );
};

