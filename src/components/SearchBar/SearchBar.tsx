import styles from './SearchBar.module.css'
import SearchOptions from './SearchOptions'
import SearchForm from './SearchForm'
import { useReducer } from 'react';
import type { SearchInput, SearchAction } from './searchTypes';

const searchReducer = (state: SearchInput, action: SearchAction): SearchInput => {
  switch (action.type) {
    case 'UPDATE_OPTION':
      return { ...state, option: action.payload };
    case 'UPDATE_DEPARTURE':
      return { ...state, departure: action.payload };
    case 'UPDATE_DESTINATION':
      return { ...state, destination: action.payload };
    case 'UPDATE_DEPARTURE_DATE':
      return { ...state, departureDate: action.payload };
    case 'UPDATE_RETURN_DATE':
      return { ...state, returnDate: action.payload };
    case 'UPDATE_ADULTS':
      return { 
        ...state, 
        passengers: { ...state.passengers, adults: action.payload } 
      };
    case 'UPDATE_CHILDREN':
      return { 
        ...state, 
        passengers: { ...state.passengers, children: action.payload } 
      };
    default:
      return state;
  }
};

const initialState: SearchInput = {
  option: 'flightHotel',
  departure: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  passengers: {
    adults: 1,
    children: 0,
  }
};

const SearchBar = () => {
  const [searchInput, dispatch] = useReducer(searchReducer, initialState);

  const handleSubmit = (input: SearchInput) => {
    console.log(input);
  }

  return (
    <section className={styles.searchBar}>
      <SearchOptions selectedOption={searchInput.option} dispatch={dispatch} />
      <SearchForm searchInput={searchInput} dispatch={dispatch} onSubmit={handleSubmit} />
    </section>
  )
}

export default SearchBar