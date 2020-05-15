import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../store/actions/smurfActions.js'

const SmurfCard = props => {
  useEffect(()=>{
    props.fetchSmurfs()
  }, [])

  return(
    <div>
      <h1>Smurf Card!</h1>
    </div>
  )
}

export default connect(null, {fetchSmurfs})(SmurfCard)