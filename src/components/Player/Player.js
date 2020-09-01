import React from 'react';
import { PlayButton, Timer, VolumeControl, Progress} from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './player.css'

const Player = withCustomAudio(props => {
    return (
      <div className='player-container d-flex flex-row  align-items-center'>
        <div className='d-flex flex-row'>
          <PlayButton {...props}
          className='play-btn'
          />
          <Timer {...props}
          className='player-timer' />
          <VolumeControl
          className='player-volume d-flex flex-row align-items-center'
          buttonClassName='player-volume-icon'
          rangeClassName='player-volume-range'
          {...props}
          />
        </div>
        
        <Progress {...props}
        className= 'progress-wrap'
        innerClassName='progress-inner'
        />
      </div>
    );
  });

export default Player