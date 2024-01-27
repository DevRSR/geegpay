import React from 'react'
import SalesTrends from './SaleTrendsHeader'
import Chart from './Chart'

function Index() {
  return (
    <div className=' flex flex-col flex-1 w-full max-h-[374px] p-2 bg-[#fff] dark:bg-slate-700 sm:p-5 rounded-lg shadow'>
        <SalesTrends />
        <div className=' h-[300px] lg:h-[207px] xl:h-[696px] cursor-pointer'>
            <Chart />
        </div>

    </div>
  )
}

export default Index