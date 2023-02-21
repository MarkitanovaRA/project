import React,{useState} from 'react'
import LogIn from './components/LogIn';
import Modal from './components/Modal';




import './styles/App.css';

function App() {

  
  const [modalActive, setModalActive]=useState(true);
 
  return (
    <div className="App">
        
      {/*<LogIn />*/}
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
    
  );
}

export default App;
