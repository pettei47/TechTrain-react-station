// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/redbone/n02090379_4138.jpg")
  // setDogUrl("https://images.dog.ceo/breeds/redbone/n02090379_4138.jpg")
  return (
    <div>
      <header><h1>DogApp</h1></header>
      <main>
        <img src={dogUrl} />
      </main>
      かわいい犬を眺めましょう
    </div>
  )
}
