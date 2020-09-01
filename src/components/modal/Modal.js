import React from 'react'
import {connect} from 'react-redux'
import './modal.css'
import { changeGameEnd, defaultRound, defaultStyle, changeRound, changeScore } from '../store/actions/action'

const connector = connect(
    state => ({
        score: state.game.score
    }),
    dispatch => ({
        changeGameEnd: (value) => dispatch(changeGameEnd(value)),
        defaultRound: () => dispatch(defaultRound()),
        defaultStyle: (value) => dispatch(defaultStyle(value)),
        zeroRound: (value) => dispatch(changeRound(value)),
        changeScore: (value) => dispatch(changeScore(value)),
        
    })
)

const Modal = ({score, changeGameEnd, defaultRound, defaultStyle, zeroRound, changeScore}) => {
    function restart() {
        changeGameEnd(false)
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
defaultRound();
zeroRound(-1);
changeScore(0)
    }
    return (
        <div className='modal d-flex justify-content-center flex-column align-items-center'>
            <div className=' modal-window d-flex justify-content-center flex-column align-items-center'>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <span className='modal-text'> Вы набрали</span>
                    <span className='modal-text'>{score} очков</span>
                    <span className='modal-text'>{(score > 29) ? 'Вы набрали маскимум баллов из возможных' : ''}</span>
                </div>
                
            </div>
            <button onClick={restart} className='restart-btn'>{score > 29 ? 'В начало' : 'Еще раз?' }</button>
        </div>
    )
}

export default connector(Modal)