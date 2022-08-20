// DO NOT DELETE

import * as React from 'react'
import axios from 'axios'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/redbone/n02090379_4138.jpg")
  const getDogUrl = async () => {
    await axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data.message)
        setDogUrl(response.data.message)
      })
  }
  return (
    <div>
      <header><h1>DogApp</h1></header>
      <main>
        <img src={dogUrl} />
      </main>
      かわいい犬を眺めましょう
      <div>
        <button onClick={() => getDogUrl()}>next</button>
      </div>
    </div>
  )
}
