import { Suspense, useState } from 'react'
import Countries from './components/countries/Countries'
import './App.css'


const CountryPromise = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();

}




function App() {

  const something = CountryPromise();
  
  return (
    <>
     <h3>Introduction to React</h3>
     <Suspense fallback={<p>Data is being loaded</p>}> 
       <Countries something={something}></Countries>
     </Suspense>
   
    </>
  )
}

export default App
