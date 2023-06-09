import React from 'react'

const Contact = () => {
  const postContact =() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
        <h2>this is a contact page</h2>
        <h3>This holds the post Api</h3>
        <button onClick={postContact}> Click me</button>
    </div>
  )
}

export default Contact