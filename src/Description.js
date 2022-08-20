// DO NOT DELETE
import React from "react"
import { DogImage } from "./DogImage"
import axios from "axios"

const Description = (props) => {
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
    <main>
      <DogImage url={dogUrl} />
    </main>
    {props.description}
    <div>
      <button onClick={() => getDogUrl()}>{props.button}</button>
    </div>
  </div>
  )
}

export { Description }
