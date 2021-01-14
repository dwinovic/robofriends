import React, { useState, useEffect } from "react";
import CardList from "../components/CardList"; 
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'

function App() { 

  const [ robots, setRobots ] = useState([]);
  const [ searchfield, setSearchfield ] = useState('');
  const [ count, setCount ]  = useState(0);

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))

      console.log(count);
  }, [count])

  const onSearchChange = (e) => { 
    searchfield(e.target.value) 
  } 
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }) 
    
    return (
      <div className="tc">
        <h1 className="f1"> Robofriends </h1> 
        <SearchBox searchChange={onSearchChange} />
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }


export default App;
