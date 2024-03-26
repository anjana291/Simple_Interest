import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  //state to hold value
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  //conditional rendering
  const [Isprinciple, setIsPrinciple] = useState(true)
  const [Israte, setIsRate] = useState(true)
  const [Isyear, setIsYear] = useState(true)

  const validate = (e) => {
    const {name , value} = e.target 
    console.log(name);
    console.log(value);    

    //regular
  //  console.log(!!value.match(/^[0-9]*$/));
  if(!!value.match(/^[0-9]*$/)){
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }else{
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
 }
const handleReset = () =>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
}
const handleInterest =()=>{
  setInterest((principle*rate*year)/100)
}

  return (
    <>
        <div className='main'>
          <div className='sub p-5'>
            <h1 className='text-center'>Simple Interest App</h1>
            <p className='text-center'>Calculate Your Simple Interest Easily</p>

            <div className='w-100 d-flex justify-content-center align-items-center rounded mt-5 shadow flex-column result'>
              <h1>₹ {interest}</h1>
              <p>Total Simple Interest</p>
            </div>

            <form action="" className='mt-5'>
            <TextField id="outlined-basic" name='principle' value={principle||""} label="₹ Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
            {!Isprinciple && <p className='text-danger'>Invalid Input</p>}

            <TextField id="outlined-basic" name='rate' value={rate|| ""} label="Rate of Interest (p.a) %" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
            {!Israte &&<p className='text-danger'>Invalid Input</p>}

            <TextField id="outlined-basic" name='year' value={year||""} label="Year(Yr)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
            {!Isyear && <p className='text-danger'>Invalid Input</p>}

            <div className='d-flex mt-4'>
            <Button className='w-50 p-3 me-3' variant="contained" color='success' disabled={Isprinciple && Israte && Isyear?false:true} onClick={handleInterest}>Calculate</Button>
            <Button className='w-50 p-3' variant="outlined" color='primary' onClick={handleReset}>Reset</Button>
            </div>
            </form>
           </div>         
        </div> 
    </>
  )
}

export default App
