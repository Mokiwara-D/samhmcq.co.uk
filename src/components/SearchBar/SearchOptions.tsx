import styles from './SearchOptions.module.css'
import flightHotel from '../../assets/images/flightHotel.svg'
import city from '../../assets/images/city.svg'
import pkg from '../../assets/images/pkg.svg'
import type { SearchAction } from './searchTypes'

const SearchOptions = ({ selectedOption, dispatch }: { selectedOption: string, dispatch: React.Dispatch<SearchAction> }) => {
  return (
    <div className={styles.options}>
      <button
        className={selectedOption === 'flightHotel' ? styles.selected : ''}
        onClick={() => dispatch({ type: 'UPDATE_OPTION', payload: 'flightHotel' })}>
        <img src={flightHotel} alt="Flight & Hotel" />
        <span>Flight & Hotel</span>
      </button>
      <button
        className={selectedOption === 'city' ? styles.selected : ''}
        onClick={() => dispatch({ type: 'UPDATE_OPTION', payload: 'city' })}>
        <img src={city} alt="City Breaks" />
        <span>City Breaks</span>
      </button>
      <button
        className={selectedOption === 'package' ? styles.selected : ''}
        onClick={() => dispatch({ type: 'UPDATE_OPTION', payload: 'package' })}>
        <img src={pkg} alt="Package Holidays" />
        <span>Package Holidays</span>
      </button>
    </div>
  )
}

export default SearchOptions