// DO NOT DELETE
import * as React from "react";
import { BreedsSelect } from "./BreedsSelect";

const DogListContainer = (props) => {
  const [breeds, setBreeds] = React.useState([])
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(Object.keys(data.message))
        setBreeds(Object.keys(data.message))
      })
  }, [])
  const getBreedsList = (breeds) => {
    return breeds.map(breed => {
      return (<li>{breed}</li>)
    });
  }
  const [selectedBreed, setSelectedBreed] = React.useState("")
  React.useEffect(() => {
    console.log(`test: ${selectedBreed}`)
  }, [selectedBreed])
  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      {getBreedsList(breeds)}
    </div>
  )
}

export { DogListContainer }
