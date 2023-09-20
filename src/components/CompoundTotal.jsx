
import { useState } from 'react'

function CompoundTotal({
    prenciple_amount,
    monthly_contribution,
    intrest_rate,
    year
  }) {

    const A = {
      P : prenciple_amount,
      r : intrest_rate / 100,
      n : 12,
      t : year,
      PMT : monthly_contribution,
    }

  return (
    <>
     
    <div className='mt-5'>
            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <input type="text" name="year" id="monthly_coyearntribution" placeholder="" value={A.PMT === null ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t).toFixed(2)) : 
          (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)+(A.PMT *( Math.pow(1 + A.r / A.n, A.n * A.t)-1))/ (A.r / A.n)).toFixed(2)} className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-300 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white" />
     </div>      


    </>
  )
}

export default CompoundTotal
