import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../store/actions/smurfActions.js'

const blankForm = {
  name: '',
  age: '',
  height: ''
}

const SmurfForm = props => {
  const [formValues, setFormValues] = useState(blankForm)

  const submitSmurf = e => {
    e.preventDefault()
  
    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: formValues.height,
    }
  
    props.postSmurf(newSmurf)
    setFormValues(blankForm)
  }

  const inputChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFormValues({...formValues, [name]: value})
  }

  return(
    <form onSubmit={submitSmurf}>
      <h3>Add A New Smurf!</h3>

      <label>Smurf Name:
        <input
          name='name'
          type='text'
          value={formValues.name}
          onChange={inputChange}
        ></input>
      </label>
      
      <br />

      <label>Smurf Age: 
        <input
          name='age'
          type='number'
          value={formValues.age}
          onChange={inputChange}
        ></input>
      </label>

      <br />

      <label>Smurf Height: 
        <input
          name='height'
          type='number'
          placeholder='In Centimeters (cm)'
          value={formValues.height}
          onChange={inputChange}
        ></input>
      </label>
     
      <br />

      <input
        name='submit'
        type='submit'
        value='Add Smurf!'
      ></input>
    </form>
  );
};

export default connect(null, {postSmurf})(SmurfForm);