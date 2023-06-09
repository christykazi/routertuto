import React from 'react'

const Emergencies = () => {
  const emergenciesAlbums =() =>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
        <h2>This is an emegency page</h2>
        <h3>this is albums Api</h3>
        <button onClick={emergenciesAlbums}>Fetch</button>

    </div>
  )
}

export default Emergencies