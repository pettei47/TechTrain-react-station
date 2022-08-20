// DO NOT DELETE
import * as React from "react";

const BreedsSelect = (props) => {
  return (
    <div>
      <select
        onChange={(e) => {
          props.setSelectedBreed(e.target.value)
          console.log(props.selectedBreed)
        }}
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
