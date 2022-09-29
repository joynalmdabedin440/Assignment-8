import React, { useEffect, useState } from 'react';
import ExerciseType from '../ExerciseType/ExerciseType';
import './Servises.css'
const Servises = () => {
    const [servises, setServises] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])
    return (
        
        <div className='servises-container container'>
            <div className='servise-container '>
                <h3>Select today's exercise task from below</h3>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    servises.map(servise => <ExerciseType
                    
                    ></ExerciseType>)  
                }
               </div>
            </div>

            <div className="cart-container">

            </div>

        </div>
    );
};

export default Servises;