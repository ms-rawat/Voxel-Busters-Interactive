import { createContext } from 'react';

const GlobleStatemgt = createContext({
  
  cityLocation:[],
  IndustryVertical:[],
  Investmenttype:[],
  setFilters: (filters) => {},
});

export default GlobleStatemgt;
