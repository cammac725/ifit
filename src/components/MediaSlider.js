import React from 'react';
import GearJunkie from '../assets/logos/gear-junkie-logo.svg';
import Wired from '../assets/logos/wired-logo.svg';
import Mashable from '../assets/logos/mashable-logo.svg';

function MediaSlider() {
  return (
    <div className="media-slider">
      
      <div className="media-card">
        <img className="media-logo" src={GearJunkie} alt="Gear Junkie logo" />
        <p>"You focus on putting in the work, and the technology handles the rest."</p>
      </div>
      <div className="media-card">
        <img className="media-logo" src={Wired} alt="wired logo" />
        <p>"Literally transports you from home to wherever you choose to run."</p>
      </div>
      <div className="media-card">
        <img className="media-logo" src={Mashable} alt="Mashable logo" />
        <p>"Breathes new life into a tired, old running routine."</p>
      </div>
      
    </div>
  )
}

export default MediaSlider;