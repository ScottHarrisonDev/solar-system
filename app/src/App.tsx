import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Planet} from "./components/Planet/Planet";
import {ErrorMessage} from "./components/ErrorMessage/ErrorMessage";
import {PlanetInterface} from "./Interfaces/PlanetInterface";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [planets, setPlanets] = useState<PlanetInterface[]>([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/celestial-bodies?page=1&perPage=10`)
        .then((res) => {
          if (! res.ok) {
            res.text().then(error => {
              setError(`API Error ${error}`);
            });
          }
          return res.json();
        })
        .then((data) => setPlanets(data))
        .catch(() => {
          setError("There was an unexpected error");
        });
  }, []);

  return (
      <div className="App">
        <Header title="The Solar System"/>
        {error !== null &&
          <ErrorMessage message={error} />
        }
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
