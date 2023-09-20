import { useState } from 'react'
import CompoundTotal from './components/CompoundTotal'
import './App.css'

function App() {
  const [compound, setCompound] = useState({
    prenciple_amount : "",
    monthly_contribution : null,
    intrest_rate : "",
    year : "",
  })

  return (
    <>
     
<div className="w-96 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Calculator for compound int</h5>
        <div>
            <label htmlFor="prenciple_amountt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Principle Amount</label>
            <input type="text" name="prenciple_amount" onChange={(e) => setCompound({...compound, prenciple_amount : e.target.value})} id="prenciple_amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="100000" required />
        </div>
        <div>
            <label htmlFor="monthly_contribution" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Contribution</label>
            <input type="text" name="monthly_contribution" onChange={(e) => setCompound({...compound, monthly_contribution : e.target.value})} id="monthly_contribution" placeholder="100" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label htmlFor="intrest_rate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intrest Rate</label>
            <input type="text" name="intrest_rate" id="intrest_rate" onChange={(e) => setCompound({...compound, intrest_rate : e.target.value})} placeholder="%" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Of Investment</label>
            <input type="text" name="year" id="monthly_coyearntribution" onChange={(e) => setCompound({...compound, year : e.target.value})} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>      
    </form>
    <CompoundTotal prenciple_amount={compound.prenciple_amount} monthly_contribution={compound.monthly_contribution} intrest_rate={compound.intrest_rate} year={compound.year} />     
</div>

    </>
  )
}

export default App
