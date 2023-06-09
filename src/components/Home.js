import React from 'react'

const Home = () => {
const fetchingApi =() =>{
  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => console.log(json))
}


  return (
    <div>
      <h1>Use fetch Api</h1>
      <h3>This is comments </h3>
      <button onClick={fetchingApi}>Fetch Api</button>
    </div>
  )
}

export default Home