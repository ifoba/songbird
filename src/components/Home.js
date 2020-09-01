import React from 'react';
import {
    Link
  } from "react-router-dom";


const Home = () => {
    return  (
        <div className='start-page d-flex  flex-column justify-content-center align-items-center'>
                <h1 className='start-logo'>SONGBIRD</h1>
                <p className='start-text'>Вы спросите зачем? Затем!</p>
                <Link to="/game">
                    <button className='start-btn'>К игре</button>
                </Link>
        </div>
    )
}

export default Home