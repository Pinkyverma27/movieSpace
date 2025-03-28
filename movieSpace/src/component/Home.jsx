import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [movieAllData, setMovieAllData] = useState([]);
    const [inputvalue, setInputValue] = useState();
    const [searchKeyword, setSearchKeyword] = useState("movie");
    const [isDataAvailable, setIsDataAvailable] = useState(true);

    const getMovieData = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?apikey=d839676&s=${searchKeyword}`);

            if (data?.Response == "True") {
                setMovieAllData(data?.Search);
                setIsDataAvailable(true);
            }
            if (data?.Response == "False") {
                setIsDataAvailable(false);
            }


        } catch (err) {
            console.log("error", err)
        }

    };
    useEffect(() => {
        getMovieData();
    }, [searchKeyword]);

    //  console.log(movieAllData)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSearch = () => {
        setSearchKeyword(inputvalue);
    }

    // console.log('input-value', inputvalue);



    return (

        <>
            <div className='container-fluid'>
                <div className='row px-4'>
                    <div className='col-6'>
                        <div>
                            <h1 > Movie Space </h1>
                            <p className='text-light'> Watch your favorites movie here. </p>
                        </div>

                    </div>
                    <div className='d-flex gap-2'>
                        <div className='search-bar'>
                            <input
                                type="text"
                                className='search-input'
                                placeholder='Search your favourites..'
                                value={inputvalue}
                                onChange={handleInputChange}
                            />
                            <button className='search-button' onClick={handleSearch}>
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>

                </div>

                <div className='row px-4 my-5 row-gap-4 gap-3 justify-content-between footer'>
                    {
                        isDataAvailable ? movieAllData?.map((movie) => {
                            return (
                                <div className='col-2' key={movie?.imdbID}>
                                    <NavLink className={"text-decoration-none"} to={`/movieDetails/${movie?.imdbID}`}>
                                    <div className='card-bg rounded '>
                                        <div >
                                            <img src={movie?.Poster}
                                                alt="movie-cart"
                                                className='movie-card p-2 pb-0' />
                                        </div>
                                        <div className='py-2'>
                                            <p className=' heading-color fs-3 text-center m-0 text-overflow px-2' >{movie?.Title} </p>
                                        </div>
                                    </div>
                                    </NavLink>
                                   
                                </div>
                            )
                        }) : <h1 className='fs-1 text-center text-black'>No Result Found</h1>

                    }


                </div>


            </div>
        </>
    )
}

export default Home