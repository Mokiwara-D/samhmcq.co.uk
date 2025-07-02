import './SearchOptions.css'
import flightHotel from '../../assets/images/flightHotel.svg'
import city from '../../assets/images/city.svg'
import pkg from '../../assets/images/pkg.svg'
import { useState } from 'react'

const SearchOptions = () => {
  //Temp selection state
  const [selectedOption, setSelectedOption] = useState('flightHotel')
  return (
    <div className="search-bar__options">
      <button
        className={selectedOption === 'flightHotel' ? 'selected' : ''}
        onClick={() => setSelectedOption('flightHotel')}>
        <img src={flightHotel} alt="Flight & Hotel" />
        <span>Flight & Hotel</span>
      </button>
      <button
        className={selectedOption === 'city' ? 'selected' : ''}
        onClick={() => setSelectedOption('city')}>
        <img src={city} alt="City Breaks" />
        <span>City Breaks</span>
      </button>
      <button
        className={selectedOption === 'package' ? 'selected' : ''}
        onClick={() => setSelectedOption('package')}>
        <img src={pkg} alt="Package Holidays" />
        <span>Package Holidays</span>
      </button>
    </div>
  )
}

export default SearchOptions