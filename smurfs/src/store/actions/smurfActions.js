import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMIRFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMIRFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMIRFS_FAILURE'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('Fetch Smurfs Result:', res.data)
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data[0]})
      
      })
      .catch(err => {
        console.log('Fetch Smurfs Failed:', err)
        dispatch({type: FETCH_SMURFS_FAILURE})
      })
  }
}

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const postSmurf = smurf =>{
  return dispatch =>{
    dispatch({type: POST_SMURF_START})
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res =>{
        console.log('Post New Smurf Result:', res.data)
        dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err =>{
        console.log('Psot Smurf Error:', err)
        dispatch({type: POST_SMURF_FAILURE})
      })
  }
} 