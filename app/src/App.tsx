import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Planet} from "./components/Planet/Planet";

function App() {
  const [planets, setPlanets] = useState<any[]>([])

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/celestial-bodies`)
        .then((res) => res.json())
        .then((data) => setPlanets(data))
        .catch(error => {
          console.error('There was an unexpected error: ', error);
        });
  }, []);

  return (
      <div className="App">
        <Header title="The Solar System"/>
        <div className={"planet-wrapper"}>
          {planets.map(planet => (
              <Planet
                  key={planet.id}
                  name={planet.name}
                  picture={planet.picture}
                  age={planet.age}
                  mass={planet.mass}
              />
          ))}
        </div>
      </div>
  );
}

export default App;
