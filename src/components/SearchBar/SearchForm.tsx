import styles from './SearchForm.module.css'
import planeIcon from '../../assets/images/Plane.svg'
import locationIcon from '../../assets/images/Location.svg'
import calendarIcon from '../../assets/images/calendar.svg'
import nightIcon from '../../assets/images/Nights.svg'
import passengersIcon from '../../assets/images/passengers.svg'
import searchIcon from '../../assets/images/search-icon.svg'
import React, { memo, useCallback, useMemo } from 'react';
import type { SearchInput, SearchAction } from './searchTypes';

interface SearchFormProps {
  searchInput: SearchInput;
  dispatch: React.Dispatch<SearchAction>;
  onSubmit: (input: SearchInput) => void;
}

const SearchForm = memo(({ searchInput, dispatch, onSubmit }: SearchFormProps) => {
  // Temporary location options made with AI
  const locationOptions = useMemo(() => [
    { value: '', label: 'Select destination' },
    { value: 'london', label: 'London, UK' },
    { value: 'paris', label: 'Paris, France' },
    { value: 'rome', label: 'Rome, Italy' },
    { value: 'barcelona', label: 'Barcelona, Spain' }
  ], []);

  const { todayDate, tomorrowDate } = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return {
      todayDate: today.toISOString().split('T')[0],
      tomorrowDate: tomorrow.toISOString().split('T')[0]
    };
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(searchInput);
  }, [onSubmit, searchInput]);

  const handleAdultsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    dispatch({ type: 'UPDATE_ADULTS', payload: value });
  }, [dispatch]);

  const handleChildrenChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    dispatch({ type: 'UPDATE_CHILDREN', payload: value });
  }, [dispatch]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <img src={planeIcon} alt="Plane" />
        <div className={styles.formGroupContent}>
          <label htmlFor="departure">Departure Location</label>
          <select
            id="departure"
            value={searchInput.departure}
            onChange={(e) => dispatch({ type: 'UPDATE_DEPARTURE', payload: e.target.value })}
            aria-label="Departure location"
            required
          >
            {locationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <img src={locationIcon} alt="Location" />
        <div className={styles.formGroupContent}>
          <label htmlFor="destination">Destination Location</label>
          <select
            id="destination"
            value={searchInput.destination}
            onChange={(e) => dispatch({ type: 'UPDATE_DESTINATION', payload: e.target.value })}
            aria-label="Destination location"
            required
          >
            {locationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <img src={calendarIcon} alt="Calendar" />
        <div className={styles.formGroupContent}>
          <label htmlFor="departure-date">Departure Date</label>
          <input
            id="departure-date"
            type="date"
            value={searchInput.departureDate || todayDate}
            min={todayDate}
            onChange={(e) => dispatch({ type: 'UPDATE_DEPARTURE_DATE', payload: e.target.value })}
            aria-label="Departure date"
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <img src={nightIcon} alt="Return" />
        <div className={styles.formGroupContent}>
          <label htmlFor="return-date">Return Date</label>
          <input
            id="return-date"
            type="date"
            value={searchInput.returnDate || tomorrowDate}
            min={searchInput.departureDate || tomorrowDate}
            onChange={(e) => dispatch({ type: 'UPDATE_RETURN_DATE', payload: e.target.value })}
            aria-label="Return date"
          />
        </div>
      </div>
      <div className={`${styles.formGroup}`}>
        <img src={passengersIcon} alt="Passengers" />
        <div className={styles.formGroupContent}>
          <label>Passengers</label>
          <div className={styles.passengersControls}>
            <div className={styles.adults}>
              <span>Adults:</span>
              <input
                type="number"
                value={searchInput.passengers.adults}
                onChange={handleAdultsChange}
                min={1}
                max={99}
                aria-label="Number of adults"
              />
            </div>
            <div className={styles.children}>
              <span>Children:</span>
              <input
                type="number"
                value={searchInput.passengers.children}
                onChange={handleChildrenChange}
                min={0}
                max={99}
                aria-label="Number of children"
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.formSubmit}>
        <img src={searchIcon} alt="Search Icon" />
        SEARCH
      </button>
    </form>
  );
});

SearchForm.displayName = 'SearchForm';

export default SearchForm;