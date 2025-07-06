import styles from './SearchBar.module.css'
import SearchOptions from './SearchOptions'
import SearchForm from './SearchForm'
import { useState } from 'react';

interface SearchInput {
  departure: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: {
    adults: number;
    children: number;
  };
}

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<SearchInput>({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: {
      adults: 1,
      children: 0,
    }
  });

  const handleSubmit = (input: SearchInput) => {
    console.log(input);
  }

  return (
    <section className={styles.searchBar}>
      <SearchOptions />
      <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} onSubmit={handleSubmit} />
    </section>
  )
}

export default SearchBar