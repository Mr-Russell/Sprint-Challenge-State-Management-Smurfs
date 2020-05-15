import React, {useEffect} from 'react'
import SmurfCard from './SmurfCard'
import SmurfForm from './SmurfForm'
import {connect} from 'react-redux'
import {fetchSmurfs} from '../store/actions/smurfActions.js'

const Smurfs = props => {
  useEffect(()=>{
    props.fetchSmurfs()
  }, [])
  console.log('Smurfs:',props.smurfs)
  return(
    <div>
      {props.smurfs.map(item => <SmurfCard smurf={item}/>)}
      <SmurfForm />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfReducer.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs)