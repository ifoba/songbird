import React from "react"
import dataBirds from '../data/data'
import ExampleItem from './ExampleItem'
import ExampleInfo from './ExampleInfo'
import {connect} from 'react-redux';
import Answer from "./Answer";
import './styles/example.css'




const connector = connect(
    state => ({
      round:state.game.round,
    })
  );
 
const ExampleList = ({round}) => {
  const randomCount = Math.round(Math.random() * 5)
    return (
      <div>
        <Answer dataBirds={dataBirds[round][randomCount]} />
        <div className='d-flex flex-column flex-md-column flex-lg-row flex-sm-column'>
          <div className='list-group example-list' >
              {dataBirds[round].map((el, i)=>{
                  return <ExampleItem dataBirds={el} key={i} count = {randomCount}/>
              })}
          </div>
          <ExampleInfo/>
        </div>  
    </div>
    )
}

export default connector(ExampleList); 