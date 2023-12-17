import { Button, TextField } from '@mui/material'
import React from 'react'
import '../App.css'
import { useFormik } from 'formik'
function InsertStartup() {

const sendData=(values)=>{
fetch('http://localhost:8000/insert',
{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(values)
})
.then(res=>{
  if(res.ok)
  {
    console.log("data inserted successfully")
   const tag=document.querySelector('.message')
   tag.innerHTML="data is inserted successfully !"
    
  }
  else{
    console.log("error occured")
    const tag=document.querySelector('.message')
   tag.innerHTML="try again!"
  }
})
}

const formik = useFormik({
  initialValues:{
    Date: '',
  StartUpName: '',
  IndustryVertical: '',
  SubVertical: '',
  CityLocation: '',
  InvestorsName: '',
  InvestmentType: '',
  AmountInUSD: '',
  },

onSubmit:(values)=>{
sendData(values)
}
}
)

  return (
    <div className='flex justify-center mt-10 ' >

        <form className='border-2 p-3 border-red-300 bg-slate-100 w-1/4 rounded-md' onSubmit={formik.handleSubmit}>
            <div className=' heading text-center text-lg font-bold m-3'>
            Voxel Busters Interactive 
            </div>
            <div className='flex flex-col gap-2  '>
            <div>
                
            <TextField  value={formik.values.StartUpName} onChange={formik.handleChange} style={{ width: '100%' }} name='StartUpName' label="StartUp Name" variant="outlined"  />

            </div>
            <div>
            <TextField value={formik.values.Date} onChange={formik.handleChange} style={{ width: '100%' }}  name='Date'   type='date' variant="outlined"  />

            </div>

            <div>
            <TextField value={formik.values.IndustryVertical} onChange={formik.handleChange} style={{ width: '100%' }}  name='IndustryVertical' label="Industry Vertical" type='text' variant="outlined"  />

            </div>

            <div>
            <TextField value={formik.values.SubVertical} onChange={formik.handleChange} style={{ width: '100%' }}  name='SubVertical' label="Subvertical" type='text' variant="outlined"  />

            </div>
            <div>
            <TextField value={formik.values.CityLocation} onChange={formik.handleChange} style={{ width: '100%' }}  name='CityLocation' label="City Location" type='text' variant="outlined"  />

            </div>
            <div>
            <TextField value={formik.values.InvestorsName} onChange={formik.handleChange} style={{ width: '100%' }}  name='InvestorsName' label="invester Name" type='text' variant="outlined"  />

            </div>
            <div>
            <TextField value={formik.values.InvestmentType} onChange={formik.handleChange} style={{ width: '100%' }}  name='InvestmentType' label="investement Type" type='text' variant="outlined"  />

            </div>
            <div>
            <TextField value={formik.values.AmountInUSD} onChange={formik.handleChange} style={{ width: '100%' }}  name='AmountInUSD' label="AmountInUSD" type='text' variant="outlined"  />

            </div>
            <div className='message text-slate-900 text-center'>

            </div>
            <div className='text-center'>
                <Button variant='contained' type='submit'>Submit</Button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default InsertStartup
