import React from 'react'
import {connect} from 'react-redux'
import birdsData from '../data/data'
import { changeRound, defaultRound, defaultStyle, changeIncorrect, changeGameEnd } from '../store/actions/action'
import Player from '../Player/Player'

const connector = connect(
    state => ({
        round:state.game.round,
        currentBird: state.game.currentBird,
        nextBtn: state.game.roundEnd,
    }),
    dispatch => ({
        updateRound: value => dispatch(changeRound(value)),
        defaultRound: () => dispatch(defaultRound()),
        defaultStyle: (value) => dispatch(defaultStyle(value)),
        changeIncorrect: (value) => dispatch(changeIncorrect(value)),
        changeGameEnd: (value) => dispatch(changeGameEnd(value))
    })
)
const ExampleInfo = ({round, updateRound, currentBird, nextBtn, defaultStyle, defaultRound, changeIncorrect, changeGameEnd}) => {
const dataBirds = (birdsData[round][currentBird]) ? birdsData[round][currentBird] : {};
let visibility = '';
if (Object.keys(dataBirds).length === 0) {
    visibility = ' hidden'
}else {
    visibility = ' '
}
const change = () => {
    if (round < 5) {
    updateRound(round);
    defaultStyle({
        nextBtn: false,
        list: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
        }
    });
    changeIncorrect(0)
    defaultRound();
    }else {
        changeGameEnd(true)
    }
 
}   
    if (dataBirds) {
        return(
            <div className={"example-info card d-flex flex-column flex-md-column flex-lg-row flex-sm-column" + visibility}>
                <img className = 'card-img-top example-info-img' src={dataBirds.image} alt="bird"></img>
                <div className='card-body'>
                    <h5 className="card-title">{dataBirds.name} </h5>
                    <p>{dataBirds.species}</p>
                    <Player
                    streamUrl={dataBirds.audio}
                    preloadType="metadata"
                    />
                    <p className="card-text">{dataBirds.description}</p>
                    <button onClick={change} disabled={!nextBtn} className="btn btn-primary next-round-btn">Далее</button>
                </div>
            </div>
        )
    }else {
        return null
    }
}

export default connector(ExampleInfo)