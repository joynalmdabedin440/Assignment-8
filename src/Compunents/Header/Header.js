import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header container'>
            <FontAwesomeIcon className='font' icon={faDumbbell}></FontAwesomeIcon>
            <h1>Body-Building-Club</h1>
       </nav>
    );
};

export default Header;