import React from 'react'

const Services = () => {
  const servicesUsers =() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
        <h2> This is a services</h2>
        <h3>This is users Api</h3>
        <button onClick={servicesUsers}>Fetch</button>
    </div>
  )
}

export default Services