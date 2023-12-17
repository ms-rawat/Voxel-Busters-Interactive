import React, { useEffect, useState } from 'react';
import icon from './icon.svg';

function Searchbar({ data, onInvestverticalChange }) {
  const [isOpen, setisOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [selectedIV, setSelectedIV] = useState([]);


  const handleCheckboxChange = (event) => {
    const InvestmentIV = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedIV((IV) => [...IV, InvestmentIV]);
    } else {
      setSelectedIV((IV) => IV.filter((c) => c !== InvestmentIV));
    }


  };
  useEffect(() => {
    onInvestverticalChange(selectedIV)


  }, [selectedIV])
  

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item && item.toLowerCase().includes(searchTerm)
  );

  const toggleDropdown = (e) => {
    setisOpen(!isOpen);
  };

  return (
    <div className='flex flex-col bg-slate-50 '>
      <div className='font-bold ms-4 mb-3 flex flex-row justify-between'>
        <div>Industry-Vertical</div>
        <div onClick={toggleDropdown}>
          <img
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} dropdown hover:cursor-pointer`}
            src={icon}
            alt='..'
          />
        </div>
      </div>
      <div
        className={`${isOpen ? 'flex flex-col' : 'hidden'
          } space-y-2`}
      >
        <div className='ms-3'> <input
          className='ps-2 border rounded-md'
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder=" Search Industry-Type"
        /></div>

        {
          filteredData.map((item,index) => (
            <div key={index} className='ms-3'>
              <input type='checkbox' value={item} className='form-checkbox' onChange={handleCheckboxChange} id='flexCheckDefault' />
              <label className='font-semibold ml-2' htmlFor='flexCheckDefault'>
                {item}
              </label>
            </div>
          ))
        }

      </div>
      <hr className='mx-4' />
    </div>
  );
}

export default Searchbar;
