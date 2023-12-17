import React from 'react'
import './App.css'
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BusinessIcon from '@mui/icons-material/Business';
function TempCard() {
  return (
    <div className=' '>

        <div className='startUpName'>
            <BusinessIcon/> 
        </div>
        <div className='IV'> 
       <MiscellaneousServicesIcon/> 
        </div>
        <div className='Location' >
           <PlaceIcon/>  
        </div>
        <div className='Investment'>
      <AttachMoneyIcon/>

        </div>

    </div>
  )
}

export default TempCard