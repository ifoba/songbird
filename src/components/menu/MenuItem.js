import React from "react"
import {connect} from 'react-redux'

const connector = connect(
    state => ({
        round:state.game.round
    })
)

const MenuItem = ({name, index, round}) => {
    let active = ''
    if (index === round) {
        active = ' activated'
    }
    return (
    <span className={'list-group-item menu-item' + active}>{name}</span>
    )
}

export default connector(MenuItem)