import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const MovieDetails = () => {


    const { id } = useParams();

    const [singleMovie, setSingleMovie] = useState("");

    const getSingleData = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=d839676&i=${id}`);
        console.log('single-data', data);
        setSingleMovie(data?.data);

    };

    useEffect(() => {
        getSingleData();
    }, [id]);

    return (
        <div className=' container-fluid'>
            <div className='row px-4 my-4'>
                <div className='col-4'>
                    <div>
                        <img src={singleMovie?.Poster} alt={singleMovie?.Title} className='single-poster' />
                    </div>

                </div>
                <div className='col-12'>
                    <div>
                        <h2 className='text-light '> {singleMovie?.Title}</h2>
                    </div>
                    <div>
                        <p className='text-light text-gray '> {singleMovie?.Plot}</p>
                    </div>

                    <div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Rating</p>
                        <p className='m-0  font-size-14 text-yellow p-1 px-2  rounded card-bg  ' > <span><i className="fa-solid fa-star font-size-12"></i> </span> {singleMovie?.imdbRating
                        } </p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Awards</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Awards} </p>
                    </div>

                    <div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Country</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Country} </p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Language</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Language} </p>
                    </div>

                    <div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Gener:</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Genre} </p>
                    </div>

                    < div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Actors</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Actors} </p>
                    </div>

                    < div className='mt-2'>
                        <p className='text-gray m-0 fs-5'> Runtime</p>
                        <p className='m-0 text-light font-size-14' >{singleMovie?.Runtime} </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MovieDetails