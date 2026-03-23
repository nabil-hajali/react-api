import { useEffect, useState } from "react"

function App() {

  const actorsApi = 'https://lanciweb.github.io/demo/api/actors/';
  const [actors, setActors] = useState([]);
  const actressesApi = 'https://lanciweb.github.io/demo/api/actresses/';
  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    fetch(actressesApi)
      .then(res => res.json())
      .then(actresses => {
        console.log(actresses);
        setActresses(actresses);
      })
      .catch(error => {
        console.error(error);
      })
  }

  function fetchActors() {
    fetch(actorsApi)
      .then(res => res.json())
      .then(actors => {
        console.log(actors);
        setActors(actors);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(fetchActors, []);
  useEffect(fetchActresses, []);

  return (
    <>

      <header>
        <div>
         
          <h2>Hall of fame</h2>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="card_deck">
            <h1>Actors</h1>
            {actors.map((actor) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={actor.id}>
                <div className="card-body">
                  <img src={actor.image} alt={actor.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{actor.birth_year}</div>
                      <div>{actor.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {actor.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{actor.name}</h3>
                  <div className="card-text">
                    <p>{actors.biography}</p>
                  </div>
                </div>
              </div>
            ))}
            <h1>Actresses</h1>
            {actresses.map((actress) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={actress.id}>
                <div className="card-body">
                  <img src={actress.image} alt={actress.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{actress.birth_year}</div>
                      <div>{actress.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {actress.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{actress.name}</h3>
                  <div className="card-text">
                    <p>{actress.biography}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
