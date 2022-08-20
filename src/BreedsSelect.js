// DO NOT DELETE
import * as React from "react";

const BreedsSelect = (props) => {
  const handleChange = (e) => {
    props.setSelectedBreed(e.target.value)
    console.log(props.selectedBreed)
  }
  return (
    <div>
      <select
        onChange={(e) => handleChange(e)}
        value={props.selectedBreed}
      >
        <option value="">all</option>
        {props.breeds.map((breed) => {
          return (
            <option value={breed}>
              {breed}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export { BreedsSelect }
