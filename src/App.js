import Arrays from './Arrays'
import Objects from './Objects'
import {useState} from 'react'

function App() {
  
  const [counter, setCounter] = useState(0);

  const handleIcrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {

  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      {/* <Arrays /> */}
      {/* <Objects /> */}
      {/* <h1> {counter}</h1> */}
        <button onClick={handleIncrement}> + </button>
        <button onClick={()=> {setCounter(counter-1)}}> - </button>
          <br />
          <button onClick={()=> {setCounter(0)}}>reset</button>
    </div>
  );
}

export default App;
