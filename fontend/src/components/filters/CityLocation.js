import React, { useEffect, useState } from 'react';
import icon from './icon.svg';

function CityLocation({ data, onCityChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const [selectedCities, setSelectedCities] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const city = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCities((prevCities) => [...prevCities, city]);
    } else {
      setSelectedCities((prevCities) => prevCities.filter((c) => c !== city));
    }

    
  };
  useEffect(()=>{
    onCityChange(selectedCities)
  },[selectedCities])


  

  const uniqueData = data.filter((item) =>
    item && item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col bg-slate-50'>
      <div className='font-bold ms-4 mb-3 flex flex-row justify-between'>
        <div>City-Location</div>
        <div onClick={toggleDropdown}>
          <img
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} dropdown hover:cursor-pointer`}
            src={icon}
            alt='..'
          />
        </div>
      </div>
      <div className={`${isOpen ? 'flex flex-col' : 'hidden'} space-y-2`}>
        <div className='ms-3'>
          <input
            className='ps-2 border rounded-md'
            type='text'
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder=' Search city...'
          />
        </div>

        {uniqueData.map((item) => (
          <div className='ms-3' key={item}>
            <input
              type='checkbox'
              value={item}
              className='form-checkbox'
              id={`checkbox-${item}`}
              onChange={handleCheckboxChange}
              checked={selectedCities.includes(item)}
            />
            <label className='font-semibold ml-2' htmlFor={`checkbox-${item}`}>
              {item}
            </label>
          </div>
        ))}
      </div>
      <hr className='mx-4' />
    </div>
  );
}

export default CityLocation;
