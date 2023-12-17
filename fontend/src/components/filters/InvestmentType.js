import React, { useEffect, useState } from 'react';
import icon from './icon.svg';
import './sidebar.css';

function InvestmentType({data,onInvestmentTypeChange}) {
  const [isOpen, setisOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedIType, setSelectedIType] = useState([]);
 
  
  const handleCheckboxChange = (event) => {
    const InvestmentType = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedIType((prevCities) => [...prevCities, InvestmentType]);
    } else {
      setSelectedIType((prevCities) => prevCities.filter((c) => c !== InvestmentType));
    }

    
  };
  useEffect(()=>{
    onInvestmentTypeChange(selectedIType)
  
  
  },[selectedIType])

  



  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item && item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const toggleDropdown = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <div className='flex flex-col bg-slate-50 ' >
      <div className='font-bold ms-3 mb-3 flex flex-row justify-between'>
        <div>Investment-Type</div>
        <div onClick={toggleDropdown}>
          <img
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} dropdown hover:cursor-pointer`}
            src={icon}
            alt='..'
          />
        </div>
      </div>

      <div
  className={`${
    isOpen ? 'flex flex-col z-10' : 'hidden'
  } justify-between ms-4`}
>
        

        <div className='ms-3'> <input
                className='ps-2 border rounded-md'
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder=" Search investment-type."
        /></div>
         
         {
          filteredData.map((item,index)=>(
            <div key={index} className='ms-3'>
            <input type='checkbox' value={item} onChange={handleCheckboxChange}  className='form-checkbox' />
            <label className='font-semibold ml-2'>{item}</label>
          </div>
          ))
         }


        
       
      </div>

      <hr className='mx-4' />
    </div>
  );
}

export default InvestmentType;
