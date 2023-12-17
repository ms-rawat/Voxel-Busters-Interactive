// Card.js
import React from 'react';
import Popup from './Popup';
import '../App.css'
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
const Card = ({ startup }) => {
  const dateString = startup.Date;


const dateObject = new Date(dateString);


const year = dateObject.getFullYear();

console.log(year);
  return (
    <div className="card  flex-grow mx-auto border flex flex-col p-4 md:w-1/2 w-full  hover:cursor-pointer bg-slate-50  hover:bg-slate-400  pointer-events-auto ">
    <Popup data={startup}

    >
      {({ handleOpenModal }) => (
        <div
          onClick={handleOpenModal}
        >
          
        <div className='startUpName'>
            <BusinessIcon/> {startup.StartupName}
        </div>
        <div className='IV'> 
       <EventIcon/>  {year}
        </div>
        <div className='IV'> 
       <MiscellaneousServicesIcon/>  {startup.IndustryVertical}
        </div>
        <div className='Location' >
           <PlaceIcon/>  {startup.CityLocation}
        </div>
        <div className='Investment'>
      <AttachMoneyIcon/>  {startup.AmountInUSD}

        </div>
        </div>
      )}
    </Popup>
    </div>
  );
};

export default Card;
