// DO NOT DELETE
import * as React from "react";

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
  return (
    <div>
      {getBreedsList(breeds)}
    </div>
  )
}

export { DogListContainer }
