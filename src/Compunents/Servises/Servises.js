import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ExerciseType from '../ExerciseType/ExerciseType';
import './Servises.css'
const Servises = () => {
    const [servises, setServises] = useState([]);
    const [cart,setCart] = useState([]);
   
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])

    const clickHandle = (servise) => {
        const newCart = [...cart,servise];
        setCart(newCart)
        
    }

    return (

        <div className='servises-container container'>
            <div className='servise-container '>
                <h3>Select today's exercise task from below</h3>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
                    {
                        servises.map(servise =>
                            <ExerciseType
                                key={servise.id}
                                servise={servise}
                                clickHandle={clickHandle}
                            ></ExerciseType>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Servises;