import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='container'>
            <div className='blog'>
                <h2>How does React work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='blog'>
                <h2>Difference between props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
            <div className='blog'>
                <h2>Usage of useEffect in React</h2>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
            </div>
        </div>
    );
};

export default Question;