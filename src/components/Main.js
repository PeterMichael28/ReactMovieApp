const Main = ({ dat, i}) => {

    return ( 
        <main>
            <div className="cont" key={i}>
            <img src={dat.Poster} alt="ok" />
            <h2>{dat.Title}</h2>
            <div className="texts">
            <p>Type: <span>{dat.Type}</span></p>
            <p>Year: <span>{dat.Year}</span></p>
            </div>
            </div>
        </main>
     );
}
// "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg"
export default Main;