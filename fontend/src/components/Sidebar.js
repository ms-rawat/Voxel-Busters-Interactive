// Sidebar.js
import React, { useContext, useEffect } from 'react';
import GlobleStatemgt from '../GlobleStatemgt';
import InvestmentType from './filters/InvestmentType';
import IndustryVertical from './filters/IndustryVertical';
import CityLocation from './filters/CityLocation';
import './sidebar.css'
function Sidebar({ data }) {
  const { filters, setFilters } = useContext(GlobleStatemgt);
  const investmentTypes = [...new Set(data.map(startup => startup.InvestmentType))];
  const Industry_Vertical = [...new Set(data.map(startup => startup.IndustryVertical))]
  const CityLocaiton = [...new Set(data.map(startup => startup.CityLocation))]

  const handleCityChange = (newLocation) => {
    
    setFilters((prevFilters) => ({ ...prevFilters, CityLocation: newLocation }));
  }; 
  
  const handleInvestmentTypeChange=(newType)=>{
    setFilters((prevFilters) => ({ ...prevFilters, InvestmentType: newType }));

  }

  const handleInvestverticalChange=(newVertical)=>{
    
    setFilters((prevFilters)=>({...prevFilters,IndustryVertical:newVertical}))
  }
  return (
    <div className='fixed sidebar w-full'>
      <div className='text-center font-bold text-lg border  m-2'>Filters</div>
      <div> <InvestmentType data={investmentTypes} onInvestmentTypeChange={handleInvestmentTypeChange} /></div>
      <div> <IndustryVertical data={Industry_Vertical} onInvestverticalChange={handleInvestverticalChange}  /></div>
      <div><CityLocation data={CityLocaiton} onCityChange={handleCityChange} /></div>
    </div>
  );
}

export default Sidebar;
