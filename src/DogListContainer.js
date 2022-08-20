// DO NOT DELETE
import * as React from "react";
import { BreedsSelect } from "./BreedsSelect";

const DogListContainer = (props) => {
  const [breeds, setBreeds] = React.useState([])
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(Object.keys(data.message))
      })
  }, [])
  const getBreedsList = (_breeds) => {
    return _breeds.map(_breed => {
      return (<li>{_breed}</li>)
    });
  }
  const [selectedBreed, setSelectedBreed] = React.useState("")
  const [selectedBreedImageList, setSelectedBreedImageList] = React.useState([])
  const getSelectedBreedImageList = (_selectedBreed) => {
    if (_selectedBreed === "") {
      return []
    }
    fetch(`https://dog.ceo/api/breed/${_selectedBreed}/images`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`data.message: ${data.message[0]}(type: ${typeof(data.message)})`)
        const _selectedBreedImageList = Object.values(data.message).map((imgUrl) => {
          return (
            <li><img src={imgUrl} /></li>
          )
        })
        setSelectedBreedImageList(_selectedBreedImageList.slice(0,10))
      })
  }
  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button onClick={() => getSelectedBreedImageList(selectedBreed)}>Show</button>
      {selectedBreedImageList}
      {/* getBreedsList(breeds) */}
    </div>
  )
}

export { DogListContainer }
