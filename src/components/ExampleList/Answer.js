import React from 'react';
import { connect } from 'react-redux';
import Player from '../Player/Player';

const connector = connect(
    state => ({
        roundEnd: state.game.roundEnd,
        score: state.game.score
    })
)
const Answer = ({dataBirds, roundEnd, score}) => {
    return (
        <div className="answer card d-flex flex-row">
            <img className="card-img-top answer-img" src={(roundEnd) ? dataBirds.image : 'https://cs10.pikabu.ru/post_img/2018/12/10/12/1544474243177341561.jpg'} alt="bird" />
            <div className='card-body'>
                <h5 className="card-title">{(roundEnd) ? dataBirds.name: 'Отгадайте птицу по звучанию'}</h5>
                <Player
                streamUrl={dataBirds.audio}
                preloadType="metadata"
                />
            </div>
            <div className='score'>Ваши очки: {score}</div>
            
        </div>
    )
}

export default connector(Answer);