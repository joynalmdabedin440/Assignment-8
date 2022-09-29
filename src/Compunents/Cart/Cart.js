import React, { useState } from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Cart = ({ cart }) => {
    let total = 0;

    const notify = () => toast('Congratulation You Complete All Task');

    for (const time of cart) {
        total=total+time.time
        
    } 
    const [time,setTime]=useState([])
    
    const addTime = (value,id) => {
        
        localStorage.setItem(id, value);
        console.log(localStorage.getItem(id));
        setTime(localStorage.getItem(id));

    }

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
            <ToastContainer/>
            <div className='break'>
                <h4>Add A Break</h4>
                <div className='break-time'>
                    <button onClick={()=>addTime(10,1)}>10s</button>
                    <button onClick={()=>addTime(20,2)}>20s</button>
                    <button onClick={()=>addTime(30,3)}>30s</button>
                    <button onClick={()=>addTime(40,4)}>40s</button>
                    <button onClick={()=>addTime(50,5)}>50s</button>
                </div>
            </div>
            <h4>Exercise Details</h4>
            <div className='exercise-time mt-4 '>
                <h4>Exercs.Time</h4>
                <p>{total} seconds</p>
            </div>
            <div className='exercise-time mt-4'>
                <h4>Break Time</h4>
                <p><span>{time}</span> seconds</p>
            </div>

            <button onClick={notify} className='btn btn-primary w-100 mt-5'>Activity Completed</button>
        </div>
    );
};

export default Cart;