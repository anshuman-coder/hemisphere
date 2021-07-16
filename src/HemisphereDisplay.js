import React from 'react';
import  "./Hemisphere.css";
import NH from './images/NorthernHemisphere.jpg';
import SH from './images/SouthernHemisphere.jpg';


const hemisphereConfig = {
  Northern: {
    text: 'It is northern hemisphere',
    picture: NH
  },
  Southern: {
    text: 'It is southern hemisphere',
    picture: SH
  }
}

function HemisphereDisplay({ latitude }) {

  

  const hemisphere = latitude > 0 ? 'Northern' : 'Southern'

  const { text, picture } = hemisphereConfig[hemisphere]

  return (
    <div className={hemisphere} >
			<div className='ui raised text container segment'>
				<div className='image'>
					<img src={picture} alt="hemisphere picture"/>
				</div>
				<div className='ui teal bottom attached label'>
					<h1>{ text }</h1>
				</div>
			</div>
		</div>
  )
}

export default HemisphereDisplay
