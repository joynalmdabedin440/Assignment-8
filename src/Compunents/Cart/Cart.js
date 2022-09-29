import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    
    return (
        <div className='cart'>
            <header className='headers'>
                <img src="https://scores.iplt20.com/ipl/playerimages/538-small.png" alt="" />
                <h4 className='ms-2'>Jonayed <br /><small>Sylhet,Bangladesh</small></h4>
            </header>
            <div className='info p-1 mt-4'>
                <div><h4 className='d-inline'>75</h4>kg <br />weight</div>
                <div><h4 className='d-inline'>6.5</h4> <br />Height</div>
                <div><h4 className='d-inline'>25</h4>yrs <br />Age</div>
            </div>
            <div className='break'>
                <h4>Add A Break</h4>
                <div className='break-time'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <h4>Exercise Details</h4>
            <div className='exercise-time mt-4 '>
                <h4>Exercs.Time</h4>
                <p>00 seconds</p>
            </div>
            <div className='exercise-time mt-4'>
                <h4>Break Time</h4>
                <p>00 seconds</p>
            </div>

            <button className='btn btn-primary w-100 mt-5'>Activity Completed</button>
        </div>
    );
};

export default Cart;