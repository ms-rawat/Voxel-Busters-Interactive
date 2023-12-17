import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';
import GlobleStatemgt from '../GlobleStatemgt';
import Pagination from './Pagination';
import '../App.css'
import './Main.css'
import Drawer from './Drawer'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const DataComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    CityLocation: [],
    InvestmentType: [],
    IndustryVertical: [],
  });

  const datafiltration = (filters, data) => {

    if (
      filters.CityLocation.length === 0 &&
      filters.InvestmentType.length === 0 &&
      filters.IndustryVertical.length === 0
    ) {
      setFilteredData(data);
    } else {
      let dummyarray = data.filter(
        (item) =>
          (filters.CityLocation.length === 0 || filters.CityLocation.includes(item.CityLocation)) &&
          (filters.InvestmentType.length === 0 || filters.InvestmentType.includes(item.InvestmentType)) &&
          (filters.IndustryVertical.length === 0 || filters.IndustryVertical.includes(item.IndustryVertical))
      );
      setFilteredData(dummyarray);
    }
  };

  useEffect(() => {
    datafiltration(filters, data);
  }, [filters, data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobleStatemgt.Provider value={{ filters, setFilters }}>
      <div className='main'>
        <header className=' header  bg-slate-900 h-24 text-center '>
          <div className='mt-5 text-6xl' >
          Voxel Busters Interactive
          </div>
          


        </header>
        <nav className='nav flex flex-row-reverse bg-slate-900  text-lg text-slate-100    '>
          <div className=' sm:hidden block cursor-pointer border-2 rounded-md  m-2 p-2 hover:bg-slate-500'>
            <Drawer data={data} />
          </div>
          <div className='cursor-pointer border-2 rounded-md  m-2 p-2 hover:bg-slate-500'>
            <Link to='/insert' > <AddIcon/>add new startup</Link>
          </div>
        </nav>
        <div className='sidebar bg-slate-50  box-border  hidden sm:block '>
          <Sidebar data={data} />
        </div>
        <main className=''>
          <Pagination filteredData={filteredData} />
        </main>

      </div>
    </GlobleStatemgt.Provider>
  );
};

export default DataComponent;
