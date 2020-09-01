import { Round, Bird_Info, Change_List, Change_List_Correct, RoundEnd, Default_Round, Default_Style, Animate_Settings, Volume_Size, Score, Incorrect, Change_Game} from "../actionCreators/action";
import { combineReducers } from "redux";

const defaultGame = {
    round: 0,
    randomCount: 0,
    roundEnd: false,
    currentBird: '',
    score: 0,
    incorrect: 0,
    gameEnd: false,
}

const defaultStyle = {
    nextBtn: false,
    list: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    }
}

const defaultControls = {
    settings: 0,
    volume: 1.3
}

function game(state = defaultGame, action) {
    switch(action.type) {
        case Round: return { ...state, round: action.round};
        case Bird_Info: return {...state, currentBird: action.value};
        case RoundEnd: return {...state, roundEnd: action.value};
        case Default_Round: return {...state, roundEnd: false, currentBird: ''};
        case Score: return {...state, score: action.value};
        case Incorrect: return {...state, incorrect: action.value};
        case Change_Game: return {...state, gameEnd: action.value};
        default: return state;
    }
}

function style(state = defaultStyle, action) {
    switch (action.type) {
        case Change_List: return {...state, list: action.value }
        case Change_List_Correct: return {...state, list: action.value }
        case Default_Style: return {...state, nextBtn: action.value.nextBtn, list:action.value.list}
        default: return state
    }
    
}

function controls(state = defaultControls, action) {
    switch (action.type) {
        case Animate_Settings: return {...state, settings: action.value}
        case Volume_Size: return {...state, volume: action.value}   
        default: return state
    }
}

const reducer = combineReducers({
    game: game,
    style: style,
    controls: controls,
})
export default reducer