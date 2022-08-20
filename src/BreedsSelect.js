// DO NOT DELETE
import * as React from "react";

const BreedsSelect = (props) => {
  const handleChange = (e) => {
    const value = e.target.value
    props.setSelectedBreed(value)
    console.log(props.selectedBreed)
  }
  return (
    <div>
      <select
        onChange={(e) => handleChange(e)}
      >
        <option value="all">all</option>
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
