const Navbar = (props) => {
    const { handleOnchange, handleSubmit, value} = props
    return ( 
        <header>
            <nav>
                <a href="#htt">MMovies</a>
                <form action="" className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search by title"
                    value={value}
                    onChange={(event) => handleOnchange(event)}
                 />
                 <button className="search-btn">Search</button>
                 </form>
            </nav>
        </header>
     );
}
 
export default Navbar;