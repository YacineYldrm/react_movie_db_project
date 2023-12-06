import MovieGallery from "../MovieGallery/MovieGallery";
import data from "./../../data/movieData";
import { useEffect, useState } from "react";
import './Header.scss'

const Header = () => {

    const [movieData, setMovieData] = useState(data);

    // data reset for filter function
    const [resetData, setResetData] = useState(data);

    // get user keyword input 
    const [keyword, setKeyword] = useState('');

    // triggering child component refresh with event state
    const [event, setEvent] = useState(false);

    // sort by year asc
    const sortYearUp = () => {

        setEvent(event => !event)
        setMovieData(movieData.sort((movie1, movie2) => movie1.year - movie2.year))
    }
    
    // sort by year desc
    const sortYearDown = () => {

        setEvent(event => !event)
        setMovieData(movieData.sort((movie1, movie2) => movie2.year - movie1.year))
    }
    
    // sort best rate
    const sortByRate = () => {

        setEvent(event => !event)
        setMovieData(() => movieData.sort((movie1, movie2) => movie2.rate - movie1.rate))
    }

    // sort a -> z
    const sortAtoZ = () => {

        setEvent(event => !event)
        setMovieData(movieData.sort((movie1, movie2) => movie1.title.charAt(0) < movie2.title.charAt(0) ? -1 : 1))
    }
    
    // sort z -> a
    const sortZtoA = () => {

        setEvent(event => !event)
        setMovieData(movieData.sort((movie1, movie2) => movie1.title.charAt(0) > movie2.title.charAt(0) ? -1 : 1))
    }

    // filter by genre
    const filterGenre = (event) => {
        setEvent(event => !event)
        setMovieData([...resetData].filter((movie) => {
            if(movie.genre.includes(event.target.value))
            {
                return movie;
            } 
            else if (event.target.value === "All")
            {
                return movie
            }
        }));
    }

    // filter by keyword
    const keywordSearch = () => {
        setEvent(event => !event)

        // reset movieData for new filter search
        setMovieData(movieData)

        setMovieData([...resetData].filter((movie) => {
            if(movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))
            {
                setKeyword('');
                return movie;
            } 
            else if (movie.director.toLowerCase().includes(keyword.toLowerCase().trim()))
            {
                setKeyword('');
                return movie;
            } 
            else 
            {
                setKeyword('');
            }
        }))
    }
    
    // render header
    return ( 
        <>
        <header>
            <h1>CinéSync</h1>
            <div className="search_input_wrapper">
                <div className="key_search_wrapper">
                    <input 
                    type="text" 
                    id="searchInput" 
                    placeholder="Search by title or director " 
                    onInput={(e) => setKeyword(e.target.value)}
                    value={keyword}/> 
                    <button onClick={keywordSearch}>Search</button>
                </div>
                <div className="all_button_wrapper">
                    <button 
                    onClick={sortYearUp}>Sort by Year Ascending</button>
                    <button 
                    onClick={sortYearDown}>Sort by Year Descending</button>
                    <button 
                    onClick={sortByRate}>Best Rate</button>
                    <button 
                    onClick={sortAtoZ}>A-Z</button>
                    <button 
                    onClick={sortZtoA}>Z-A</button>
                    <select 
                    name="genres" 
                    id="selectInput" 
                    defaultValue={1} 
                    onChange={filterGenre}>
                        <option value={1} disabled >Search by Genre</option>
                        <option value="All">All genres</option>
                        <option value="Drama">Drama</option>
                        <option value="Crime">Crime</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Biography">Biography</option>
                        <option value="History">History</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Western">Western</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Music">Music</option>
                        <option value="Family">Family</option>
                        <option value="Horror">Horror</option>
                        <option value="War">War</option>
                        <option value="Film-Noir">Film-Noir</option>
                    </select>
                </div>
            </div>
        </header>
        {/* render MovieGallery (child) component. pass props */}
        <MovieGallery movieData={movieData}  />
        </>
    );
}

export default Header;