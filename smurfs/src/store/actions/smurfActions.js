import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMIRFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMIRFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMIRFS_FAILURE'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('Fetch Smirfs Result:', res.data)
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
      
      })
      .catch(err => {
        console.log('Fetch Smurfs Failed:', err)
      })
  }
}