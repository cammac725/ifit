import React from 'react';
import Image_1_1 from '../assets/images/img-1-1.png';
import Image_1_2 from '../assets/images/img-1-2.png';
import Image_1_3 from '../assets/images/img-1-3.png';
import Image_1_4 from '../assets/images/img-1-4.png';
import Image_2_1 from '../assets/images/img-2-1.png';
import Image_2_2 from '../assets/images/img-2-2.png';
import Image_2_3 from '../assets/images/img-2-3.png';
import Image_2_4 from '../assets/images/img-2-4.png';

function DesktopLibrary() {
  return (
    <div className='desktop-lib'>
      <div className="cards-row">
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_1_1} alt="Woman by river holding oars" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_1_2} alt="Woman in workout gear holding banana like a phone" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_1_3} alt="Woman on rowing machine" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_1_4} alt="Smiling man in a rowing shell on a lake" />
          </div>
          <div className="card-data">
          </div>
        </div>
      </div>
      <div className="cards-row">      
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_2_1} alt="Crowd watching rowing regatta 8-person boat" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_2_2} alt="Woman working out on rower with colored lights" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_2_3} alt="3 rowers in rowing shell on river" />
          </div>
          <div className="card-data">
          </div>
        </div>
        <div className="lib-card">
          <div className="card-img">
            <img src={Image_2_4} alt="Man working out on rowing machine" />
          </div>
          <div className="card-data">
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopLibrary;