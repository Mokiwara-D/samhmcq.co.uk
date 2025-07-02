import './SearchForm.css'

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

  const handleDepartureChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput({ ...searchInput, departure: e.target.value });
  }, [searchInput, setSearchInput]);

  const handleDestinationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
      {/* TODO: Add destination and departure date input */}
      <div className="search-bar__form-group">
      <label htmlFor="departure">Departure Location</label>
      <input
        id="departure"
        type="text"
        placeholder="TEMP INPUT"
        value={searchInput.departure}
        onChange={handleDepartureChange}
        aria-label="Departure location"
      />
      </div>
      <div className="search-bar__form-group">
      <label htmlFor="destination">Destination Location</label>
      <input
        id="destination"
        type="text"
        placeholder="TEMP INPUT"
        value={searchInput.destination}
        onChange={handleDestinationChange}
        aria-label="Destination location"
      />
      </div>
      <div className="search-bar__form-group">
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
      <label htmlFor="adults">Passengers</label>
      <input
        id="adults"
        type="number"
        value={searchInput.passengers.adults}
        onChange={handleAdultsChange}
        min={1}
        max={99}
        aria-label="Number of adults"
      />
      <label htmlFor="children">Children</label>
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
      <button type="submit" className="search-bar__form-submit">SEARCH</button>
    </form>
  );
});

SearchForm.displayName = 'SearchForm';

export default SearchForm;