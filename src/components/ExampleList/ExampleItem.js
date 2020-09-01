import React from "react"
import {connect} from 'react-redux';
import {changeRound, changeCurrentBird, changeListStyle, changeListStyleCorrect, changeRoundEnd, changeIncorrect, changeScore} from "../store/actions/action";
import correctAudio from './audio/correct.mp3';
import incorrectAudio from './audio/wrong.mp3';

const connector = connect(
    state => ({
      round:state.game.round,
      current: state.game.currentBird,
      roundEnd: state.game.roundEnd,
      list: state.style.list,
      incorrect: state.game.incorrect,
      score: state.game.score
    }),
    dispatch => ({
      updateRound: value => dispatch(changeRound(value)),
      changeRoundEnd: value => dispatch(changeRoundEnd(value)),
      changeCurrentBird: value => dispatch(changeCurrentBird(value)),
      changeListStyle: (value, obj) => dispatch(changeListStyle(value, obj)),
      changeListStyleCorrect: (value, obj) => dispatch(changeListStyleCorrect(value, obj)),
      changeIncorrect: (value) => dispatch(changeIncorrect(value)),
      changeScore: (value) => dispatch(changeScore(value)),
    })
  );
const ExampleItem = ({dataBirds, count, changeCurrentBird, list, roundEnd, changeRoundEnd, incorrect, changeIncorrect, score, changeScore}) => {
  const audio = new Audio(correctAudio)
  let active = '';
  if (list[dataBirds.id] === 'correct') {
    active = ' correct'
  }else if (list[dataBirds.id]) {
    active = ' answered'
  }
  
    function check() {
      if(roundEnd) {
        changeCurrentBird(dataBirds.id - 1)
      }else if (dataBirds.id - 1 !== count) {   
        changeCurrentBird(dataBirds.id - 1);
        changeListStyle(dataBirds.id, list);
        changeIncorrect(incorrect + 1);
        audio.src = incorrectAudio
        audio.play()
      }
      else {
        changeCurrentBird(dataBirds.id - 1)
        changeListStyleCorrect(dataBirds.id, list);
        changeRoundEnd(true);
        changeScore(score + 5 - incorrect);
        audio.src = correctAudio
        audio.play()
      }
    }

    return (
    <span onClick={check} className={'list-group-item example-item' + active}>{dataBirds.name}</span>
    )
}

export default connector(ExampleItem)