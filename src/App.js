import './App.css';
import { useState } from 'react';

const App = () => {
  
  const [sum, setSum] = useState("");
  const buttons = ["0", "1","2", "3","4", "5","6", "7","8", "9","+", "-","/", "C","="];
 
 
  const handleClick = (btnPress) =>{
    //show it in the display
    //updaye the stateFunction setSum
    setSum(sum + btnPress);
  };



  return (
    <div className="App">
       <h1>Calculator</h1>  
       <h3 class="display">SUM: {sum}</h3>
    <div>
      {buttons.map((button, index) => {
        return (
          <button key={index} className="buttonBox" onClick={() => handleClick(button)}>{button}</button>
      )
      
      })}
    </div>
    </div>
  );
}

export default App;
