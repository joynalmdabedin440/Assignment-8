import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <header className='headers'>
                <img src="https://scores.iplt20.com/ipl/playerimages/538-small.png" alt="" />
                <h4 className='ms-2'>Jonayed <br /><small>Sylhet,Bangladesh</small></h4>
            </header>
            <div>
                <h4>Add A Break</h4>
                <div className='break-time'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <h1>selected item:{cart.length}</h1>
        </div>
    );
};

export default Cart;