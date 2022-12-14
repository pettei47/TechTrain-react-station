// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

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
          button='change top dog'
        />
      </main>
      <DogListContainer />
    </div>
  )
}
