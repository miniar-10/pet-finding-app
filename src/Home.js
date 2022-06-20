import Pets from './Pets'
import  './Home.css'

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
        <button type="submit">Search</button>
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
        </div>
    );
};

