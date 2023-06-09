import React from 'react'

const Products = () => {
  const productsPhotos =() =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
        <h2> this is a product page</h2>
        <h3>This is photos Api</h3>
        <button onClick={productsPhotos}>Fetch</button>
    </div>
  )
}

export default Products