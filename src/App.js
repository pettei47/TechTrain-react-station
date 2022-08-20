// DO NOT DELETE

import * as React from 'react'
import axios from 'axios'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  // const getDogUrl = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then(data => {
  //       setDogUrl(data.message)
  //     })
  // }
  return (
    <div>
      <Header cssClass='header'/>
      <main>
        <Description
          description='かわいい犬を眺めましょう'
          button='next dog'
        />
      </main>
    </div>
  )
}
