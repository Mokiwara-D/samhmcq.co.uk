import './SearchForm.css'
import planeIcon from '../../assets/images/Plane.svg'
import locationIcon from '../../assets/images/Location.svg'
import calendarIcon from '../../assets/images/calendar.svg'
import nightIcon from '../../assets/images/Nights.svg'
import passengersIcon from '../../assets/images/passengers.svg'
import searchIcon from '../../assets/images/search-icon.svg'

import React, { memo, useCallback, useMemo } from 'react';

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

interface SearchFormProps {
  searchInput: SearchInput;
  setSearchInput: (input: SearchInput) => void;
  onSubmit: (input: SearchInput) => void;
}

const SearchForm = memo(({ searchInput, setSearchInput, onSubmit }: SearchFormProps) => {
  // Temporary location options
  const departureOptions = useMemo(() => [
    { value: '', label: 'Select departure location' },
    { value: 'london', label: 'London, UK' },
    { value: 'manchester', label: 'Manchester, UK' },
    { value: 'birmingham', label: 'Birmingham, UK' }
  ], []);

  const destinationOptions = useMemo(() => [
    { value: '', label: 'Select destination' },
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

  const handleDepartureChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchInput({ ...searchInput, departure: e.target.value });
  }, [searchInput, setSearchInput]);

  const handleDestinationChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchInput({ ...searchInput, destination: e.target.value });
  }, [searchInput, setSearchInput]);

  const handleDepartureDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput({ ...searchInput, departureDate: e.target.value });
  }, [searchInput, setSearchInput]);

  const handleReturnDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput({ ...searchInput, returnDate: e.target.value });
  }, [searchInput, setSearchInput]);

  const handleAdultsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setSearchInput({
      ...searchInput,
      passengers: { ...searchInput.passengers, adults: value }
    });
  }, [searchInput, setSearchInput]);

  const handleChildrenChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setSearchInput({
      ...searchInput,
      passengers: { ...searchInput.passengers, children: value }
    });
  }, [searchInput, setSearchInput]);

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <div className="search-bar__form-group">
        <img src={planeIcon} alt="Plane" />
        <label htmlFor="departure">Departure Location</label>
        <select
          id="departure"
          value={searchInput.departure}
          onChange={handleDepartureChange}
          aria-label="Departure location"
          required
        >
          {departureOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search-bar__form-group">
        <img src={locationIcon} alt="Location" />
        <label htmlFor="destination">Destination Location</label>
        <select
          id="destination"
          value={searchInput.destination}
          onChange={handleDestinationChange}
          aria-label="Destination location"
          required
        >
          {destinationOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search-bar__form-group">
        <img src={calendarIcon} alt="Calendar" />
        <label htmlFor="departure-date">Departure Date</label>
        <input
          id="departure-date"
          type="date"
          value={searchInput.departureDate || todayDate}
          min={todayDate}
          onChange={handleDepartureDateChange}
          aria-label="Departure date"
        />
      </div>
      <div className="search-bar__form-group">
        <img src={nightIcon} alt="Return" />
        <label htmlFor="return-date">Return Date</label>
        <input
          id="return-date"
          type="date"
          value={searchInput.returnDate || tomorrowDate}
          min={searchInput.departureDate || tomorrowDate}
          onChange={handleReturnDateChange}
          aria-label="Return date"
        />
      </div>
      <div className="search-bar__form-group">
        <img src={passengersIcon} alt="Passengers" />
        <label htmlFor="passengers">Passengers</label>
        <div className="search-bar__form--passengers">
          <div className="search-bar__form--adults">
            <label htmlFor="adults">Adults: </label>
            <input
              id="adults"
              type="number"
              value={searchInput.passengers.adults}
              onChange={handleAdultsChange}
              min={1}
              max={99}
              aria-label="Number of adults"
            />
          </div>
          <div className="search-bar__form--children">
            <label htmlFor="children">Children: </label>
            <input
              id="children"
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
      <button type="submit" className="search-bar__form-submit">
        <img src={searchIcon} alt="Search" />
        SEARCH
      </button>
    </form>
  );
});

SearchForm.displayName = 'SearchForm';

export default SearchForm;