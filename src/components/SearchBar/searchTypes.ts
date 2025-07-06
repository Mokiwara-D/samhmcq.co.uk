export interface SearchInput {
  option: string;
  departure: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: {
    adults: number;
    children: number;
  };
}

export type SearchAction =
  | { type: 'UPDATE_OPTION'; payload: string }
  | { type: 'UPDATE_DEPARTURE'; payload: string }
  | { type: 'UPDATE_DESTINATION'; payload: string }
  | { type: 'UPDATE_DEPARTURE_DATE'; payload: string }
  | { type: 'UPDATE_RETURN_DATE'; payload: string }
  | { type: 'UPDATE_ADULTS'; payload: number }
  | { type: 'UPDATE_CHILDREN'; payload: number }; 