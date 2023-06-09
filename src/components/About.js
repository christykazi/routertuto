import React from 'react'

const About = () => {
  const todoAbout =() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
        <h2> This is my about page</h2>
        <h3>This is todo Api</h3>
        <button onClick={todoAbout}>Fetch</button>
    </div>
  )
}

export default About