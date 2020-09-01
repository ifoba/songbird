import { Round, Bird_Info, Change_List, Change_List_Correct, RoundEnd, Default_Round, Default_Style, Animate_Settings, Volume_Size, Score, Incorrect, Change_Game} from "../actionCreators/action";

export function changeRound(value) {
    return { 
        type: Round,
        round: value + 1
    };
}
export function changeRoundEnd(value) {
    return { 
        type: RoundEnd,
        value
    };
}

export function changeCurrentBird(value) {
    return {
        type: Bird_Info,
        value
    }
}

export function changeListStyle(value, obj) {
    obj[value] = true;
    return {
        type: Change_List,
        value: obj
    }
}

export function changeListStyleCorrect(value, obj) {
    obj[value] = 'correct';
    return {
        type: Change_List_Correct,
        value: obj
    }
}

export function defaultRound() {
    return {
        type: Default_Round
    }
}

export function defaultStyle(value) {
    return {
        type: Default_Style,
        value
    }
}

export function animateSettings(value) {
    return {
        type: Animate_Settings,
        value
    }
}

export function changeVolumeSize(value) {
    return {
        type: Volume_Size,
        value
    }
}

export function changeScore(value) {
    return {
        type: Score,
        value
    }
}

export function changeIncorrect(value) {
    return {
        type: Incorrect,
        value
    }
}

export function changeGameEnd(value) {
    return {
        type: Change_Game,
        value
    }
}