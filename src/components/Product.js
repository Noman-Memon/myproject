import React from 'react'

export default function Product() {
  //   const products = ['Laptop', 'Phone', 'Modem', 'Computer']
  const products = [
    { id: 1, name: 'Laptop', price: 500 },
    { id: 2, name: 'Phone', price: 200 },
    { id: 3, name: 'Modem', price: 150 },
    { id: 4, name: 'Laptop', price: 900 },
  ]
  const fruits = ['Apple', 'Mango', 'Banana']
  return (
    <div>
      {products.map((Product, i) => (
        <h3 key={Product.id}>
          {i} {/* {Product} */}
          {Product.name} {Product.price}
        </h3>
      ))}
      {fruits.map((fruit, i) => (
        <h3 key={i}>
          {i} {/* {Product} */}
          {fruit}
        </h3>
      ))}
    </div>
  )
}
