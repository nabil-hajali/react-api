import { useEffect, useState } from "react"

function App() {

  const actresses = 'https://lanciweb.github.io/demo/api/actresses/';
  const actors = 'https://lanciweb.github.io/demo/api/actors/';
  const [actor, setActor] = useState([]);
  fetch(actresses)
  .then(res => res.json())
  .then(actress => {
    console.log(actress);
    
  })
  .catch(error => {
    console.error(error);
  })

  fetch(actors)
  .then(res => res.json())
  .then(actors => {
    console.log(actors);
    
  })
  .catch(error => {
    console.error(error);
  })
 

  return (
    <>
  
    </>
  )
}

export default App
