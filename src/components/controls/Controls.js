import React from 'react'
import {connect} from 'react-redux'
import { animateSettings, changeVolumeSize } from '../store/actions/action'
import './controls.css'
import {
    Link
  } from "react-router-dom";

const connector = connect(
    state => ({
        settings: state.controls.settings,
        volume: state.controls.volume
    }),
    dispatch => ({
        animateSettings: value => dispatch(animateSettings(value)),
        changeVolumeSize: value => dispatch(changeVolumeSize(value))
    })
)

const Controls = ({settings, animateSettings, volume, changeVolumeSize}) => {
    function resetLink () {
    }

    return (
        <div className='controls d-flex flex-row align-items-center'>
            <Link to="/game"><span onClick={resetLink}>Библиотека</span></Link>
        </div>
    )
}

export default connector(Controls)