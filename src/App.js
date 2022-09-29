import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Compunents/Header/Header';
import Servises from './Compunents/Servises/Servises';
import Question from './Compunents/Question/Question';


function App() {
  
  return (
    <div className='body'>
      <Header></Header>
      <Servises></Servises>
      <Question></Question>
      
    </div>
  );
}

export default App;
