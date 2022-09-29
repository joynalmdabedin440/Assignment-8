import React from 'react';
import './Exercise.css'

const ExerciseType = (props) => {
   
    const { name, age, time, picture } = props.servise; 
    return (
        <div>
            <div class="col">
                <div class="card card-fit">
                    <img src={picture} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <h6>For Age: {age}</h6>
                        <h6>Time Required: {time }</h6>
                        
                    </div>
                    <div>
                        <button onClick={()=>props.clickHandle(props.servise)} className='btn btn-primary w-100 h-100'>Add To List</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ExerciseType;