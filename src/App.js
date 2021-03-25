import Ninjas from "./Ninjas";
import {useState} from 'react';
function App() {
  const [ninjas, setNinjas] = useState([
    {name:'fatih',age:22,belt:'blue',id:1},
    {name:'orçun',age:18,belt:'black',id:2}
  ])
  return (
    <div className="App">
      <h2>React - Redux - Axios App</h2>
      <Ninjas ninjas={ninjas}/>
    </div>
  );
}

export default App;
