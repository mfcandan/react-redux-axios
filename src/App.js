import Ninjas from "./Ninjas";
import {useState} from 'react';
function App() {
  const [ninjas, setNinjas] = useState([
    {name:'fatih',age:25,belt:'blue'},
    {name:'orçun',age:30,belt:'black'}
  ])
  return (
    <div className="App">
      <h2>React - Redux - Axios App</h2>
      <Ninjas ninjas={ninjas}/>

    </div>
  );
}

export default App;
