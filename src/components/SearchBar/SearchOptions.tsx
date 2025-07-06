import styles from './SearchOptions.module.css'
import flightHotel from '../../assets/images/flightHotel.svg'
import city from '../../assets/images/city.svg'
import pkg from '../../assets/images/pkg.svg'
import { useState } from 'react'

const SearchOptions = () => {
  //Temp selection state
  const [selectedOption, setSelectedOption] = useState('flightHotel')
  return (
    <div className={styles.options}>
      <button
        className={selectedOption === 'flightHotel' ? styles.selected : ''}
        onClick={() => setSelectedOption('flightHotel')}>
        <img src={flightHotel} alt="Flight & Hotel" />
        <span>Flight & Hotel</span>
      </button>
      <button
        className={selectedOption === 'city' ? styles.selected : ''}
        onClick={() => setSelectedOption('city')}>
        <img src={city} alt="City Breaks" />
        <span>City Breaks</span>
      </button>
      <button
        className={selectedOption === 'package' ? styles.selected : ''}
        onClick={() => setSelectedOption('package')}>
        <img src={pkg} alt="Package Holidays" />
        <span>Package Holidays</span>
      </button>
    </div>
  )
}

export default SearchOptions