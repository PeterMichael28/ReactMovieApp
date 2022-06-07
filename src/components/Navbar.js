const Navbar = (props) => {
    return ( 
        <header>
            <nav>
                <a href="#htt">MMovies</a>
                <form action="" className="form" onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search by title"
                    value={props.value}
                    onChange={props.handleOnchange}
                 />
                 <button className="search-btn">Search</button>
                 </form>
            </nav>
        </header>
     );
}
 
export default Navbar;