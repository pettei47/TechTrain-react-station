// DO NOT DELETE
import * as React from "react";

const BreedsSelect = (props) => {
  const handleChange = async (e) => {
    await props.setSelectedBreed(e.target.value)
    console.log(props.selectedBreed)
  }
  return (
    <div>
      <select
        onChange={(e) => handleChange(e)}
      >
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
