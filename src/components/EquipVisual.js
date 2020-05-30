import React from 'react'
import Treadmills from '../assets/images/treadmills.png';
import Bikes from '../assets/images/bikeperson.png';
import Ellipticals from '../assets/images/ellipticalperson.png';
import Strength from '../assets/images/strength.png';

function EquipVisual() {
  return (
    <div className="equip-visual">
      <h1 className="equip-title">Interested in our exciting iFit-enabled equipment?</h1>

      <div className='equipment'>
        <div className="equipment-card">
          <img src={Treadmills} alt="Woman running uphill on treadmill" />
          <p>Treadmills</p>
        </div>
        <div className="equipment-card">
          <img src={Bikes} alt="Man riding stationary bike" />
          <p>Bikes</p>
        </div>
        <div className="equipment-card">
          <img src={Ellipticals} alt="Woman on elliptical trainer" />
          <p>Ellipticals</p>
        </div>
        <div className="equipment-card">
          <img src={Strength} alt="Man working out on weight machine" />
          <p>Strength</p>
        </div>
      </div>
    </div>
  )
}

export default EquipVisual;