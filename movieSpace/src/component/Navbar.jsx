import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <NavLink to="/">
                    <img src="\assests\streaming movie.webp" alt="logo" className='logo-size' />
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Navbar