import React from 'react'

const SmurfForm = () => {
  return(
    <form>
      <input
        name='newSmurf'
        type='text'
      ></input>
      
      <br />

      <label>Smurf Age: 
        <input
          name='age'
          type='number'
        ></input>
      </label>

      <br />

      <label>Smurf Height: 
        <input
          name='height'
          type='number'
        ></input>
      </label>
    </form>
  )
}

export default SmurfForm